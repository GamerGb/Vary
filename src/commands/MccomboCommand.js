const Discord = require("discord.js");

exports.run = async (vary, message, args) => {
let reason = args.slice(0).join(' ');
if (reason.length < 1) return message.reply('**Cite um nick de minecraft!**');

let embed = new Discord.RichEmbed()

.setTitle(`Skin + Head De: ${args[0]}`)
    .setImage(`https://mc-heads.net/combo/${args[0]}`)
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp(new Date())
    .setColor('#00BFFF')
message.channel.send(embed)
}

exports.config = {
    name: 'mccombo',
    aliases: []
}
