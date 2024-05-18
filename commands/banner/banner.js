const Discord = require("discord.js")
const config = require("../../config.json")

exports.help = {
    name: "banner",
    category: "banner",
    aliases: [],
    description: "modèle",
    usage: "banner list/[nom du serveur]"
}

exports.run = async (bot, message, args) => {
    let currentpage = 0

    if(message.channel.id !== config.channelIdForbanner) return message.reply(`:x: Vous devez utiliser cette commande dans ce salon: <#${config.channelIdForbanner}>`).then(m => setTimeout(() => { m.delete() }, 60000)) 
    if(args[0] == "list") {
        const req = bot.db.prepare('SELECT * FROM banner').all();
            if(req.length < 1) return message.reply("*Aucune banner*") 
            else {
            const reqs = req.map((r, count) => `**${count + 1} •**[${r.name}](${r.link})`)
            const pageSize = 20
            const pageCount = Math.ceil(req.length / pageSize)
            
            const generateembed = () => {
                const embed3 = new Discord.EmbedBuilder()
                .setTitle(`Liste des modèles`)
                .setDescription(reqs.slice(currentpage * pageSize, (currentpage + 1) * pageSize).join("\n"))
                .setFooter({ text: `Page ${currentpage + 1}/${pageCount}`, iconURL: message.author.displayAvatarURL()})
                .setTimestamp()
    
                return embed3
            }
    
            const embed3 = generateembed()
    
            const row = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                .setCustomId("previous")
                .setStyle(Discord.ButtonStyle.Primary)
                .setEmoji("◀️"),
                new Discord.ButtonBuilder()
                .setCustomId("stop")
                .setStyle(Discord.ButtonStyle.Danger)
                .setEmoji("❌"),
                new Discord.ButtonBuilder()
                .setCustomId("next")
                .setStyle(Discord.ButtonStyle.Primary)
                .setEmoji("▶️"),
            )
            const msg = await message.reply({ embeds: [embed3], components: [row] })
    
            const filter = (interaction) => interaction.user.id === message.author.id;
            const collector = msg.createMessageComponentCollector({
              filter,
              time: 60000,
            });
    
            collector.on("collect", async (interaction) => {
                interaction.deferUpdate()
                if(interaction.customId == "previous") {
                    currentpage--
                } else if (interaction.customId == "next") {
                    currentpage++
                } else if (interaction.customId == "stop") {
                    msg.edit({ components: [] })
                }
    
                const newEmbed = generateembed();
                await interaction.update({ embeds: [newEmbed] })
    
                row.components[0].setDisabled(currentpage == 0)
                row.components[2].setDisabled(currentpage == pageCount - 1)
                
                await msg.edit({ components: [row] })
            })
    
            collector.on("end", () => {
                row.components.forEach((components) => {
                    components.setDisabled(true)
                })
                msg.edit({ components: [row] })
            })
        }
    } else if(args[0]) {
        const row = bot.db.prepare('SELECT * FROM banner WHERE name = ?').get(args[0].toLowerCase())
        if(!row) return message.reply(`:x: Je n'ai pas pu trouver ce modèle.`)
        else {
            message.reply(`✅ Je vous ai envoyé le modèle en MP`)
            message.author.send(`--> *Voici votre modèle*: ${row.link}`)
    }
    } else {
        return message.reply('Veuillez préciser `list` ou le nom de la banner')
    }
}

