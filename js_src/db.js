require("dotenv").config();
const MongoClient = require('mongodb').MongoClient;
//const {env} = process.env;
const connDB = process.env.DB_CONN_DB
const connUri = process.env.DB_CONN_URI
const connUser = process.env.DB_CONN_USER
const connPass = process.env.DB_CONN_PASS
const connUrl = process.env.DB_CONN_URL
const connArgs = process.env.DB_CONN_ARGS
//const uri = process.env.DB_CONN_STRING;
const connUrlComplete = `${connUri}://${connUser}:${connPass}${connUrl}${connArgs}`;
const upsert = {upsert: true};
//console.log(env.DB_CONN_STRING);
const Signs = require("./signs.js");
const DBclient = new MongoClient(connUrlComplete, { useNewUrlParser: true, useUnifiedTopology: true });

const Cleanup = require("node-cleanup");
module.exports = {
    connect: function() {
        return client = new MongoClient(connUrlComplete, { useNewUrlParser: true, useUnifiedTopology: true });
    },
    close: function() {

    },
    init: async function(guild) {
        let client = DBclient;
        try {
            //const client = new MongoClient(connUrlComplete, { useNewUrlParser: true, useUnifiedTopology: true });
            //await client.connect();
            if (!client.isConnected()) {
                await client.connect();
            }

            let database = client.db(connDB);
            let ztools = database.collection('guilds');
            let signsCollection = database.collection("signs");

            //let query = { guild: guild.id};
            let gid = {
                guild: guild.id,
                config: {
                    prefix: '!'
                }
            };
            const result = await ztools.insertOne(gid);
            //insert signs
            const initSignsPut = [
                        Signs.Aries,
                        Signs["Taurus"],
                        Signs["Gemini"],
                        Signs["Cancer"],
                        Signs["Leo"],
                        Signs["Virgo"],
                        Signs["Libra"],
                        Signs["Scorpio"],
                        Signs["Sagittarius"],
                        Signs["Capricorn"],
                        Signs["Aquarius"],
                        Signs["Pisces"]
                    ];
            signsCollection.insertMany(initSignsPut);
        } finally {
          // Ensures that the client will close when you finish/error
          //await client.close();
        }
    },
    removeGuild: async function(guild) {
        //remove entry of guild
    },
    addToDB: async function(id,name,sign) {
        //let client = new MongoClient(connUrlComplete, { useNewUrlParser: true, useUnifiedTopology: true });
        let client = DBclient;
      try {
          if (!client.isConnected()) {
              await client.connect();
          }
        //await client.connect();

        let database = client.db('ztool');
        let ztools = database.collection('guilds');

        // Query for a movie that has the title 'Back to the Future'
         let query = { guild: id};
         let update = {
             $addToSet: {
                 users: {
                     username: name,
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
        //await client.close();
      }
  },
    showFromDB: async function(id,name) {
        let client = DBclient;
      try {
          if (!client.isConnected()) {
              await client.connect();
          }
        //await client.connect();

        const database = client.db('ztool');
        const ztools = database.collection('guilds');

        // Query for a movie that has the title 'Back to the Future'
        console.log(`db.showFromDB name: ${name}`)
         const query = {
             guild: id,
             "users.username": name
             //note: queries in arrays must include all fields unless your 'sub' value it with a dot
             //below does not work unless yu also have sign: sign
             //users: {
                // name: name
             //}
         };
        // const movie = await movies.findOne(query);
        const adds = await ztools.findOne(query);
        //console.log(adds);
        return await adds;
      } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
      }
  },
  showAllFromDB: async function() {
      //let client = new MongoClient(connUrlComplete, { useNewUrlParser: true, useUnifiedTopology: true });
      let client = DBclient;
    try {
        if (!client.isConnected()) {
            await client.connect();
        }
      // await client.connect();

      const database = client.db('ztool');
      const ztools = database.collection('guilds');

      // Query for a movie that has the title 'Back to the Future'
       const query = { guild: id, username: name};
      // const movie = await movies.findOne(query);
      const adds = await ztools.find({guild: id});
      console.log(adds);
      return adds;
    } finally {
      // Ensures that the client will close when you finish/error
      //await client.close();
    }
    },
    getSign: async function(signName) {
        let signFound = false;
        let sign = null;
        // const signCap = signName.charAt(0).toUpperCase() + signName.slice(1)
        let signCap = Signs.capitalize(signName);
        let client = DBclient;
        try {
            if (!client.isConnected()) {
                await client.connect();
            }
            //await client.connect();

            const database = client.db('ztool');
            const DBsigns = database.collection('signs');

            // Query for a movie that has the title 'Back to the Future'
             const query = { name: signCap};
            // const movie = await movies.findOne(query);

            const signZ = await DBsigns.findOne(query);
            console.log(`signZ: ${signZ}`)
            if (signZ) {
                signFound = true;
                sign = signZ;
                console.log(sign.name);
            }
            //console.log(adds);
            //return sign;
        } catch {

        }
        // if (this[signCap]){
        //     signFound = true;
        //     sign = this[signCap];
        //     console.log("sign in getSign"+sign["element"]);
        // }
        if (!signFound) {
            return null;
        } else {
            return sign;
        }
    }

};

Cleanup(function (exitCode, signal) {
    if (signal) {
        if (DBclient.isConnected()) {
            console.log("\nDB Connection Open");
            DBclient.close()
            .then(() => {
                if (!DBclient.isConnected()) {
                    console.log("DB Connection Closed");
                    console.log(`closing Signal: ${signal}`);
                    process.kill(process.pid, signal);
                }

            });
        }
        Cleanup.uninstall();
        return false;
    }
});
