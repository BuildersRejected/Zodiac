const info = "Zodiac Tool for Saving/Recalling User Zodiac Info";
const user_mod = require("./user.js");
//import {Signs} from "./constants.js";
const Signs = require("./signs");
//const Elements = require("./elements.js");
//const Qualities = require("./qualities.js");
//const Polarities = require("./polarities.js");
//import /{ userList } from './module.js';
//Main tool for zodiac info. this is platform independant.
//for discord it will be exported as a module to use with node.js
user_mod.addUser('bob',33,'Pisces');
user_mod.showUsers();
//console.log(Signs.Aries);
module.exports = {
    //Signs: import {Signs} from "./constants.js";,
    addUser: function(name,age,sign) {
        user_mod.addUser(name,age,sign);
    },
    showUser: function(name) {
        return user_mod.showUser(name);
    },
    showUsers: function() {
        return user_mod.showUsers();
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
