const admin = require('firebase-admin');
const nameJson = require('./data/prettyNames.json');
const serviceAccount = require('./serviceaccount.json');


function limit(val, min, max) {
    return val < min ? min : (val > max ? max : val)
  }
  
  const formatter = new Intl.NumberFormat()
  
  function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
  }
  
  function formatNumber(number) {
    if (number >= 1000000) {
        return formatter.format(round(number / 1000000, 2)) + 'M'
    } else if (number >= 1000) {
        return formatter.format(round(number / 1000, 2)) + 'K'
    } else {
        return round(number, 2)
    }
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
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
    async function getServerSideProps() {

  
    // only init app once, Constants.firebaseInit will revert back to false when the server hot reloads so this will throw an errors
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://skyblock-c235c.firebaseio.com/"
    });
    
    
    var itemRef = admin.database().ref("/").child("bazaar");
    var json = Promise.resolve(itemRef.once("value").then(function(snapshot) {
      return snapshot.val()['json']
    }));
    // THEY'VE BEEN YELLING AT ME ABOUT NULL VALUES I DONT KNOW WHAT TO DO SOMETIMES JS ERROR MESSAGES ARE SUPER UNHELPFUL
    json.catch((error) => {
      console.log(`ERROR! ${error}`);
    });
    console.log("test");
    json.then((itemJson) => {
      
      let item_cache = {};
  
      // CLEAN THIS UP LATER, USE CUSTOM JSON 
    
      const items = Object.keys(itemJson['products']).map(function (key) {
          if(key === 'ENCHANTED_CARROT_ON_A_STICK') return {
              'name': "broken",
              'buy': 1,
              'sell': 1,
              'volume': 1,
              'svolume': 1
          }
          if(key === 'CATALYST') return {
              'name': "Catalyst",
              'buy': itemJson['products'][key]['sell_summary'][0]['pricePerUnit'],
              'sell': itemJson['products'][key]['buy_summary'][0]['pricePerUnit'],
              'volume': itemJson['products'][key]['quick_status']['buyMovingWeek'],
              'svolume': itemJson['products'][key]['quick_status']['sellMovingWeek']
          }
          if(key === 'SUPER_EGG') return {
              'name': "Super Enchanted Egg",
              'buy': itemJson['products'][key]['sell_summary'][0]['pricePerUnit'],
              'sell': itemJson['products'][key]['buy_summary'][0]['pricePerUnit'],
              'volume': itemJson['products'][key]['quick_status']['buyMovingWeek'],
              'svolume': itemJson['products'][key]['quick_status']['sellMovingWeek']
          }
          if(key === 'STOCK_OF_STONKS') return {
              'name': "Stock of Stonks",
              'buy': itemJson['products'][key]['sell_summary'][0]['pricePerUnit'],
              'sell': itemJson['products'][key]['buy_summary'][0]['pricePerUnit'],
              'volume': itemJson['products'][key]['quick_status']['buyMovingWeek'],
              'svolume': itemJson['products'][key]['quick_status']['sellMovingWeek']
          }
          return {
              'name': nameJson[key]['name'],
              'buy': itemJson['products'][key]['sell_summary'][0]['pricePerUnit'],
              'sell': itemJson['products'][key]['buy_summary'][0]['pricePerUnit'],
              'volume': itemJson['products'][key]['quick_status']['buyMovingWeek'],
              'svolume': itemJson['products'][key]['quick_status']['sellMovingWeek']
          }
      });
    
      const buy_point = [];
      const sell_point = [];
    
      for (const item of items) {
          if (item.name === "ENCHANTED_CARROT_ON_A_STICK") continue;
          //console.log(item.buy);
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
    
      const bazaarItems = advise(100000, 6, Number.isNaN(time) ? 15 : time, false, item_cache);
    
      return {
        props: {
          bazaarItems,
        },
      }
    })
    
  
  }

getServerSideProps();