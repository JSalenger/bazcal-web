var schedule = require('node-schedule');
var cache = require("./cache");

schedule.scheduleJob('*/30 * * * * *', cache.cache_handler)
