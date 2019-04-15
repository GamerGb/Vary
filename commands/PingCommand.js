const Discord = require("discord.js");

exports.run = async (vary, message, args) => {
const m = await message.channel.send("Ping?");
m.edit(`🏓Ping ${m.createdTimestamp - message.createdTimestamp}ms.\n ⚡API ${Math.round(vary.ping)}ms.`);
}

exports.config = {
    name: 'ping',
    aliases: ['pong']
}
