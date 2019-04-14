const Discord = require("discord.js");
const moment = require('moment')
moment.locale('pt-br')

exports.run = (vary, message, args) => {
if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Permissão `Banir membros` não encontrada em seu cargo!")

    var razao = args.slice(1).join(" ")
    var membro = message.mentions.members.first() || vary.users.get(args[0]);

    if (!membro) return message.reply("Mencione o membro que deseja dar warn!")
    if (!membro.bannable) return message.reply("Eu não posso punir este usuário, meu cargo é menor que o do usuário a ser punido!")

    message.delete()

    if (razao.length < 1) return message.reply("Adicione um motivo válido!")

    const warnembed = new Discord.RichEmbed()

        .setThumbnail(membro.user.avatarURL)
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .setDescription(`O usuário foi punido(a) por desrespeitar as regras do servidor!`)
        .addField("🚫 | Punição", `Warn`)
        .addField("👮🏻 | Staff", `${message.author.username}`)
        .addField("🔧 | Id do staff", `${message.author.id}`)
        .addField("👤 | Usuário", `${membro}`)
        .addField("⚙️ | ID do usuário:", `${membro.id}`)
        .addField("📑 | Motivo", razao)
        .setTimestamp(new Date())
        message.channel.send(warnembed)
}

exports.config = {
    name: 'warn',
    aliases: ['avisar']
}
