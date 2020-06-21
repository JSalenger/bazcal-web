let item_cache = {};


function limit(val, min, max) {
    return val < min ? min : (val > max ? max : val)
}


export function advise(balance, count = 6, time = 5, include_stablity = true) {
    //console.log(advise);

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

    const sorted = unsorted.sort((a, b) => {
        return b.eprofit - a.eprofit
    })

    //console.log(sorted);

    //console.log("Length " + sorted.length);

    if (include_stablity) return sorted.filter(item => (item_cache[item.name].buy > item_cache[item.name].buy_ema) && (item_cache[item.name].sell > item_cache[item.name].sell_ema)).slice(0, count)
    
    //console.log("Length " + sorted.length);

    //console.log(sorted.slice(0, 6));

    return sorted.slice(0, count);
}

function convertNumber(input) {
    let exp = /[A-z]+/.exec(input)
    let num = /[+-]?([0-9]*[.])?[0-9]+/.exec(input)

    if (exp[0].toUpperCase() == 'M' || exp[0].toUpperCase() == 'MIL') {
        return num[0] * 1000000
    } else if (exp[0].toUpperCase() == 'K') {
        return num[0] * 1000
    }
}

const formatter = new Intl.NumberFormat()

function formatNumber(number) {
    if (number >= 1000000) {
        return formatter.format(round(number / 1000000, 2)) + 'M'
    } else if (number >= 1000) {
        return formatter.format(round(number / 1000, 2)) + 'K'
    } else {
        return round(number, 2)
    }
}

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}


