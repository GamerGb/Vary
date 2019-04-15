const Discord = require("discord.js");

exports.run = async (vary, message, args) => {
let member = message.mentions.users.first() || vary.users.get(args[0]) || message.author;
let avatar = member.displayAvatarURL;
if (avatar.endsWith(".gif")) {
    avatar = `${member.displayAvatarURL}?size=2048`
}
message.channel.send({
    embed: {
        title: `${member.tag}`,
        description: `[Download](${avatar})`,
        image: {
            url: avatar
        }
    }
})
}

exports.config = {
    name: 'avatar',
    aliases: []
}
