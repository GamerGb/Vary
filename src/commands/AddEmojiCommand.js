const Discord = require('discord.js')

exports.run = async (vary, message, args) => {
if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("Permissão `Gerenciar Emojis` não encontrada em seu cargo!!")
  message.guild.createEmoji(args[0], args[1])
  message.reply('Emoji criado com sucesso!')
}

exports.config = {
    name: 'addemoji',
    aliases: ['criaremoji']
}
