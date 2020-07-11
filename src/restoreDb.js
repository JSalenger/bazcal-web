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
    const res = await fetch(`https://api.hypixel.net/skyblock/bazaar?key=92e1a16e-382e-4840-b482-7966d24f2c1a`);
    itemJson = await res.json();
    var itemRef = admin.database().ref("/").child("bazaar");
    itemRef.set({ 
        json: itemJson
    });
}
