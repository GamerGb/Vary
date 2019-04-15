const Discord = require("discord.js")
const mongoose = require("mongoose")
const db = require("../database.js")

exports.run = (vary, message, args) => {
  const ownerID = '375627393773207554';
if (message.author.id !== ownerID) return message.channel.send("⛔ **Comando em manutenção**");
  let member = message.mentions.members.first();
    let smiles = args[1]
  db.Users.findOne({userID: member.id}, (err, user) =>{
 user.coins = smiles
user.save();;
})
  db.Users.findOne({userID: message.author.id}, (err, ola) =>{
ola.coins -= smiles
ola.save();;
})
message.reply(`enviou ${smiles} a ${member}`)
}

exports.config = {
    name: 'pagar',
    aliases: ['pay']
}
