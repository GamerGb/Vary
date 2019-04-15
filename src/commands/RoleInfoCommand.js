const Discord = require("discord.js");

exports.run = async (vary, message, args) => {
  let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

  if (!role) role = message.member.highestRole;

  let roleembed = new Discord.RichEmbed()
  .setColor(role.hexColor)
  .setTitle(`Cargo: ${role.name}`)
  .addField('Membros', role.members.size, true)
  .addField('Cor', role.hexColor, true)
  .addField('Data de criação', role.createdAt.toDateString(), true)
  .addField('Editavel', role.editable.toString(), true)
  .addField('Gerenciado', role.managed.toString(), true)
  .addField('ID', role.id, true);
  message.channel.send(roleembed);
  }

  exports.config = {
      name: 'roleinfo',
      aliases: []
  }
