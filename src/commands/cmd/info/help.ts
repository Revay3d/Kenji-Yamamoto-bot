import {
  Client,
  Message,
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  MessageSelectMenu,
} from "discord.js";
import config from "../../../config/config";

module.exports = {
  name: "help",
  alias: [],
  async run(client: Client, message: Message, args: string[]) {
    try {
      // Botones
      const ButtonRow = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel(`Comandos (${config.prefix})`)
          .setStyle("PRIMARY")
          .setCustomId("button_commands")
          .setEmoji("✨"),
        new MessageButton()
          .setLabel(`Comandos de barra diagonal (${config.prefix})`)
          .setStyle("PRIMARY")
          .setCustomId("button_slash_commands")
          .setEmoji("✨")
      );

      // Menu de categorias para los Comandos de Prefijo
      const CommandsRow = new MessageActionRow().addComponents(
        new MessageSelectMenu()
          .setPlaceholder("Selecciona una categoría.")
          .setCustomId("menu_commands")
          .addOptions([
            {
              label: "Fun",
              description: "Categoria fun.",
              value: "fun",
            },
          ])
      );

      // Menu Embed
      const Menu = new MessageEmbed()
        .setTitle("Menu de ayuda")
        .setDescription("Descripcion corta aqui")
        .addField("Categorias:", "> Comandos\n> Comandos de barra diagonal")
        .setFooter({
          text: `${client.user?.username}`,
          iconURL: `${client.user?.displayAvatarURL()}`,
        })
        .setTimestamp()
        .setColor("AQUA");

      // Mensaje principal
      let mensaje = await message.channel.send({
        embeds: [Menu],
        components: [ButtonRow],
      });

      // Filtro
      const filter = (i: any) => i.user.id === message.author.id;

      const collector = mensaje.createMessageComponentCollector({
        filter: filter,
        time: 1800000,
      });

      const CommandsMenu = new MessageEmbed()
        .setTitle("Menu de ayuda")
        .setDescription("Descripcion corta aqui")
        .addField("Categorias:", "> Fun\n> Info\n> etc")
        .setFooter({
          text: `${client.user?.username}`,
          iconURL: `${client.user?.displayAvatarURL()}`,
        })
        .setTimestamp()
        .setColor("AQUA");

      const FunCommands = new MessageEmbed()
        .setTitle("Menu de ayuda")
        .setDescription("Descripcion corta aqui")
        .addField("Comandos:", `> ${config.prefix}say\n> ${config.prefix}8ball`)
        .setFooter({
          text: `${client.user?.username}`,
          iconURL: `${client.user?.displayAvatarURL()}`,
        })
        .setTimestamp()
        .setColor("AQUA");

      // Collector
      collector.on("collect", async (i) => {
        // Botones
        if (i.customId === "button_commands") {
          await i.deferUpdate();
          i.editReply({ embeds: [CommandsMenu], components: [CommandsRow] });
        }
      });
    } catch (err) {
      console.log(err);
      // @ts-ignore
      await message.channel.send({ content: err.message });
    }
  },
};
