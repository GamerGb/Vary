const Discord = require("discord.js")
const config = require("../config.json")

module.exports = async (vary, message, args, dados) => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "566982078625873931") return

    let servidor = vary.guilds.get("546634351740190731")
    let membro = servidor.members.get(dados.d.user_id)

    let cargo1 = servidor.roles.get('546635665752981504'),

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === "566966275578789888"){
            if(membro.roles.has(cargo1)) return
            membro.addRole(cargo1)
    }
    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.id === "566966275578789888"){
            if(membro.roles.has(cargo1)) return
            membro.removeRole(cargo1)
    }

})
