const Discord = require("discord.js")

module.exports = async (vary, member) => {

  let channel = member.guild.channels.find('name', '🚪│entrada');
  let jotarf = member.guild.channels.find('name', '😜novos-membros😜')
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .setTitle('**<a:blobjoining:512620980221247493> Bem vindo!**')
      .setDescription(`<a:blobjoining:512620980221247493> Seja Bem vindo(a) **${member}** Ao servidor`)
      .addField('<a:partyblob:509342597735514124> | Você é o membro de numero:', member.guild.memberCount)
      .setTimestamp()

      channel.send(embed);
      channel.setTopic(`Atualmente temos ${member.guild.memberCount} membros`);


}
