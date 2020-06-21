const fs = require('fs');
fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });
async function cache() {
    const api_res = await fetch(`https://api.hypixel.net/skyblock/bazaar?key=92e1a16e-382e-4840-b482-7966d24f2c1a`);

    fs.writeFile('cache.json', api_res);
}