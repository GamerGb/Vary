const Discord = require("discord.js");
const math = require('mathjs');

exports.run = async (vary, message, args) => {
  let input = args.join(" ");
if (!input) {
   message.reply('__Tens de dizer uma conta matemática para eu efetuar!__');
   return;
}

const question = args.join(" ");

let answer;
try {
   answer = math.eval(question);
} catch (err) {
   return message.reply(`**Conta matemática inválida:** ${err}`);
}

const embed = new Discord.RichEmbed()
   .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/31QYTepQomL.png")
   .setColor('RANDOM')
   .addField("**Questão:**", question, true)
   .addField("**Resposta:**", answer)

message.channel.send({
   embed
})
}

exports.config = {
    name: 'calc',
    aliases: ['calcular']
}
