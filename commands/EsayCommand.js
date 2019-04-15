const Discord = require("discord.js");

exports.run = async (vary, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Permissão `ADMINISTRADOR` não encontrada em seu cargo!")

  const sayMessage = args.join(" ");

  let servIcon = message.guild.iconURL;
  let esayEmbed = new Discord.RichEmbed()
  .setTitle("🔔 Anúncio")
  .setColor("#0537ff")
  .setThumbnail(servIcon)
  .setDescription(`Escrito por ${message.author}`)
  .addField("Anúncio: \n", `${sayMessage}`)
  .setTimestamp();

  const esayMessage = args.join(" ");
  message.delete().catch(O_o=>{});

  message.channel.send('@everyone')
  message.channel.send(esayEmbed);
}

exports.config = {
    name: 'esay',
    aliases: ['anunciar']
}
