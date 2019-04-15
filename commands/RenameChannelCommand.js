const Discord = require("discord.js")

exports.run = async (vary, message, args) => {
if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Permissão `Gerenciar canais` não encontrada em seu cargo!!")
message.channel.setName(args[0].split(" ").join("\u2006"))
  message.reply(`Nome do canal alterado com sucesso!`)
}

exports.config = {
    name: 'renamechannel',
    aliases: ['renomearcanal']
}
