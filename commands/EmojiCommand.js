const Discord = require("discord.js");

exports.run = (vary, message, args, level) => {
  const emoji = vary.emojis.get(args[0]);
 const emoteurl = emoji.url
  const eembed = new Discord.RichEmbed()
  .setAuthor("Informações do emoji"," https://discordemoji.com/assets/emoji/owo.png")
  .addField("» Nome ",emoji.name)
   .setThumbnail(emoteurl)
    .addField("» ID ",emoji.id)
    .addField("» Criado em ",emoji.createdAt)
   
if(isNaN(args[0])) return message.channel.send("Não encontrei esse emoji.")
  
  message.channel.send(eembed)

}

exports.config = {
    name: 'emoji',
    aliases: ['emoteinfo']
}
