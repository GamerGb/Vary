const Discord = require("discord.js");

exports.run = async (vary, message, args) => {
let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('**Cite um nick de minecraft**')

  let embed = new Discord.RichEmbed()

  .setTitle(`Corpo de ${args[0]}`)
.setImage(`https://mc-heads.net/body/${args[0]}`)
  .setFooter(message.author.tag,message.author.avatarURL )
    .setTimestamp(new Date())
    .setColor('RANDOM')
    message.channel.send(embed)
}

exports.config = {
    name: 'mcbody',
    aliases: []
}
