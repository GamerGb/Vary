const Discord = require("discord.js")

module.exports = async (vary, member) => { 
     let channel = member.guild.channels.find('name', '🚪│entrada');
      let memberavatar = member.user.avatarURL
          if (!channel) return;
          let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setThumbnail(memberavatar)
          .setTitle('**<a:ablobleaving:512620979256819712> Até mais!**')
          .setDescription(`<a:ablobleaving:512620979256819712> O(a) ${member} Saiu do servidor`)
          .addField('<a:crygif:509342794851024917> | Membros:', member.guild.memberCount)
          .setTimestamp()

          channel.send(embed);
          channel.setTopic(`Atualmente temos ${member.guild.memberCount} membros`);
}
