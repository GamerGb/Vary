const Discord = require('discord.js');
exports.run = (vary, message, args) => {

    let sugestao = args.join(" ");
    if (!sugestao) return message.reply("Insira sua sugestão.")

    let embed = new Discord.RichEmbed()
        .setColor("#0051FF")
        .addField("**Sugestão**", `${sugestao}`)
        .setFooter(`Sugestão enviada por: ${message.author.tag}`, `${message.author.avatarURL}`)
        .setTimestamp(new Date())

    let canal = message.guild.channels.find(canal => canal.name === "🔖│sugestões");
    if (!canal) return message.reply("Não existe nenhum canal com o nome `🔖│sugestões` para enviar a sua sugestão.");

    message.delete();
    canal.send(embed).then(msg => msg.react("527936141236764673").then(r => msg.react("527936330265526273")));
    message.reply(`Sua sugestão foi enviada com sucesso!`);
}

exports.config = {
    name: 'sug',
    aliases: []
}
