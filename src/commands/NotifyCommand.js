const Discord = require("discord.js");

exports.run = async (vary, message, args) => {
let cargo = message.guild.roles.find(cargo => cargo.name === "🔔 NOTIFICAR (v;notificar)");
if (message.member.roles.has(cargo.id)) return message.reply("Você já está sendo notificado sobre todas minhas novidades");
message.channel.send(`${message.author}, agora você será notificado de todas novidades sobre mim`);
message.member.addRole(cargo.id);
}

exports.config = {
    name: 'notificar',
    aliases: []
}
