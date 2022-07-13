import { MessageComponentInteraction } from "discord.js";

declare interface MsgComponentInt extends MessageComponentInteraction {
  values: string[];
}
