const Discord = require("discord.js")

exports.run = async (vary, message, args) => {
    let sugestao = args.join(" ");
    if (!sugestao) return message.reply("Insira sua sugestão.")

    let sug = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField("**Sugestão**", `${sugestao}`)
        .setFooter(`Sugestão enviada por: ${message.author.tag}`, `${message.author.avatarURL}`)
        .setTimestamp(new Date())

    message.delete();
    vary.channels.get('546667205102927872').send(sug);
    message.reply(`Sua sugestão foi enviada com sucesso para meu servidor de suporte!`);
}

exports.config = {
    name: 'sugerir',
    aliases: ['suggest']
}
