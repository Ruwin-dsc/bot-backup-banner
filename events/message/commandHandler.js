const Discord = require("discord.js")
const config = require("../../config.json")

module.exports = {
    name: 'messageCreate',
    execute(message, bot) {

        const prefix = config.prefix
        let messageArray = message.content.split(" ");
            let cmd = messageArray[0].toLowerCase();
            let args = messageArray.slice(1);

             if(!cmd.startsWith(prefix)) return;

             let commandfile = bot.commands.get(cmd.slice(prefix.length))
             if(!commandfile) return

             if(commandfile) {
                commandfile.run(bot,message,args);      
             }

    }
}