const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (vary, message, args) => {
let reminderTime = args[0];
if (!reminderTime) return message.channel.send("**Especifique o tempo. Exemplo: v;relembrar 15min Ir comer**");

let reminder = args.slice(1).join(" ");

let remindEmbed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
    .addField("Lembrete", `\`\`\`${reminder}\`\`\``)
    .addField("Tempo", `\`\`\`${reminderTime}\`\`\``)
    .setTimestamp();

message.channel.send(remindEmbed);


setTimeout(function() {
    let remindEmbed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField("Lembrete", `\`\`\`${reminder}\`\`\``)
        .setTimestamp()

    message.reply(remindEmbed);
}, ms(reminderTime));

}

exports.config = {
    name: 'relembrar',
    aliases: ['lembrete']
}
