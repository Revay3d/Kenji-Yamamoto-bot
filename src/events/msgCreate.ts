import { Client, Message, MessageEmbed } from "discord.js";
import { commands } from "../index";
import config from "../config/config";
import { Cmd } from "../types/cmd";

module.exports = {
  name: "messageCreate",
  async run(client: Client, message: Message) {
    try {
      if (message.channel.type === "DM") return;
      if (message.author.bot) return;

      const prefix = config.prefix;

      if (!message.content.startsWith(prefix)) return;

      const args = await message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
      const command = args.shift()?.toLowerCase();

      // @ts-ignore
      const cmd: Cmd = commands.find(
        (c: any) => c.name === command || (c.alias && c.alias.includes(command))
      );

      if (!cmd) {
        await message.channel.sendTyping();
        let embed = new MessageEmbed()
          .setTitle("<a:no:997205856015876176> | Comando no encontrado")
          .setDescription(
            "perdon " +
              `${message.author}` +
              `, el comando \`${prefix}${command}\` no existe en mi base de datos...\n puedes usar **+help** para ver los comandos disponible.`
          )

          .setColor("RED")
          .setThumbnail("https://i.imgur.com/3KuMHNA.jpg")

          .setImage(
            "https://cdn.discordapp.com/attachments/717821702180044862/729449197153157160/BARRA.gif"
          )
          .setFooter({
            text: `${client.user?.username}`,
            iconURL: `${client.user?.displayAvatarURL()}`,
          })
          .setTimestamp();

        return await message
          .reply({
            embeds: [embed],
          })
          .then((m) => setTimeout(() => m.delete(), 15000));
      }

      if (cmd) {
        await message.channel.sendTyping();
        return cmd.run(client, message, args);
      }
    } catch (err: any) {
      message.channel.send(`Error: ${err.message}`);
    }
  },
};
