const Discord = require("discord.js");
const config = require("../config.json")

exports.run = async (vary, message, args) => {
const ownerID = '375627393773207554';
if (message.author.id !== ownerID) return message.channel.send("⛔ **ACCESSO NEGADO**");
resetBot(message.channel)
    async function resetBot(channel) {
      console.log(`Irei reiniciar!`)
        message.channel.send(`Reiniciando...`)
        .then(msg => vary.destroy(true))
        .then(() => vary.login(process.env.TOKEN));
     }

vary.on('ready', () => {
    message.channel.send(`Vary reiniciado com sucesso!`);
});
}

exports.config = {
    name: 'restart',
    aliases: ['reiniciar']
}
