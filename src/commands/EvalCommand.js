const Discord = require('discord.js')
const config = require('../config.json')
const db = require("../database.js")

exports.run = (vary, message, args) => {
  const clean = text => {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
      return text;

  }
    if (message.author.id !== '375627393773207554' && message.author.id !== '268526982222970880' && message.author.id !== '485837271967465472') return message.channel.send("⛔ **ACCESSO NEGADO**")
        try {
          let uwu = eval(args.join(" "))
          if (typeof(uwu) !== "string") uwu = require("util").inspect(uwu)
          if (uwu.length > 2000) uwu = "Resultado muito longo!"
        //  message.channel.send("```"+ uwu +"```")
          var oi = new Discord.RichEmbed()
          .setDescription(uwu)
            .setColor(0x36393e)

          message.channel.send(oi)

        } catch (err) {

          var a = new Discord.RichEmbed()
          .setDescription(err)
          .setTitle("Erro <:reprovado:527936330265526273>")
          .setColor(0xff9393)
          .setFooter(`Aprender a usar esses comandos era bom 😢`)
          message.channel.send(a)
        }
      }

      exports.config = {
          name: 'eval',
          aliases: ['e', 'lslc']
      }
