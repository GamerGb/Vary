const Discord = require("discord.js");
const tempo = require('weather-js');
const moment = require("moment")
moment.locale('pt-BR');
require("moment-duration-format")

exports.run = async (vary, message, args) => {
tempo.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
    if (err) return message.channel.send(err);

    if (result.length === 0) {
        message.channel.send('Selecione uma cidade para pesquisar o tempo!' )
        return;
    }
        var Tempo = result[0].current;
        var Local = result[0].location;

    let embed = new Discord.RichEmbed()
        .setColor(`#38c6ff`)
        .setAuthor(`Tempo de ${Tempo.observationpoint}`)
        .setThumbnail(Tempo.imageUrl)
        .addField('Fuso horário :', `${Local.timezone} UTC`, true)
        .addField('Tipo de grau :', Local.degreetype, true)
        .addField('Temperatura :', `${Tempo.temperature} graus`, true)
        .addField('Em torno dos:', `${Tempo.feelslike} graus`, true)
        .addField('Ventos:', Tempo.winddisplay, true)
        .addField('Humidade do Ar:', `${Tempo.humidity}%`, true)
    message.channel.send(embed);
    });
}

exports.config = {
    name: 'tempo',
    aliases: ['clima']
}
