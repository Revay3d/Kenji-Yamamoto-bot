import { version } from "../../package.json";
import { config } from "dotenv";
config();

export default {
  token: process.env.TOKEN, // Your token here
  clientId: "977232891119558697", // Your Client Id here
  guildId: "975079248840769586", // Your Guild Id here
  prefix: "+", // Your prefix here
  version, // The version of the bot here
};
