// ANYONE READING THIS FILE PLEASE NOTE:
/* the src directory is NOT where the program begins, 
 * the program begins on the index.js file in the pages/ folder
 * this is just a placeholder for a cloud function that will be deployed later
 * thanks!
*/
var fetch = require("node-fetch");
var fs = require("fs");
var path = require("path");

var schedule = require('node-schedule');


const range = 12;
const k = 2 / (range + 1);

const cache_fp = path.resolve('C:/Users/rsale/Documents/SSB/src/data/cache.json');

let item_cache;



const backupCache = () => fs.promises.writeFile(cache_fp, JSON.stringify(item_cache));

const cache_handler = async () => {
    try {
        console.log('Running job...');
        const api_res = await fetch(`https://api.hypixel.net/skyblock/bazaar?key=92e1a16e-382e-4840-b482-7966d24f2c1a`);
        const json = await api_res.json();

        item_cache = json;

        await backupCache();
    } catch (error) {
        console.log(error);
    }
}

schedule.scheduleJob('*/30 * * * * *', cache_handler)
