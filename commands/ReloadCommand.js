const Discord = require("discord.js");

exports.run = (vary, message, args) => {

    if (message.author.id !== "375627393773207554") return message.channel.send("⛔ **ACCESSO NEGADO**");

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {

        return message.channel.send(`Não foi possivel reiniciar o seguinte comando: ${args[0]}.js`);
    }

    message.channel.send(`${args[0]}.js **Foi recarregado com sucesso!**`);


}

exports.config = {
    name: 'reload',
    aliases: ['plugin']
}
