require("dotenv").config();
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_CONN_STRING;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {

    addToDB: async function(id,name,sign) {
      try {
        await client.connect();

        const database = client.db('aRM');
        const ztools = database.collection('ztool');

        // Query for a movie that has the title 'Back to the Future'
         const query = { guild: id, name: name, sign: sign};
        // const movie = await movies.findOne(query);
        const adds = await ztools.insertOne(query);
        console.log(adds);
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
  },
    showFromDB: async function(id,name) {
      try {
        await client.connect();

        const database = client.db('aRM');
        const ztools = database.collection('ztool');

        // Query for a movie that has the title 'Back to the Future'
         const query = { guild: id, name: name};
        // const movie = await movies.findOne(query);
        const adds = await ztools.insertOne(query);
        console.log(adds);
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }

}
