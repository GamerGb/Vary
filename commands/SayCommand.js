const Discord = require("discord.js");

exports.run = async (vary, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Permissão `Gerenciar mensagens` não encontrada em seu cargo!")
const sayeMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayeMessage);
  }

  exports.config = {
      name: 'say',
      aliases: ['falar']
  }
