const Discord = require("discord.js");

exports.run = async (vary, message, args) => {
var user = message.mentions.users.first() || message.author;

if (user.presence.game.name === 'Spotify' && user.presence.game.type === 2) {
 try {
     var trackImg = user.presence.game.assets.largeImageURL;
     var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`;
     var trackName = user.presence.game.details;
     var trackAlbum = user.presence.game.assets.largeText;
     var trackAuthor = user.presence.game.state;

     const spotifyembed = new Discord.RichEmbed()
         .setTitle(`<:spotify:565146387734462464> Spotify`)
         .setColor('FF0000')
         .setThumbnail(trackImg)
         .setDescription(`
\`🎵\` **Nome da musica :**  \`${trackName}\`
\`📀\` **Album :**  \`${trackAlbum}\`
\`🎤\` **Autor(es) :**  \`${trackAuthor}\`
`)
         .addField('Ouvindo:', `[${trackUrl}](${trackUrl})`, false);

     return message.channel.send(spotifyembed);

 } catch (error) {
     return message.channel.send(`\`[ERRO ❌]\`, ${user.username} não está ouvindo uma música registrada`);
 }

} else {
 return message.channel.send(`${user.username} não está ouvindo Spotify`);
}
}

exports.config = {
    name: 'spotify',
    aliases: []
}
