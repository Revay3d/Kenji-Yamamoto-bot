import {
  Client,
  Message,
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  MessageSelectMenu,
} from "discord.js";
import config from "../../../config/config";
import { MsgComponentInt } from "../../../types/mci";

module.exports = {


  name: "ping",
  alias: [],
  async run(client: Client, message: Message, args: string[]) {
    await message.channel.sendTyping();
    const ping = new MessageEmbed()
.setAuthor(`¡Mi ping!`, client.user?.displayAvatarURL())
.setDescription("**🤖 `|` Bot**: "+ Math.floor(message.createdTimestamp - Date.now()) +"\n**🏐 `|` Api**: " + client.ws.ping)
.setColor('WHITE')
    .setThumbnail("https://i.imgur.com/3KuMHNA.jpg")
    .setImage(
            "https://cdn.discordapp.com/attachments/717821702180044862/729449197153157160/BARRA.gif"
          )
    return await message.reply({
          embeds: [ping] }).then((m) => setTimeout(() => m.delete(), 10000));
                                              }

}
