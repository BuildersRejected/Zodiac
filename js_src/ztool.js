const info = "Zodiac Tool for Saving/Recalling User Zodiac Info";
const user_mod = require("./user.js");
//import {Signs} from "./constants.js";
const Signs = require("./signs");
//mongodb+srv://BRXathartic:f1re0fG0d@comb.cxdy9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//const Elements = require("./elements.js");
//const Qualities = require("./qualities.js");
//const Polarities = require("./polarities.js");
//import /{ userList } from './module.js';
//Main tool for zodiac info. this is platform independant.
//for discord it will be exported as a module to use with node.js
user_mod.addUser('bob',33,'Pisces');
user_mod.showUsers();
//console.log(Signs.Aries);



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://BRXathartic:f1re0fG0d@comb.cxdy9.mongodb.net/myFirstDatabase?retryWrites=true&writeConcern=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//async function
// client.connect(err => {
//   const collection = client.db("aRM").collection("ztool");
//   // perform actions on the collection object
//   client.close();
// });

async function addToDB(id,name,sign) {
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
}
async function showFromDB(id,name) {
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
async function showFromDB(id,sign) {
  try {
    await client.connect();
    //const database = client.db('aRM');
    //const db = client.db(id); for future use where coolections are guild names
    const ztools = client.db('aRM').collection('ztool');
    const query = { guild: id, sign: sign};
    const movie = await ztools.findOne(query);
    //const adds = await ztools.insertOne(query);
    console.log(movie);
    return movie;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
async function showAllFromDB(id) {
  try {
    await client.connect();
    //const database = client.db('aRM');
    //const db = client.db(id); for future use where coolections are guild names
    const ztools = client.db('aRM').collection('ztool');
    const query = { guild: id};
    const movie = await ztools.find(query);
    //const adds = await ztools.insertOne(query);
    //console.log(movie);
    return movie;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//run().catch(console.dir);

module.exports = {
    //Signs: import {Signs} from "./constants.js";,
    addUser: async function(id,name,sign) {
      // client.connect(err => {
      //   const collection = client.db("aRM").collection("ztool");
      //   // perform actions on the collection object
      //   const use = collection.insertOne({name: name,sign: sign});
      //   //client.close();
      // }).catch(client.close());
      addToDB(id,name,sign).catch(console.err);


        //user_mod.addUser(name,sign);
    },
    showUser: async function(id, name) {
        console.log(showFromDB(id,name));
        return user_mod.showUser(name);
    },
    showUsers: function(id) {
        showAllFromDB(id).then(console.log);
        //return user_mod.showUsers();
    },
    //signs
    listSigns: function() {
        return Signs.list();
    },
    getSigns: function() {
        //console.log(Signs.SignList);
        return Signs.Signs;
    },
    getSign: function(signName) {
        return Signs.getSign(signName);
    }
}
