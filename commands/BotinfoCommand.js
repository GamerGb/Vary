const Discord = require("discord.js");
const ms = require("ms")
const moment = require("moment")
moment.locale('pt-BR');
require("moment-duration-format")

exports.run = async (vary, message, args) => {
const duration = moment.duration(vary.uptime).format('D [d], H [h], m [m], s [s]');
let embedinfo = new Discord.RichEmbed()
.setColor('#7289DA')
.setThumbnail(vary.user.avatarURL)
.setTitle(" **<:Vary:535886794210803714>|** \`\`Informações sobre mim:\`\`")
.addField('** Introdução:**', '\`Olá! Eu sou um simples bot para essa maravilhosa plataforma o Discord, possuo várias funções, tanto administrativas quanto entreterimento! Se você solicitou este comando, é porque você quer saber mais sobre mim. Logo abaixo está minhas informações gerais! E caso você gostar de mim, me ajude dando um upvote e adicionando-me em seu servidor!\`', true)
.addField('**<a:WumpusCoffe:525701568901939210> Veja meus comandos:**', `v;help`, true)
.addField('**👑 Criador:**', '<@375627393773207554>', true)
.addField('**<a:HypeSquad:530076802136145940> Prefixo ativo:**', `v;`, true)
.addField('**<:js:512620974253015065> Desenvolvido em:**', 'Discord.js - _v_ **_11.4.2_**', true)
.addField("**<:zerotwo:520678987417255936> Estou conectado a:**", ` **${vary.users.size}** usuários\n **${vary.guilds.size}** servidores\n **${vary.channels.size}** canais`, true)
.addField("**<:BlobMeat:526824855350280195> Estou acordado a:**", `${duration}`, true)
.addField('**<:DiscordLogo:525406999169728513> Adicione-me em seu servidor:**', '[Clique aqui](https://discordapp.com/api/oauth2/authorize?client_id=546490972901605386&permissions=8&scope=bot)', true)
.addField('**<:DiscordLogo:525406999169728513> Meu servidor de suporte:**', '[Clique aqui](https://discord.gg/VBfjn35)', true)
.addField('**🏅 Menções Honrosas**' ,'`🔥ImDiogo912🔥#8687` Se não fosse por ele, eu nem iria existir! \n`Its_Gabi#2454` meu avatar foi feito por ela!', true)
.setFooter(`Solicitado por: ${message.author.username}`, message.author.avatarURL)
message.channel.send(embedinfo)
}

exports.config = {
    name: 'botinfo',
    aliases: ['vary']
}
