const Discord = require("discord.js")
const config = require("../../config.json")

exports.help = {
    name: "addbackup",
    category: "owner",
    aliases: [],
    description: "ajouter",
    usage: "addbackup [nom] [url]"
}

exports.run = async (bot, message, args) => {
    if(!config.buyers.includes(message.author.id)) return
    if(!args) return message.reply(`:x: Veuillez indiquer un nom !`)
    if(!args[1]) return message.reply(`:x: Veuillez indiquer l'url de la backup !`)

    bot.db.prepare('INSERT INTO backup (name, link) VALUES (?, ?)').run(args[0].toLowerCase(), args[1]);

    message.reply(`La backup [${args[0]}](${args[1]}) a bien été ajouté dans la database`)

}