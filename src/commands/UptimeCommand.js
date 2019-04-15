const Discord = require("discord.js");
const ms = require("ms")
const moment = require("moment")
moment.locale('pt-BR');
require("moment-duration-format")

exports.run = async (vary, message, args) => {
let duration = moment.duration(vary.uptime).format('D [d], H [h], m [m], s [s]');
let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;

message.channel.send(`**${nomeeapelido}**, estou online à: **${duration}**`);
}

exports.config = {
    name: 'uptime',
    aliases: []
}
