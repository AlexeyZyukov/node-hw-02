
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const uri = process.env.URI_DB;

//db - return promise
const db = MongoClient.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1
});

// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

process.on('SIGINT', async () => {
    const client = await db
    client.close()
    console.log('Disconnected from DB');
    process.exit(1)
})

module.exports = db;