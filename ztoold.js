const Ztool = require('./js_src/ztool.js');
const Discord = require('discord.js');

//const info = "Discord Bot helper Module for JS Zodiac tool.";
//module.exports = Ztool;
module.exports = {
    info: "Discord Bot helper Module for JS Zodiac tool.",
    //Signs: import {Signs} from "./constants.js";,
    //Ztool helper methods
    addUser: function(guild,name,sign) {
        Ztool.addUser(guild.id,name,sign);
    },
    showUser: function(name) {
        return Ztool.showUser(name);
    },
    showUsers: function(guild) {
      //Ztool.showUsers(guild.id).then(cursor => {
      let cursor;
        cursor = Ztool.showUsers(guild.id);
        // while (cursor.hasNext()) {
        //   print(tojson(cursor.next()));
        // }
    //  });



        return Ztool.showUsers(guild.id);
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
    }
}
