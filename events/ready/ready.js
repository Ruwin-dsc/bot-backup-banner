const Discord = require("discord.js");
const ms = require('ms')

module.exports = {
  name: "ready",
  once: true,
  execute(bot) {
    
    console.log(`Bot connecté !`)
  }
}
