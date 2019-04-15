const Discord = require("discord.js");
const moment = require("moment")
moment.locale('pt-BR');
require("moment-duration-format")

exports.run = async (vary, message, args) => {
let user;
if (message.mentions.users.first()) {
  user = message.mentions.users.first();
} else {
    user = message.author;
}
const member = message.guild.member(user);

const userinfoembed = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(user.avatarURL)
.setTitle(`${user.username}#${user.discriminator}`)
.addField("<:appleid:533758440892268584> ID:", `${user.id}`, true)
.addField("<a:swbounce:521078740072136708> Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'Nenhum'}`, true)
.addField("📆 Conta criada em:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
.addField("🌟 Entrou no servidor:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
.addField("<:stream:540924575978881047> Status:", `${user.presence.status}`, true)
.addField("<a:bongocat:510767294855774218> Jogando:", `${user.presence.game ? user.presence.game.name : 'Nada'}`, true)
.addField("💼 Cargos:", member.roles.map(roles => `${roles.name}`).join(', '), true)
.setFooter(`Solicitado por ${message.author.username}#${message.author.discriminator}`)
 message.channel.send(userinfoembed);
}

exports.config = {
    name: 'userinfo',
    aliases: []
}
