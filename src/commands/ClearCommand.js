const Discord = require("discord.js");

exports.run = async (vary, message, args) => {

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Permissão `Gerenciar mensagens` não encontrada em seu cargo!!")

const deleteCount = parseInt(args[0], 10);

if(!deleteCount || deleteCount < 2 || deleteCount > 100)
  return message.reply("Pfv mete um numero de mensagens para eu remover");

const fetched = await message.channel.fetchMessages({limit: deleteCount});
message.channel.bulkDelete(fetched)
  .catch(error => message.reply(`Não consigo deletar: ${error}`));
}

exports.config = {
    name: 'clear',
    aliases: ['apagar']
}
