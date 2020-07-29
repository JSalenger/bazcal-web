// restore db with fresh data if the code goes off the rails 
const admin = require('firebase-admin');
const fetch = require("node-fetch");
const serviceAccount = require('./serviceaccount.json');

// only init app once, Constants.firebaseInit will revert back to false when the server hot reloads so this will throw an errors
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://skyblock-c235c.firebaseio.com/"
});

foo();

async function foo() {
    let startTime = Date.now();
    const res = await fetch(`https://api.slothpixel.me/api/skyblock/bazaar`);
    itemJsonTemp = await res.json();
    let time = Date.now();
    itemJson = { lastUpdated: time, products: itemJsonTemp }
    var itemRef = admin.database().ref("/").child("bazaar");
    itemRef.set({ 
        json: itemJson
    });
    console.log(`Total Request Time ${Date.now() - startTime}`)
}
