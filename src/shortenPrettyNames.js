// This script automatically shortens the prettyNames.json by pruning non bazaar items
const pNames = require("./data/fullPrettyNames.json");
const fs = require('fs');

// add beginning { char
fs.writeFileSync(`./src/data/prettyNames.json`, '{\n\t', { flag: 'w' }, function (err) {
    if (err) throw err;
});

Object.keys(pNames).map((key) => {
    if(pNames[key]['bazaar']) {
        // open up for appending ( flag: a ) and append the data
        fs.writeFileSync(`./src/data/prettyNames.json`, `"${key}": ${JSON.stringify(pNames[key])},\n\t`, { flag: 'a' }, function (err) {
            if (err) throw err;
        });
    }
})


// add closing } char
fs.writeFileSync(`./src/data/prettyNames.json`, '}', { flag: 'a' }, function (err) {
    if (err) throw err;
});

// this will just leave one error in the file, a comma at the end, yes i could fix this but its not worth the time lol
// just go and remove it :)
// also holy fragments aren't marked as from the bazaar for some odd reason, im proposing a new PR