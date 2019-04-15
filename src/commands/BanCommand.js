const Discord = require("discord.js");

exports.run = async (vary, message, args) => {
if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Permissão `Banir membros` não encontrada em seu cargo!")

let member = message.mentions.members.first() || message.guild.members.get(args[0]);
let channel = member.guild.channels.find('name', '🚫│punições');
if(!member)
  return message.reply("Pfv marca um player para eu banir");
if(!member.bannable)
  return message.reply("Eu não consigo banir ele :-:");

let reason = args.slice(1).join(' ');
if(!reason) reason = "Sem motivo";
let banembed = new Discord.RichEmbed()
.setColor('RED')
.setTitle(`Usuário banido`)
.setDescription(`**Tag do Usuário** \n${member.user} \n**Quem puniu** \n${message.author} \n**Motivo** \n${reason}`)
.setFooter(`ID do usuário: ${member.id}!`)

await member.ban(reason)
  .catch(error => message.reply(`Sorry ${message.author} não consigo banir ele: ${error}`));
  message.reply(`baniu ${member.user} com o motivo: ${reason}`)
channel.send(banembed);
}

exports.config = {
    name: 'ban',
    aliases: ['banir']
}
