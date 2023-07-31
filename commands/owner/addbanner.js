const Discord = require("discord.js")
const config = require("../../config.json")
exports.help = {
    name: "addbanner",
    category: "owner",
    aliases: [],
    description: "ajouter",
    usage: "addbanner [nom] [url]"
}

exports.run = async (bot, message, args) => {
    if(!config.ownerId.includes(message.author.id)) return
    if(!args) return message.reply(`:x: Veuillez indiquer un nom !`)
    if(!args[1]) return message.reply(`:x: Veuillez indiquer l'url de la banner !`)

    bot.db.query(`INSERT INTO banner (name, link) VALUES ("${args[0].toLowerCase()}", "${args[1]}")`)

    message.reply(`La banner [${args[0]}](${args[1]}) a bien été ajouté dans la database`)

}