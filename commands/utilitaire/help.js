const Discord = require("discord.js")
const { EmbedBuilder } = require("discord.js")
exports.help = {
    name: "help",
    category: "menu daide",
    aliases: ["aide"],
    description: "Affiche les commandes du bot",
    usage: "Pas d'utilisation conseillée"
}

exports.run = async (bot, message, args) => {
  
   
    const Embed = new EmbedBuilder()
        .setTitle("Menu d'aide")
        .setDescription(`
        **▸ Backup Portal**

     ・ Tu es dans la recherche de Bannières & Modèles.

        Clique ci-dessous`)
        .setColor(bot.config.clients.embedColor)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name })
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        const Row = new Discord.ActionRowBuilder().addComponents(
            new Discord.StringSelectMenuBuilder()
                .setCustomId('select')
                .setPlaceholder('Choisissez une option')
                .addOptions([
                    {
                        label: 'Modeles',
                        description: 'Cliquez ici pour regarder les commandes d\'informations',
                        emoji: '❓',
                        value: 'modeles',
                    },
                   
                    {
                        label: 'Bannieres',
                        description: 'Cliquez ici pour regarder les commandes de modo',
                        emoji: '🛡️',
                        value: 'bannieres',
                    },
                  
                    
                  
                ]))
                const ban = await message.reply({
                    embeds: [Embed],
                    components: [Row]})
    const time = 22 * 24 * 60 * 60 * 1000;
    const collector = ban.createMessageComponentCollector({ componentType: Discord.ComponentType.StringSelect, time });

    collector.on('collect', async (i) => {
        if (i.user.id !== message.author.id) {
            i.reply({ content: "Vous ne pouvez pas regarder sur celui ci, merci de faire la commande vous même !", ephemeral: true });
            return;
        } else {
            i.deferUpdate()
            if (i.customId === "select") {
                const selectedValue = i.values[0];
                if (selectedValue === 'bannieres') {
                    const embed2 = new EmbedBuilder()
                    .setTitle("Bannieres")
                    .setDescription(`
                    !banner [nom du serveur]/list
                    Cherche la bannière demandée`);
                    ban.edit({embeds: [embed2]})
                }

                if (selectedValue === 'modeles') {
                    const embed2 = new EmbedBuilder()
                    .setTitle("Modeles")
                    .setDescription(`
                    !addbackup
                     ajouter une backup
                    !addbanner
                     ajouter une banniere
                    !delbackup
                     suprimer une backup
                    !delbanner
                     suprimer une banniere`);
                    ban.edit({embeds: [embed2]})
                }


               
               
                
            }
        }
    })
    try {
        

       

        
      
        
    } catch (e) {
        return message.delete() + message.channel.send({
            embeds: [
                Embed
                    .setDescription(`Une erreur est survenue : ${e}`)
            ]
        })
    }
}
