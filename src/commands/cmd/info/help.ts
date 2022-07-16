import {
  Client,
  Message,
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  MessageSelectMenu,
} from "discord.js";
import config from "../../../config/config";
import menu from "../../../embeds/help/menu";
import { MsgComponentInt } from "../../../types/mci";

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
          .setEmoji("<a: verificado:689574388353335398>"),
        new MessageButton()
          .setLabel(`Comandos de barra diagonal ( / )`)
          .setStyle("PRIMARY")
          .setCustomId("button_slash_commands")
          .setEmoji("<a: verificado:689574388353335398>")
      );

      // Menu de categorias para los Comandos de Prefijo
      const CommandsRow = new MessageActionRow().addComponents(
        new MessageSelectMenu()
          .setPlaceholder("💙 | selección la captegoria")
          .setCustomId("menu_commands")
          .addOptions([
            {
              label: "Comandos",
              description: "Ver todos mis comandos.",
              value: "Comandos",
              emoji: "997150996566392856",
            },
            {
              label: "Reglas en mano",
              description: "ten todas las reglas del servidor en tus manos...",
              value: "reglas",
              emoji: "997165566513131550",
            },
            {
              label: "Ayuda comando",
              description:
                "ten sujerencias de como usar algunos de mis comandos.",
              value: "ayuda",
              emoji: "997201942377934949",
            },
            {
              label: "Inicio",
              description: "Volver al menu inicial.",
              value: "inicio",
              emoji: "997151106448765020",
            },
          ])
      );

      // Menu Embed comandos
      let MenuComands = new MessageEmbed()
        .setTitle("<a:dev:997201942377934949> | Menu de comandos")
        .setDescription(
          "\n\nNota: en este menu estan mis comandos que actualmente estan disponibles. "
        )
        .addField(
          "Comanos disponible:",
          "<a:ff:997202212931510302> Comandos\n<a:ff:997202212931510302> Comandos de barra diagonal"
        )
        .setThumbnail("https://i.imgur.com/3KuMHNA.jpg")

        .setImage(
          "https://cdn.discordapp.com/attachments/717821702180044862/729449197153157160/BARRA.gif"
        )
        .setFooter({
          text: `${client.user?.username}`,
          iconURL: `${client.user?.displayAvatarURL()}`,
        })
        .setTimestamp()
        .setColor("WHITE");

      // Menu Embed reglas 0
      const regla0 = new MessageEmbed()
        .setTitle("📃 | reglas en manos")
        .setDescription(
          "leer las siguientes reglas atentamente para no ser baneado o expulsado del servido 💙"
        )

        .setThumbnail(
          "https://cdn.discordapp.com/attachments/986408651193479169/990311920676519976/20220415_152235.png"
        )

        .setImage(
          "https://cdn.discordapp.com/attachments/717821702180044862/729449197153157160/BARRA.gif"
        )
        .setFooter({
          text: `${client.user?.username}`,
          iconURL: `${client.user?.displayAvatarURL()}`,
        })
        .setTimestamp()
        .setColor("WHITE");

      //button menu reglas 0
      const bregla0 = new MessageActionRow().addComponents(
        new MessageButton()

          .setStyle("PRIMARY")
          .setCustomId("button_back")
          .setDisabled(true)
          .setEmoji("⬅️"),

        new MessageButton()
          .setStyle("SUCCESS")
          .setCustomId("button_beginning")
          .setEmoji("🏠"),

        new MessageButton()
          .setStyle("PRIMARY")
          .setCustomId("button_ahead")
          .setEmoji("➡️")
      );
      // Menu Embed reglas 1
      const regla1 = new MessageEmbed()
        .setTitle(":one: | 𝗻𝗼 𝘀𝗲 𝗽𝗲𝗿𝗺𝗶𝘁𝗲 𝗲𝗹 𝘀𝗽𝗮𝗺")
        .setDescription(
          "Está prohibido mandar enlace o enviar la misma palabra para auto promocionarse, se les silenciara automáticamente por un tiempo."
        )

        .setThumbnail("https://i.imgur.com/gHEaCyc.png")

        .setImage(
          "https://cdn.discordapp.com/attachments/717821702180044862/729449197153157160/BARRA.gif"
        )
        .setFooter({
          text: `${client.user?.username}`,
          iconURL: `${client.user?.displayAvatarURL()}`,
        })
        .setTimestamp()
        .setColor("RED");

      //button menu reglas 0
      const bregla1 = new MessageActionRow().addComponents(
        new MessageButton()

          .setStyle("PRIMARY")
          .setCustomId("button_back1")
          .setEmoji("⬅️"),

        new MessageButton()
          .setStyle("SUCCESS")
          .setCustomId("button_beginning1")
          .setEmoji("🏠"),

        new MessageButton()
          .setStyle("PRIMARY")
          .setCustomId("button_ahead1")
          .setEmoji("➡️")
      );

      // Menu Embed reglas 2
      const regla2 = new MessageEmbed()
        .setTitle(":two: | 𝗻𝗼 𝘀𝗲 𝗽𝗲𝗿𝗺𝗶𝘁𝗲 𝗹𝗮𝘀 𝗴𝗿𝗼𝘀𝗲𝗿i𝗮𝘀")

        .setDescription(
          "dices alguna grosería o insultas a un usuario, serás advertido y si sigue así se teles silenciara automáticamente por un tiempo."
        )

        .setThumbnail("https://i.imgur.com/gHEaCyc.png")

        .setImage(
          "https://cdn.discordapp.com/attachments/717821702180044862/729449197153157160/BARRA.gif"
        )
        .setFooter({
          text: `${client.user?.username}`,
          iconURL: `${client.user?.displayAvatarURL()}`,
        })
        .setTimestamp()
        .setColor("RED");

      //button menu reglas 2
      const bregla2 = new MessageActionRow().addComponents(
        new MessageButton()

          .setStyle("PRIMARY")
          .setCustomId("button_back2")
          .setEmoji("⬅️"),

        new MessageButton()
          .setStyle("SUCCESS")
          .setCustomId("button_beginning2")
          .setEmoji("🏠"),

        new MessageButton()
          .setStyle("PRIMARY")
          .setCustomId("button_ahead2")
          .setEmoji("➡️")
      );

      // Menu Embed reglas 3
      const regla3 = new MessageEmbed()
        .setTitle(":three: | 𝗻𝗼 𝘀𝗲 𝗽𝗲𝗿𝗺𝗶𝘁𝗲 𝗺𝗮𝗻𝗱𝗮𝗿 𝗶𝗺𝗮́𝗴𝗲𝗻𝗲𝘀 𝗶𝗻𝗮𝗽𝗿𝗼𝗽𝗶𝗮𝗱𝗮𝘀")
        .setDescription(
          "Este servidor puede haber usuarios menores de 18 años, o si no hubiera también se prohíbe."
        )

        .setThumbnail("https://i.imgur.com/gHEaCyc.png")

        .setImage(
          "https://cdn.discordapp.com/attachments/717821702180044862/729449197153157160/BARRA.gif"
        )
        .setFooter({
          text: `${client.user?.username}`,
          iconURL: `${client.user?.displayAvatarURL()}`,
        })
        .setTimestamp()
        .setColor("RED");

      //button menu reglas 3
      const bregla3 = new MessageActionRow().addComponents(
        new MessageButton()

          .setStyle("PRIMARY")
          .setCustomId("button_back3")
          .setEmoji("⬅️"),

        new MessageButton()
          .setStyle("SUCCESS")
          .setCustomId("button_beginning3")
          .setEmoji("🏠"),

        new MessageButton()
          .setStyle("PRIMARY")
          .setCustomId("button_ahead3")
          .setEmoji("➡️")
      );

      // Menu Embed reglas 4
      const regla4 = new MessageEmbed()
        .setTitle(":four: | 𝗮𝗻𝘁𝗶-𝗿𝗮𝗶𝗱")
        .setDescription(
          "Este servidor tiene varios  bots anti-raid así que si un <@&934924467770105966> , <@&926913890233778288> o un <@&986407281375739924> u otros rangos, que manipulen o dañen este servidor, serán baneado sin compasión."
        )

        .setThumbnail("https://i.imgur.com/EW7etlA.png")
        .setImage(
          "https://cdn.discordapp.com/attachments/717821702180044862/729449197153157160/BARRA.gif"
        )
        .setFooter({
          text: `${client.user?.username}`,
          iconURL: `${client.user?.displayAvatarURL()}`,
        })
        .setTimestamp()
        .setColor("YELLOW");

      //button menu reglas 4
      const bregla4 = new MessageActionRow().addComponents(
        new MessageButton()

          .setStyle("PRIMARY")
          .setCustomId("button_back4")
          .setEmoji("⬅️"),

        new MessageButton()
          .setStyle("SUCCESS")
          .setCustomId("button_beginning4")
          .setEmoji("🏠"),

        new MessageButton()
          .setStyle("PRIMARY")
          .setCustomId("button_ahead4")
          .setEmoji("➡️")
      );

      // Menu Embed reglas 5
      const regla5 = new MessageEmbed()
        .setTitle("💙 | Canales importante")
        .setDescription(
          "1️⃣ <#926918297444835390>\n\n2️⃣ <#975437229906358333>\n\n3️⃣ <#926957834103566336>"
        )

        .setThumbnail(
          "https://cdn.discordapp.com/attachments/986408651193479169/990311920676519976/20220415_152235.png"
        )

        .setImage(
          "https://cdn.discordapp.com/attachments/717821702180044862/729449197153157160/BARRA.gif"
        )
        .setFooter({
          text: `${client.user?.username}`,
          iconURL: `${client.user?.displayAvatarURL()}`,
        })
        .setTimestamp()
        .setColor("WHITE");

      //button menu reglas 0
      const bregla5 = new MessageActionRow().addComponents(
        new MessageButton()

          .setStyle("PRIMARY")
          .setCustomId("button_back5")
          .setEmoji("⬅️"),

        new MessageButton()
          .setStyle("SUCCESS")
          .setCustomId("button_beginning5")
          .setEmoji("🏠"),

        new MessageButton()
          .setStyle("PRIMARY")
          .setCustomId("button_ahead5")
          .setDisabled(true)

          .setEmoji("➡️")
      );

      // Mensaje principal
      let mensaje = await message.channel.send({
        embeds: [menu(client)],
        components: [ButtonRow],
      });

      // Filtro
      const filter = (i: any) => i.user.id === message.author.id;

      const collector = mensaje.createMessageComponentCollector({
        filter: filter,
        time: 1800000,
      });

      const CommandsMenu = new MessageEmbed()

        .setTitle("Todos mis comandos de " + `(${config.prefix})`)
        .setDescription(
          "Seleciona la categoria para poder mostrar los comandos que nesecites"
        )
        .addField(
          "Categorias:",
          "<a:ff:997151260664942753> Comandos del bot\n<a:ff:997151260664942753> Reglas del server\n<a:ff:997151260664942753> Ayuda con los comandos\n<a:ff:997151260664942753> Inicio"
        )
        .setThumbnail("https://i.imgur.com/3KuMHNA.jpg")
        .setImage(
          "https://cdn.discordapp.com/attachments/717821702180044862/729449197153157160/BARRA.gif"
        )
        .setFooter({
          text: `${client.user?.username}`,
          iconURL: `${client.user?.displayAvatarURL()}`,
        })
        .setTimestamp()
        .setColor("WHITE");

      const FunCommands = new MessageEmbed()
        .setTitle("Menu de ayuda")
        .setDescription("Descripcion corta aqui")
        .addField(
          "Comandos:",
          `<a:ff:997151260664942753> ${config.prefix}say\n<a:ff:997151260664942753> ${config.prefix}embed`
        )
        .setFooter({
          text: `${client.user?.username}`,
          iconURL: `${client.user?.displayAvatarURL()}`,
        })
        .setTimestamp()
        .setColor("WHITE");

      // Collector
      collector.on("collect", async (i: MsgComponentInt) => {
        // Botones
        if (i.customId === "button_commands") {
          await i.deferUpdate();
          i.editReply({ embeds: [CommandsMenu], components: [CommandsRow] });
        }

        if (i.customId === "button_slash_commands") {
          await i.deferUpdate();
          i.editReply({ embeds: [CommandsMenu], components: [CommandsRow] });
        }

        if (i.customId === "menu_commands" && i.values[0] === "comandos") {
          await i.deferUpdate();
          i.editReply({ embeds: [FunCommands], components: [CommandsRow] });
        }

        if (i.customId === "menu_commands" && i.values[0] === "reglas") {
          await i.deferUpdate();
          i.editReply({ embeds: [regla0], components: [bregla0] });
        }

        if (i.customId === "menu_commands" && i.values[0] === "inicio") {
          await i.deferUpdate();
          i.editReply({ embeds: [menu(client)], components: [ButtonRow] });
        }

        //button de menu de reg0as1

        if (i.customId === "button_ahead") {
          await i.deferUpdate();
          i.editReply({ embeds: [regla1], components: [bregla1] });
        }
        if (i.customId === "button_beginning") {
          await i.deferUpdate();
          i.editReply({ embeds: [CommandsMenu], components: [ButtonRow] });
        }
        //button regl1s 2
        if (i.customId === "button_back1") {
          await i.deferUpdate();
          i.editReply({ embeds: [regla0], components: [bregla0] });
        }
        if (i.customId === "button_beginning1") {
          await i.deferUpdate();
          i.editReply({ embeds: [CommandsMenu], components: [ButtonRow] });
        }
        if (i.customId === "button_ahead1") {
          await i.deferUpdate();
          i.editReply({ embeds: [regla2], components: [bregla2] });
        }
        //button reglas 2
        if (i.customId === "button_back2") {
          await i.deferUpdate();
          i.editReply({ embeds: [regla1], components: [bregla1] });
        }
        if (i.customId === "button_beginning2") {
          await i.deferUpdate();
          i.editReply({ embeds: [CommandsMenu], components: [ButtonRow] });
        }
        if (i.customId === "button_ahead2") {
          await i.deferUpdate();
          i.editReply({ embeds: [regla3], components: [bregla3] });
        }
        //button reglas 3
        if (i.customId === "button_back3") {
          await i.deferUpdate();
          i.editReply({ embeds: [regla2], components: [bregla2] });
        }

        if (i.customId === "button_beginning3") {
          await i.deferUpdate();
          i.editReply({ embeds: [CommandsMenu], components: [ButtonRow] });
        }
        if (i.customId === "button_ahead3") {
          await i.deferUpdate();
          i.editReply({ embeds: [regla4], components: [bregla4] });
        }
        //button reglas 4
        if (i.customId === "button_back4") {
          await i.deferUpdate();
          i.editReply({ embeds: [regla3], components: [bregla3] });
        }
        if (i.customId === "button_beginning4") {
          await i.deferUpdate();
          i.editReply({ embeds: [CommandsMenu], components: [ButtonRow] });
        }
        if (i.customId === "button_ahead4") {
          await i.deferUpdate();
          i.editReply({ embeds: [regla5], components: [bregla5] });
        }
        //button reglas 5
        if (i.customId === "button_back5") {
          await i.deferUpdate();
          i.editReply({ embeds: [regla4], components: [bregla4] });
        }
        if (i.customId === "button_beginning5") {
          await i.deferUpdate();
          i.editReply({ embeds: [CommandsMenu], components: [ButtonRow] });
        }
      });
    } catch (err) {
      console.log(err);
      // @ts-ignore
      await message.channel.send({ content: err.message });
    }
  },
};
