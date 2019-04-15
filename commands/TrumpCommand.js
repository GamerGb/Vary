const Discord = require('discord.js');
const Jimp = require("jimp");

exports.run = async (vary, message, args) => {

    let meow = message.content.split(" ").slice(1);
    let args1 = meow.join(' ');
    let illegal = `https://storage.googleapis.com/is-now-illegal.appspot.com/gifs/` + args1.toUpperCase() + `.gif`;
    if (!args1) {
        return message.reply(':x: **Diga oque o Presidente Donald Trump irá considerar ilegal agora.**');
    }
    if (meow.length > 1) {
        return message.reply(':x: **Máximo 1 palavra**');
    }
    const emb = new Discord.RichEmbed();
    emb.setAuthor("Trump tornou " + meow + " ilegal!", "http://blog.adsy.me/wp-content/uploads/2016/11/angry-side-face-trump-transparent.png");
    emb.setImage(illegal);
    message.channel.send({
        embed: emb
    })
}

exports.config = {
    name: 'trump',
    aliases: []
}
