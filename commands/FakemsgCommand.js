const Discord = require("discord.js");

exports.run = async (vary, message, args) => {
    let user = message.mentions.users.first() || message.guild.members.get(args[0])

  let botmessage = args.slice(1).join(' ')

  if (args[0] == null) {return message.channel.send(`${message.author}, <:discordpoop:510767850437214208> **Mencione um usuário !**`)}


    if (args[1] == null) {return message.channel.send(`${message.author}, <:discordpoop:510767850437214208> **Diga algo !**`)}
    message.channel.createWebhook(user.username, user.avatarURL).then(w => {
        w.send(botmessage);
        w.delete();
    })

}

exports.config = {
    name: 'fakemsg',
    aliases: ['trollmsg']
}
