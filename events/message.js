const Discord = require("discord.js")
const config = require("../config.json")

module.exports = async (vary, message, args) => {
  if(message.channel.name === "🔖│sugestões"){
    await message.react('✅')
    await message.react('❌')
  }
   if (message.author.bot) return;
  let mention = [`<@${vary.user.id}>`, `<@!${vary.user.id}>`]

    mention.find(mention => {

        if(message.content === mention) {
            let embed = new Discord.RichEmbed()
            .setColor('#36393e')
            .setDescription(`Meu prefixo é: \`${config.prefix}\`, Para usar meus comando use ${config.prefix}ajuda`)
            .setFooter('Canela. Todos os direitos reservados para 🔥ImDiogo912🔥#0001 e Vary!')
            message.channel.send(embed);
        }

})

let prefix = [`<@${vary.user.id}> `, `<@!${vary.user.id}> `, config.prefix]

prefix.find(prefix=>{

  if (!message.content.startsWith(prefix)) return;
  try {

  let args = message.content.slice(prefix.length).trim().split(" ")

  let cmd = args.shift().toLowerCase()
  let comando = vary.commands.get(cmd) || vary.commands.get(vary.aliases.get(cmd))
  comando.run(vary, message, args);

  } catch (err) {
    console.error(err)
  }
})

}
