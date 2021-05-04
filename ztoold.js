const Ztool = require('./js_src/ztool.js');
const Discord = require('discord.js');

//const info = "Discord Bot helper Module for JS Zodiac tool.";
//module.exports = Ztool;
module.exports = {
    info: "Discord Bot helper Module for JS Zodiac tool.",
    //Signs: import {Signs} from "./constants.js";,
    //Ztool helper methods
    init: async function(guild) {
            return await Ztool.init(guild);
    },
    addUser: async function(guild,name,sign) {
        return await Ztool.addUser(guild.id,name,sign);
    },
    showUser: async function(id,name) {
        return await Ztool.showUser(id,name);
    },
    showUsers: async function(id) {
      //Ztool.showUsers(guild.id).then(cursor => {
      let cursor;
        cursor = Ztool.showUsers(id);
        // while (cursor.hasNext()) {
        //   print(tojson(cursor.next()));
        // }
    //  });



        return Ztool.showUsers(id);
    },
    //signs
    listSigns: function() {
        return Ztool.listSigns();
    },
    getSigns: function() {
        //console.log(Signs.SignList);
        return Ztool.getSigns();
    },
    getSign: function(signName) {
        return Ztool.getSign(signName);
    },
    //Discord methods
    showSignD: function(channel,sign) {
        let color = "ffffff";
        let url;
        switch(sign.element) {
            case "Fire": color = "DD2222";break;
            case "Earth": color = "CC8888";break;
            case "Air": color = "f7f7FF";break;
            case "Water": color = "2222DD";break;
        }
        if (sign.image.startsWith('url')) {
            url = "https://cdn.discordapp.com/embed/avatars/0.png";
        } else {
            url = sign.image;
        }
        const exampleEmbed = new Discord.MessageEmbed()
           .setColor(color)
              .setTitle(`Sign: ${sign["name"]}`)
                 //.setURL('https://discord.js.org/')
                   // .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
                       .setDescription('Description')
                          .setThumbnail(url)
                          //"thumbnail": {"url": "https://cdn.discordapp.com/embed/avatars/0.png"

                             .addFields(
                                       //{ name: '\u200B', value: '\u200B' },
                                       { name: 'Element: ', value: sign["element"] },
                                       { name: 'Quality: ', value: sign["quality"] },
                                       { name: '\u200B', value: '\u200B' },
                                       //{ name: 'For more info try: ', value: `${config.prefix+plan.name} info all`},
                                      // { name: 'Inline field title', value: 'Some value here', inline: true },
                                       //{ name: 'Inline field title', value: 'Some value here', inline: true },
                                      )
    //.addField('Inline field title', 'Some value here', true)
    //.setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    //.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    channel.send(exampleEmbed);
},
    showUserEmbed: function(DBuser) {
        //DBuser = guild.users[0]
        let color = "ffffff";
        let url;
        console.log(DBuser.name);
        let sign = Ztool.getSign(DBuser.sign);
        console.log(sign);
        switch(sign.element) {
            case "Fire": color = "DD2222";break;
            case "Earth": color = "CC8888";break;
            case "Air": color = "f7f7FF";break;
            case "Water": color = "2222DD";break;
        }
        if (sign.image.startsWith('url')) {
            url = "https://cdn.discordapp.com/embed/avatars/0.png";
        } else {
            url = sign.image;
        }
        const exampleEmbed = new Discord.MessageEmbed()
           .setColor(color)
              .setTitle(`User: ${DBuser.name}`)
                 //.setURL('https://discord.js.org/')
                   // .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
                       .setDescription('Description')
                          .setThumbnail(url)
                          //"thumbnail": {"url": "https://cdn.discordapp.com/embed/avatars/0.png"

                             .addFields(
                                       //{ name: '\u200B', value: '\u200B' },
                                       { name: 'Sign: ', value: DBuser.sign },
                                       { name: 'Element: ', value: sign["element"] },
                                       { name: 'Quality: ', value: sign["quality"] },
                                       { name: '\u200B', value: '\u200B' },
                                       //{ name: 'For more info try: ', value: `${config.prefix+plan.name} info all`},
                                      // { name: 'Inline field title', value: 'Some value here', inline: true },
                                       //{ name: 'Inline field title', value: 'Some value here', inline: true },
                                      )
    //.addField('Inline field title', 'Some value here', true)
    //.setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    //.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    //channel.send(exampleEmbed);
    return exampleEmbed;
    }
}
