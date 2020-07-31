export default async function personalHandler(req, res) {
    const {
        query: {id},
        method,
    } = req;

    const bazaarItems = await getServerSideProps(id);

    switch(method) {
        case 'GET':
            res.status(200).json({
                responseTime: Date.now().toString(),
                coins: id,
                bazaarItems
            })
            console.log("Response Sent Successfully");
            
    }

}


// ------------------------- SERVER CODE STARTS HERE -------------------------

function limit(val, min, max) {
    return val < min ? min : (val > max ? max : val)
  }
  
  const formatter = new Intl.NumberFormat()
  
  function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
  }
  
  function advise(balance, count = 6, time = 5, include_stablity = true, item_cache) {
  
    const unsorted = []
  
    for (const product_name in item_cache) {
        const product = item_cache[product_name]
        //console.log(product);
        const profit = (product.sell * 0.99) - product.buy
  
        const tvolume = (Math.min(product.volume, product.svolume) / 10080) * time
        const evolume = Math.floor(limit(tvolume, 0, balance / product.buy))
  
        const eprofit = (evolume * profit)
  
        unsorted.push({
            'name': product_name,
            'evolume': evolume,
            'invested': (product.buy * evolume).toFixed(2),
            'pinvested': (((product.buy * evolume) * 100) / balance).toFixed(1),
            'eprofit': eprofit.toFixed(2),
            'pprofit': ((profit / product.buy) * 100).toFixed(1),
            'gradient': product.sell - product.sell_ema
        })
    }
  
    // sort for the best deals
    const sorted = unsorted.sort((a, b) => {
        return b.eprofit - a.eprofit
    })
  
  
    // This isn't really used ever but it was in the original codebase so I will leave it here xD ( it doesn't increase package size sent to the client ) 
    if (include_stablity) return sorted.filter(item => (item_cache[item.name].buy > item_cache[item.name].buy_ema) && (item_cache[item.name].sell > item_cache[item.name].sell_ema)).slice(0, count);
  
    // return the top n deals
    return sorted.slice(0, count);
  }
  
 async function getServerSideProps(coins) {
    const reqTime = Date.now();
    const admin = require('firebase-admin');
    const nameJson = require('../../../src/data/prettyNames.json');
    // *** END IMPORTS
  
    // only init app once, Constants.firebaseInit will revert back to false when the server hot reloads so this will throw an errors
    if (admin.apps.length === 0) {
      admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)),
        databaseURL: "https://skyblock-c235c.firebaseio.com/"
      });
    }
    
  
    var itemRef = admin.database().ref("/").child("bazaar");
    var json = Promise.resolve(itemRef.once("value").then(function(snapshot) {
      return snapshot.val()['json']
    }));
    // THEY'VE BEEN YELLING AT ME ABOUT NULL VALUES I DONT KNOW WHAT TO DO SOMETIMES JS ERROR MESSAGES ARE SUPER UNHELPFUL
    // i figured it out, for some reason .then wasnt working but await json was askdlfjklasdjflaskdfjlaskdfjlsadjf
    json.catch((error) => {
      console.log(`ERROR! ${error}`);
    });
  
    var itemJson = await json;
  
    
    // *** BEGIN DATA FRESHNESS CHECK
    let currentTime = Date.now().toString();
    let jsonTime = parseInt(itemJson['lastUpdated'].toString().substring(0,10)) + 30;
  
    console.log(`${currentTime.substring(0, 10)} > ${jsonTime}`)
    
    if(parseInt(currentTime.substring(0, 10)) > jsonTime) {
        console.log("Updating Cache")
        let startTime = Date.now();
        const res = await fetch(`https://api.slothpixel.me/api/skyblock/bazaar`);
        let itemJsonTemp = await res.json();
        let time = Date.now();
        itemJson = { lastUpdated: time, products: itemJsonTemp }
        var itemRef = admin.database().ref("/").child("bazaar");
        itemRef.set({ 
            json: itemJson
        });
        console.log(`SlothPixel Request Time ${Date.now() - startTime}`)
    }
    // *** END CHECK
  
    let item_cache = {};
  
    // My assumption is that they'll fix this item at some point, this is just so my code doesn't get mad when that point comes.
    try{
        delete itemJson['products']['ENCHANTED_CARROT_ON_A_STICK']
    } catch (e) {
        console.log('Could not delete ENCHANTED_CARROT_ON_A_STICK; Continuing')
    }
  
    const items = Object.keys(itemJson['products']).map(function (key) {
        try{
            return {
                'name': nameJson[key]['name'],
                'buy': itemJson['products'][key]['sell_summary'][0]['pricePerUnit'],
                'sell': itemJson['products'][key]['buy_summary'][0]['pricePerUnit'],
                'volume': itemJson['products'][key]['quick_status']['buyMovingWeek'],
                'svolume': itemJson['products'][key]['quick_status']['sellMovingWeek']
            }
        } catch (e) {
            console.error(e);
        }
    });
  
    const buy_point = [];
    const sell_point = [];
  
    for (const item of items) {
        if (!item_cache[item.name]) {
            item_cache[item.name] = {
                buy: item.buy,
                sell: item.sell,
                volume: item.volume,
                svolume: item.svolume,
                buy_ema: item.buy,
                sell_ema: item.sell
            }
        } else {
            const pre_b_ema = item_cache[item.name].buy_ema;
            const pre_s_ema = item_cache[item.name].sell_ema;
            const pre_b = item_cache[item.name].buy;
            const pre_s = item_cache[item.name].sell;
  
            item_cache[item.name].buy = item.buy;
            item_cache[item.name].sell = item.sell;
            item_cache[item.name].volume = item.volume;
            item_cache[item.name].svolume = item.svolume;
            item_cache[item.name].buy_ema = item.buy * k + pre_b_ema * (1 - k);
            item_cache[item.name].sell_ema = item.sell * k + pre_s_ema * (1 - k);
  
            if ((pre_b <= pre_b_ema) && (item.buy > item_cache[item.name].buy_ema)) buy_point.push(item.name);
            if ((pre_s >= pre_s_ema) && (item.sell < item_cache[item.name].sell_ema)) sell_point.push(item.name);
        }
    }
  
    const time = 15
    const bazaarItems = advise(coins, 6, Number.isNaN(time) ? 15 : time, false, item_cache);
    console.log(`Total Request Time ${Date.now() - reqTime}`)
    return bazaarItems;
  }
  