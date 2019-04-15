const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (vary, message, args) => {
if (!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send("Permissão `Silenciar usuários` não encontrada em seu cargo!")
    let reason = args.slice(2).join(" ");
    if (!reason) return message.reply("Indique um motivo!");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Mencione um user!");

    let muterole = message.guild.roles.find(`name`, "Mutado");
    //criar o cargo
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Mutado",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    //fim de criar um cargo
    let mutetime = args[1];
    if (!mutetime) return message.reply("Especifique um tempo");

    message.delete().catch(O_o => {});

    try {
        await tomute.send(`Oi! você foi mutado por ${mutetime} Desculpe!`)
    } catch (e) {
        message.channel.send(`Erro`)
    }

    let muteembed = new Discord.RichEmbed()
        .setDescription(`Mutado por ${message.author}`)
        .setColor("RANDOM")
        .addField("User mutado", tomute)
        .addField("Mutado em", message.createdAt)
        .addField("Tempo do mute", mutetime)
        .addField("Motivo", reason);

    let incidentschannel = message.guild.channels.find(`name`, "🚫│punições");
    if (!incidentschannel) return message.reply("Crie um canal de texto chamado `🚫│punições`!");
    incidentschannel.send(muteembed);
    message.channel.send(`<@${tomute.id}> está mutado por ${mutetime}`)
    await (tomute.addRole(muterole.id));

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> foi desmutado!`);
    }, ms(mutetime));
}

exports.config = {
    name: 'mute',
    aliases: ['silenciar']
}
