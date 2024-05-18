const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials
} = require("discord.js");
const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildInvites,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction,
    Partials.ThreadMember,
    Partials.GuildScheduledEvent,
  ],
  disableMentions: 'everyone',
  disableMentions: 'all'
});

bot.setMaxListeners(70)

bot.commands = new Collection();
const config = require("./config")
bot.config = config
const commandHandler = require("./handlers/command.js")(bot);
const anticrashHandler = require("./Utils/anticrash");
anticrashHandler(bot);
const eventdHandler = require("./handlers/event.js")(bot);
const DatabaseHandler = require('./handlers/database')(bot);
bot.db = DatabaseHandler

bot.login(config.token);
