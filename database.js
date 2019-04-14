const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Discord = require('discord.js')

mongoose.connect('process.env.DB', { useNewUrlParser: true }, (err) => {
  if (err) return console.log('Erro ao conectar na database!')
  console.log('Conectado ao banco de dados!')
})

const Users = new Schema({
userID: String,
coins: {type: Number, default: 50},
doador: {type: Boolean, default: false},
coinsLastTime: {type: String, default: '0000'}
});

const Guilds = new Schema({
_id: String,
})

var UsersDB = mongoose.model('Users', Users);
var GuildsDB = mongoose.model('Guilds', Guilds);

exports.Guilds = GuildsDB
exports.Users = UsersDB
