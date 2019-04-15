const Discord = require('discord.js');
const mongoose = require('mongoose');

const db = require('../database.js');

exports.run = (vary, message, args) => {
  db.Users.findOne({userID: message.author.id}, (err, user) =>{

if (err) throw err;

if (user) {
message.channel.send(`Você já está registrado em minha DB!`)

} else {
  user = new db.Users({userID: message.author.id});
  message.reply('Usuário registrado agora em minha DB!')
  user.save();
}
});
  db.Guilds.findOne({_id: message.guild.id}, (err, guild) =>{

if (err) throw err;

if (guild) {
message.channel.send(`Servidor já registrado em minha DB`)

} else {
  guild = new db.Guilds({_id: message.guild.id});
  message.reply('Servidor registrado agora na minha DB!')
  guild.save();
}
});
}

exports.config = {
    name: 'registrar',
    aliases: ['register']
}
