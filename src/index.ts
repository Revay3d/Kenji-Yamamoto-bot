import { Client, Intents, Collection } from "discord.js";
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
import config from "./config/config";
import express from "./express/app";

// Collections
const commands = new Collection();
const slashs = new Collection();

// Handler
import handler from "./handler/index";
handler(client);

// Express server
express();

// Client Login
client.login(config.token);
export { commands, slashs };
