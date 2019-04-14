const Discord = require("discord.js");

exports.run = (vary, message, args) => {
  if (!message.member.voiceChannel) return message.channel.send('Você tem que estar em um canal de voz antes!')
  if (!vary.queue.get(message.guild.id)) return message.channel.send('Eu não estou tocando nada!')
  vary.queue.get(message.guild.id).dispatcher.emit('end')
  message.channel.send('Música pulada!')
}

exports.config = {
    name: 'skip',
    aliases: []
}
