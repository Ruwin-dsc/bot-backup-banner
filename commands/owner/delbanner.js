const Discord = require("discord.js")
const config = require("../../config.json")

exports.help = {
    name: "delbanner",
    category: "owner",
    aliases: [],
    description: "supprimer une banner",
    usage: "delbanner [nom]"
}

exports.run = async (bot, message, args) => {
    if(!config.buyers.includes(message.author.id)) return
    if(!args) return message.reply(`:x: Veuillez indiquer un nom !`)

        bot.db.prepare('DELETE FROM banner WHERE name = ?').run(args[0]); 

    message.reply(`La banner avec le nom ${args[0]} a bien été supprimer !`)

}