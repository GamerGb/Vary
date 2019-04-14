const Discord = require("discord.js");

exports.run = async (vary, message, args) => {
if (!message.member.hasPermission('MANAGE_MEMBERS')) return message.channel.send("Permissão `Gerenciar Membros` não encontrada em seu cargo!")
let membro = message.mentions.members.first() || message.guild.members.get(args[0])
let cargo_nome = message.mentions.roles.first().name || args[1]
if(!membro) return message.channel.send(`${message.author}, <:discordpoop:510767850437214208> **Mencione um usuário !**`);
if(!cargo_nome) return message.channel.send(`${message.author}, <:discordpoop:510767850437214208> **Qual é o cargo a setar??**`)
let cargo = message.guild.roles.find(role => role.name === `${cargo_nome}`)

if(membro.roles.has(cargo.id)) return message.reply("Esse membro ja possui esse cargo")
membro.addRole(cargo.id).then(() => {message.reply(`O cargo: ${cargo.name} foi adicionado a o membro: ${membro.user.tag}`)})
}

exports.config = {
    name: 'addcargo',
    aliases: ['setartag']
}
