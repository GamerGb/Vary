const Discord = require('discord.js');
const mongoose = require('mongoose');

const db = require('../database.js');

exports.run = (vary, message, args) => {
  db.Users.findOne({userID: message.author.id}, (err, user) =>{

if (err) throw err;

if (user) {
message.channel.send(`Você possui ${user.coins} Smiles em sua conta!`)

} else {
  message.channel.send('Use `v;registrar` para se registrar!')
}
});
}

exports.config = {
    name: 'smiles',
    aliases: ['money']
}
