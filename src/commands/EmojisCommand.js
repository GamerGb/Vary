const Discord = require("discord.js");

exports.run = async (vary, message, args) => {
   let emotes = new Discord.RichEmbed()
.setDescription(message.guild.emojis.map(c => c).join("\u2006"))
.setColor(message.member.displayColor)

message.channel.send(emotes)
}

exports.config = {
    name: 'emojis',
    aliases: []
}
