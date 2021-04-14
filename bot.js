const Discord = require('discord.js');
const ZtoolD = require("./ztoold.js");

const bot = new Discord.Client();

const prefix = '!';

bot.once('ready', () =>{
  console.log(ZtoolD.info);
});

bot.on('message', message =>{
    if ( message.author.bot) return;
    //if (!message.content.startsWith(config.prefix) ||) return;
    const args = message.content.trim().split(/ +/);
    if (args[0].startsWith("!")){

        args[0] = args[0].slice("!".length);

        if (args[0] == "add") {
            let name = args[1];
          //  let age = args[2];
            let sign = args[2];
            ZtoolD.addUser(message.guild,name,sign);
            //ZtoolD.showUsers();
        } else if (args[0] == "show") {
            if (args[1]) {
                //test
                // console.log("test");
                // console.log(ZtoolD.getSign("Aries"));
                // console.log(ZtoolD.getSign("bob"));
                //
                if (args[1] == "signs") {
                    message.channel.send(ZtoolD.listSigns());
                } else if (ZtoolD.getSign(args[1])){
                    let sign = ZtoolD.getSign(args[1]);

                    ZtoolD.showSignD(message.channel,sign);




                }
                //if equals sign,element,quality,polarity
                //else name

                //message.channel.send(ZtoolD.showUser(args[1]));
            } else {
                message.channel.send(ZtoolD.showUsers(message.guild));
            }

        }
    }
});

bot.login('');
