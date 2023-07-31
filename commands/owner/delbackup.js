const Discord = require("discord.js")
const config = require("../../config.json")

exports.help = {
    name: "delbackup",
    category: "owner",
    aliases: [],
    description: "supprimer une backup",
    usage: "delbackup [nom]"
}

exports.run = async (bot, message, args) => {
    if(!config.ownerId.includes(message.author.id)) return
    if(!args) return message.reply(`:x: Veuillez indiquer un nom !`)

    bot.db.query(`DELETE FROM backup WHERE name = "${args[0]}"`) 

    message.reply(`La backup avec le nom ${args[0]} a bien été supprimer !`)

}