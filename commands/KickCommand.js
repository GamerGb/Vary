const Discord = require("discord.js");

exports.run = async (vary, message, args) => {
if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Permissão `Expulsar membros` não encontrada em seu cargo!")

let member = message.mentions.members.first() || message.guild.members.get(args[0]);
let channel = member.guild.channels.find('name', '🚫│punições');
if(!member)
  return message.reply("Eu não sei quem irei kickar");
if(!member.kickable)
  return message.reply("Eu não consigo kickar ele :-:");

let reason = args.slice(1).join(' ');
if(!reason) reason = "Sem motivo";
let kickembed = new Discord.RichEmbed()
.setColor('RED')
.setTitle(`Usuário expulso`)
.setDescription(`**Tag do Usuário** \n${member.user} \n**Quem puniu** \n${message.author} \n**Motivo** \n${reason}`)
.setFooter(`ID do usuário: ${member.id}`)

await member.kick(reason)
  .catch(error => message.reply(`Sorry ${message.author} eu não consigo kickar pois teve um erro: ${error}`));
message.reply(`kickou ${member.user} com o motivo: ${reason}`)
channel.send(kickembed);

}

exports.config = {
    name: 'kick',
    aliases: ['expulsar']
}
