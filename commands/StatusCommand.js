const Discord = require("discord.js");
const cpuStat = require("cpu-stat")
const moment = require("moment")
const os = require('os')
const ms = require("ms")
moment.locale('pt-BR');
require("moment-duration-format")

exports.run = async (vary, message, args) => {
let { version } = require("discord.js");
let duration = moment.duration(vary.uptime).format('D [d], H [h], m [m], s [s]');

cpuStat.usagePercent(function(err, percent, seconds) {
  if (err) {
    return console.log(err);
  }

 let secs = Math.floor(vary.uptime % 60);
 let days = Math.floor((vary.uptime % 31536000) / 86400);
 let hours = Math.floor((vary.uptime / 3600) % 24);
 let mins = Math.floor((vary.uptime / 60) % 60);

  let embedStats = new Discord.RichEmbed()
 .setTitle("**Meus status**")
 .setColor("BLUE")
 .addField("Memoria a ser usada", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
 .addField("Discord.js", `v${version}`, true)
 .addField("Uptime", `\`\`\`md\n${duration}\`\`\``)
 .addField("Processador", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
 .addField("Uso da CPU", `\`${percent.toFixed(2)}%\``,true)
 .addField("Arch", `\`${os.arch()}\``,true)
 .addField("Plataforma", `\`\`${os.platform()}\`\``,true)
 message.reply(embedStats)
})


}

exports.config = {
    name: 'status',
    aliases: []
}
