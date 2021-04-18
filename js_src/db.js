require("dotenv").config();
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_CONN_STRING;
const upsert = {upsert: true};
module.exports = {
    init: async function(guild) {
        try {
            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();

            let database = client.db('ztool');
            let ztools = database.collection('guilds');

            //let query = { guild: guild.id};
            let gid = {
                guild: guild.id,
                config: {
                    prefix: '!'
                }
            };
            const result = await ztools.insertOne(gid);
        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
    },
    removeGuild: async function(guild) {
        //remove entry of guild
    },
    addToDB: async function(id,name,sign) {
        let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      try {

        await client.connect();

        let database = client.db('ztool');
        let ztools = database.collection('guilds');

        // Query for a movie that has the title 'Back to the Future'
         let query = { guild: id};
         let update = {
             $addToSet: {
                 users: {
                     name: name,
                     sign: sign
                     //need date
                 }
            }
        };
         //let update = { name: name, sign: sign};
        // const movie = await movies.findOne(query);
        const adds = await ztools.updateOne(query, update, upsert);
        // const adds = await ztools.insertOne(query);
        //console.log(adds);
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
  },
    showFromDB: async function(id,name) {
        let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      try {

        await client.connect();

        const database = client.db('ztool');
        const ztools = database.collection('guilds');

        // Query for a movie that has the title 'Back to the Future'
         const query = { guild: id, name: name};
        // const movie = await movies.findOne(query);
        const adds = await ztools.findOne(query);
        //console.log(adds);
        return adds;
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }

}
