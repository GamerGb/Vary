const Discord = require('discord.js');

exports.run = async (vary, message, args) => {

if(message.author.id !== "375627393773207554") return message.channel.send("⛔ **ACCESSO NEGADO**");

if(args[0] == "online") return vary.user.setStatus("online");

if(args[0] == "dnd") return vary.user.setStatus("dnd");

if(args[0] == "invisible") return vary.user.setStatus("invisible");

if(args[0] == "idle") return vary.user.setStatus("idle");

}

exports.config = {
    name: 'setstatus',
    aliases: []
}
