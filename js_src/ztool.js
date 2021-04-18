const info = "Zodiac Tool for Saving/Recalling User Zodiac Info";
const user_mod = require("./user.js");
//import {Signs} from "./constants.js";
const Signs = require("./signs");
const DB = require("./db.js");
require("dotenv").config();
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




//async function
// client.connect(err => {
//   const collection = client.db("aRM").collection("ztool");
//   // perform actions on the collection object
//   client.close();
// });

// async function addToDB(id,name,sign) {
//   try {
//     await client.connect();
//
//     const database = client.db('aRM');
//     const ztools = database.collection('ztool');
//
//     // Query for a movie that has the title 'Back to the Future'
//      const query = { guild: id, name: name, sign: sign};
//     // const movie = await movies.findOne(query);
//     const adds = await ztools.insertOne(query);
//     console.log(adds);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// async function showFromDB(id,name) {
//   try {
//     await client.connect();
//
//     const database = client.db('aRM');
//     const ztools = database.collection('ztool');
//
//     // Query for a movie that has the title 'Back to the Future'
//      const query = { guild: id, name: name};
//     // const movie = await movies.findOne(query);
//     const adds = await ztools.insertOne(query);
//     console.log(adds);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

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
      DB.addToDB(id,name,sign).catch(console.err);


        //user_mod.addUser(name,sign);
    },
    showUser: async function(id, name) {
        //console.log(DB.showFromDB(id,name));
        //return user_mod.showUser(name);
        return await DB.showFromDB(id,name);
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
