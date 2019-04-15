const Discord = require('discord.js')

exports.run = async (vary, message, args) => {
if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Permissão `Gerenciar canais` não encontrada em seu cargo!!")
  message.channel.setRateLimitPerUser(args[0])
  message.reply('Tempo do Slowmode alterado com sucesso!')
}

exports.config = {
    name: 'slowmode',
    aliases: ['slow']
}
