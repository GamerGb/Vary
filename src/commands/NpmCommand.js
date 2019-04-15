const Discord = require('discord.js')
const snek = require('snekfetch');
const moment = require('moment');
require('moment-duration-format');
moment.locale('pt-BR');
exports.run = async (vary, message, args) => {

if (args.length === 0) return message.reply('Qual package você quer ver?');
const query = args.join(' ');
try {
const { body } = await snek.get(`https://registry.npmjs.com/${query.toLowerCase()}`);
const version = body.versions[body['dist-tags'].latest];
let deps = version.dependencies ? Object.keys(version.dependencies) : null;
let maintainers = body.maintainers.map(user => user.name);
let github = version.repository.url
let gitshort = github.slice(23, -4)

if (maintainers.length > 10) {
const len = maintainers.length - 10;
maintainers = maintainers.slice(0, 10);
maintainers.push(`...${len} more.`);
}

if (deps && deps.length > 10) {
const len = deps.length - 10;
deps = deps.slice(0, 10);
deps.push(`...${len} more.`);
}

function customTemplate() {
return this.duration.asSeconds() >= 86400 ? "w [meses], d [dias]" : "h [horas], m [minutos], s [segundos]";
}

let updated = moment.duration(Date.now() - new Date(body.time[body['dist-tags'].latest]).getTime()).format(customTemplate, {
trim: false
});
const embed = new Discord.RichEmbed()
.setColor(0xCB3837)
.setAuthor(`${body.name} - Informação da Package`, 'https://i.imgur.com/ErKf5Y0.png')
.setThumbnail('https://i.imgur.com/8DKwbhj.png')
.addField(`Descrição`, `${version.description || 'Sem descrição.'}\n\u200B`)

.addField('Última modificação', `${updated}`, true)
.addField('Versão', `${body['dist-tags'].latest}`, true)
.addField('Licensa', `${body.license}\n\u200B`, true)
.addField('Mantedores', maintainers.join(', '), true)

.addField('Dependências', `${deps && deps.length ? deps.join(', ') : '*Nenhuma*'}\n\u200B`, false)
.addField('\`NPMjs Package\`', `[\`https://www.npmjs.com/package/${query.toLowerCase()}\`](https://www.npmjs.com/package/${query.toLowerCase()})`)
.addField('\`Repositório Github\`', `[\`https://www.github.com/${gitshort}\`](https://www.github.com/${gitshort})`)

message.channel.send({embed});
} catch (error) {
if(error.status == 404) return message.channel.send('**Eh, parece que não tem isso no NPMJS.**');
console.log(error);
}

}

exports.config = {
    name: 'npm',
    aliases: []
}
