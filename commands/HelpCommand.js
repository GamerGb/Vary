const Discord = require("discord.js");
const config = require("../config.json")

exports.run = async (vary, message, args) => {
let helpembed = new Discord.RichEmbed()


  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('Escolha uma categoria')
  .addField('**🎧 Músicas**','Aqui é onde ficam os melhores comandos para música!')
  .addField('**👮 Administração**','Aqui é onde fica os melhores comandos para administração.')
  .addField('**🗃 Miscelânea**','Aqui é onde os comandos mais comuns ficam!')
  .addField('**<a:Minecraft:528990466675572737> Minecraft**','Aqui é onde os comandos de minecraft ficam!')
  .addField('**💵 Economia**',' Aqui é onde todos os comandos de economia ficam!')
  .addField('✨ Ações','Demonstre oque realmente você está sentindo!')
  .setThumbnail(vary.user.avatarURL)
  .setFooter(vary.user.username, vary.user.avatarURL)
  .setTimestamp(new Date())
  let embed2 = new Discord.RichEmbed()

  .setColor('RANDOM')
  .setDescription('🎧 Música')
  .addField(`${config.prefix}skip`,`(Comando em beta) Quer que eu pule uma música? Blz.`)
  .addField(`${config.prefix}play`,`Toque uma música ai para seu servidor`)
  .addField(`${config.prefix}youtube`,`Procure o link da música que você quer ouvir`)
  .setThumbnail('https://media.giphy.com/media/tqfS3mgQU28ko/giphy.gif')
  .setFooter(vary.user.username, vary.user.avatarURL)
  .setTimestamp(new Date())

    let actions = new Discord.RichEmbed()
        .setDescription('✨ Ações')
        .setColor('RANDOM')
        .addField(`${config.prefix}abraçar`,`Abraça o usuário mencionado`)
        .addField(`${config.prefix}beijar`,`Beija o usuário mencionado`)
        .setThumbnail('https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif')
        .setFooter(vary.user.username, vary.user.avatarURL)
        .setTimestamp(new Date())

  let embed3 = new Discord.RichEmbed()

  .setColor('RANDOM')
  .setDescription('🔨 Moderação')
  .addField(`${config.prefix}ban`,`Um comando que todos tem medo, use ele caso alguém descumpra as regras do seu servidor.`)
  .addField(`${config.prefix}kick`,`Expulso um membro do seu servidor.`)
  .addField(`${config.prefix}eval`,`Execute comandos perigosos!`)
  .addField(`${config.prefix}say`,`Use este comando para fazer eu dizer algo`)
  .addField(`${config.prefix}esay`,`Use este comando caso queira anunciar/avisar algo!`)
  .addField(`${config.prefix}addcargo`,`Use este comando caso queira adicuonar um cargo a alguém!`)
  .addField(`${config.prefix}clear`,`Quer um chat limpinho? Pode usar este comando.`)
  .addField(`${config.prefix}mute`,`o usúario disse alguma coisa que não devia? Mute ele`)
  .setThumbnail('https://cdn.discordapp.com/attachments/464128221215195147/494609059459104793/tumblr_ns2p7fHvMc1ua4ow2o1_500.gif')
  .setFooter(vary.user.username, vary.user.avatarURL)
  .setTimestamp(new Date())

  let embed4 = new Discord.RichEmbed()
  .setColor('#ffb3ff')
  .setDescription('🗃 Miscelânea')
  .addField(`${config.prefix}ping`,`Acha que eu tou muito lagado? Veja meu ping`)
  .addField(`${config.prefix}relembrar`,`Tem uma coisa importante para fazer e tem medo de se esquecer? Eu irei relembra-lo`)
  .addField(`${config.prefix}avatar`,`Gostou do avatar do seu amigo, então use este comando.`)
  .addField(`${config.prefix}slot`,`Teste sua sorte na Slot Machine`)
  .addField(`${config.prefix}serverinfo`,`Faz eu mostrar as informações do servidor.`)
  .addField(`${config.prefix}userinfo`,`Faz eu mostrar as informações do membro.`)
  .addField(`${config.prefix}report`,`Caso queira denunciar uma pessoa, use este comando.`)
  .addField(`${config.prefix}tempo`,`Com este comando você pode ver a metereologia de alguma cidade!`)
  .addField(`${config.prefix}fakemsg`,`Faça uma mensagem falsa de outro membro!`)
  .addField(`${config.prefix}emojis`,`Veja quais são os emojis deste servidor!`)
  .addField(`${config.prefix}botinfo`,`Mostra minhas informacões!`)
  .addField(`${config.prefix}status`,`Mostra minhas informacões sobre a host!`)
  .setThumbnail("https://cdn.discordapp.com/attachments/464128221215195147/494608544272744472/original.gif")
  .setFooter(vary.user.username, vary.user.avatarURL)
  .setTimestamp(new Date())

  let ecoembed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('💵 Economia')
  .addField(`${config.prefix}smiles`,`Veja quantos Smiles você possui.`)
  .addField(`${config.prefix}daily`,`Pegue seus Smiles diários!`)
  .addField(`${config.prefix}pagar`,`Envie dinheiro a um amigo!`)
  .setThumbnail("https://cdn.discordapp.com/attachments/518633392561061907/553756677480906752/Dinheiro.gif")
  .setFooter(vary.user.username, vary.user.avatarURL)
  .setTimestamp(new Date())

  let mine = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('<a:Minecraft:528990466675572737> Minecraft')
  .addField(`${config.prefix}mcskin`,`Mostra a skin do nick citado!`)
  .addField(`${config.prefix}mcbody`,`Mostra o corpo do nick citado!`)
  .addField(`${config.prefix}mchead`,`Mostra a cabeça do nick citado!`)
  .addField(`${config.prefix}mccombo`,`Mostra a skin e a cabeça do nick citado!`)
  .setThumbnail("https://cdn.discordapp.com/attachments/464128221215195147/494608544272744472/original.gif")
  .setFooter(vary.user.username, vary.user.avatarURL)
  .setTimestamp(new Date())
  message.reply(embed).then(msg => {
      msg.react('🗃');
      msg.react('👮');
      msg.react('⬅');
      msg.react('💵');
      msg.react('🎧');
      msg.react('528990466675572737');
  const collector = msg.createReactionCollector((r, u) => (r.emoji.name === '🗃', '👮', '💵', 'Minecraft', '⬅', '🎧', '✨') && (u.id !== vary.user.id && u.id === message.author.id))
  collector.on("collect", r=>{
      switch (r.emoji.name) {
      case '🎧':
      msg.edit(embed2)
      break;
      case'✨':
      msg.edit(actions)
      case'🗃':
      msg.edit(embed4)
      break;
      case'👮':
      msg.edit(embed3)
      break;
      case'⬅':
      msg.edit(embed)
      break;
      case'Minecraft':
      msg.edit(mine)
      break;
      case'💵':
      msg.edit(ecoembed)
      }
      })
})
}

exports.config = {
    name: 'ajuda',
    aliases: ['help']
}
