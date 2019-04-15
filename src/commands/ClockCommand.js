const Discord = require("discord.js");

exports.run = async (vary, message, args) => {
var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Horário:\` \`${today.toString().split(" ")[4]}\``)
}

exports.config = {
    name: 'clock',
    aliases: []
}
