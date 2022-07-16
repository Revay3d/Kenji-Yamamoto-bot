import { Client, MessageEmbed } from "discord.js";

export default (client: Client) => {
  const Menu = new MessageEmbed()
    .setTitle("<a:dev:997201942377934949> | Menu Help")
    .setDescription(
      "\n\nNota: en este menu estan mis comandos que actualmente estan disponibles. "
    )
    .addField(
      "Categorias:",
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

  return Menu;
};
