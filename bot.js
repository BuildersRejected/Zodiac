const Discord = require('discord.js');
const ZtoolD = require("./ztoold.js");
const Signs = require("./js_src/signs.js")
//const DB = require('./js_src/db.js');
require("dotenv").config();
const bot = new Discord.Client();
const Cleanup = require("node-cleanup");

const prefix = '!';


bot.once('guildCreate',guild => {
    ZtoolD.init(guild);
});

bot.once('ready', () =>{
  console.log(ZtoolD.info);

  //console.log(guild.me.permissionsIn(guild));
});

bot.on('message', async message =>{
    //console.log(message.guild.me.permissionsIn(message.guild.me));
    /////////////////////////
    //module/comman loader
    /*
    const commands = new Discord.Collection();
    this.cooldowns = new Discord.Collection();
    commandFiles = fs.readdirSync('./plans/planA/commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        commands.set(command.name, command);
    }
    this.commands = commands;
    */
/////////////////////////////////



    if ( message.author.bot) return;
    //if (!message.content.startsWith(config.prefix) ||) return;
    const args = message.content.trim().split(/ +/);
    if (args[0].startsWith("!")){

        args[0] = args[0].slice("!".length);
        let mention = message.mentions.users.first();
        if (args[0] == "add") {
            //let name = args[1];

            if (mention) {
                let sign = args[2];
                const isSign = await ZtoolD.getSign(args[2]);
                console.log("isSign: " + isSign);
                if (isSign) {
                    //Signs.capitalize(sign)
                    //console.log(mention.username);
                    ZtoolD.addUser(message.guild,mention.username,Signs.capitalize(sign));
                } else {
                    message.reply(`Invalid Sign`);
                    //message.reply(ZtoolD.addUsage());
                }
            }
          //  let age = args[2];


            //ZtoolD.showUsers();
        } else if (args[0] == "show") {
            if (args[1]) {
                //test
                if (args[1] == "signs") {
                    message.channel.send(ZtoolD.listSigns());
                } else if (await ZtoolD.getSign(args[1])){
                    let sign = await ZtoolD.getSign(args[1]);

                    ZtoolD.showSignD(message.channel,sign);
                } else if(mention){
                    const user = await ZtoolD.showUser(message.guild.id,mention.username)
                    //console.log(ZtoolD.showUser(message.guild.id,args[1]))
                    //console.log("bit" + user.users[0].sign);
                    message.channel.send(await ZtoolD.showUserEmbed(user.users[0]));
                }
                //if equals sign,element,quality,polarity
                //else name

                //message.channel.send(ZtoolD.showUser(args[1]));
            } else {
                const users = await ZtoolD.showUsers(message.guild.id);
                //message.channel.send(await users);
            }

        } else if (args[0] == "invite") {
            bot.generateInvite({
                permissions: 268486656,
            })
                //.then(link => console.log(`Generated bot invite link: ${link}`))
                .then(link => message.channel.send(`Generated bot invite link: ${link}`))
                    .catch(console.error);
        }
    }
});








bot.login(process.env.BOT_TOKEN);
