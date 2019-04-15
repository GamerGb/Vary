const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs")
const moment = require("moment")
const os = require('os')
const snekfetch = require('snekfetch');
const ytdl = require('ytdl-core');
const cpuStat = require("cpu-stat")
const tempo = require('weather-js');
const jimp = require('jimp');
const math = require('mathjs');
moment.locale('pt-BR');
require("moment-duration-format")
const vary = new Discord.Client();
const config = require("./config.json");
const db = require('./database.js');

vary.queue = new Discord.Collection()
vary.commands = new Discord.Collection()
vary.aliases = new Discord.Collection()

const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL, vary);

dbl.on('posted', () => {
  console.log('Contador de servidores postado!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})

fs.readdir("./src/events/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if (jsfile.length <= 0) {
    console.log("Não foi encontrado nenhum evento.")
    return;
  }
  console.log(`Foram carregados um total de ${jsfile.length} eventos.`)
  jsfile.forEach(f => {
    const eventName = f.split('.')[0]
    const event = require(`./src/events/${f}`)

    vary.on(eventName, event.bind(null, vary))
  });

  vary.on('error', (err) => {
    console.log('error', err)
  });
});

fs.readdir('./src/commands', function (err, f) {

    try {
        let file = f.filter(f => f.split('.')
        .pop() === 'js')
        if (file.length < 0) {
            console.log('Cadê os comandos fera?')
        }
        file.forEach(function (f, i) {
            let local = require(`./src/commands/${f}`)
            vary.commands.set(local.config.name, local)
            local.config.aliases.forEach(function (alias) {
                vary.aliases.set(alias, local.config.name)
            })
        })
    } catch (err) {
        console.error(err)
    }
})

vary.login(process.env.TOKEN);
