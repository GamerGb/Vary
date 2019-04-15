const { RichEmbed } = require('discord.js')
const ytSearch = require('youtube-search')
const ytdl = require('ytdl-core')

exports.run = (vary, message, args) => {
    if (!args[0]) return message.channel.send('Insira o título do vídeo!')
    if (!message.member.voiceChannel) return message.channel.send('Entre em um canal de voz!')
    ytSearch(args.join(' '), { maxResults: 1, key: process.env.YT, type: 'video' }, async (err, videos) => {
       if (err) return message.channel.send(`\`\`\`${err.stack}\`\`\``)
        if (!videos && !videos[0]) return message.channel.send('Vídeo não encontrado...')
      const ytdlVideo = await ytdl(videos[0].link, { filter: 'audioonly', quality: 'highestaudio' })
      if (!message.guild.me.voiceChannel) {
          message.member.voiceChannel.join().then(con => {
              vary.queue.set(message.guild.id, { con: con, dispatcher: null, queue: [] })
              function play (obj) {
                let dispatcher = con.playStream(obj.ytdl)
            vary.queue.set(message.guild.id, { con: con, dispatcher: dispatcher, queue: [] })
                  dispatcher.on('end', () => {
                  let playlist = vary.queue.get(message.guild.id)
                      const music = ((playlist || {}).queue || []).shift()
                     if (!music) {
                        message.channel.send('<:stop:563274776882315275> A playlist acabou e estou saindo do canal.')
                        vary.queue.delete(message.guild.id)
                        message.guild.me.voiceChannel.leave()
                        return
                    }
                    vary.queue.set(message.guild.id, playlist)
                    play(music)
                })
                message.channel.send(`<:play:563274942427168778> Tocando agora \`${obj.videoInfo.title}\`!`)
              }
              play({ ytdl: ytdlVideo, videoInfo: videos[0] })
          })
          return
      }
      const g = vary.queue.get(message.guild.id)
      vary.queue.set(message.guild.id, { dispatcher: g.dispatcher, con: g.con, queue: [...g.queue, { ytdl: ytdlVideo, videoInfo: videos[0] }]})
      message.channel.send(`\`${videos[0].title}\` adicionado a playlist!`)
    })
}

exports.config = {
    name: 'play',
    aliases: ['tocar']
}
