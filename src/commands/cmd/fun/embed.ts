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
  name: "embed",
  alias: [],
  async run(client: Client, message: Message, args: string[]) {
    


    //embed de si fue asectado 
     await message.channel.sendTyping();
let embedmencion = new MessageEmbed()

.setTitle("💎 | comando embed")

.setDescription("hola " + (`${message.author}`) + " deves escribir lo que quieres que se mande en el mensaje (embed) \n\n**ejemplo**" + "\n\n`+embed este es el titulo | esta es la descripción | letras pequeñas 💙 | https://cdn.discordapp.com/attachments/717821702180044862/729449197153157160/BARRA.gif |  https://i.imgur.com/3KuMHNA.jpg` \n\n **resultado**")
  .setThumbnail("https://i.imgur.com/3KuMHNA.jpg")
   .setImage("https://i.imgur.com/V9SI9Et.jpg")
.setTimestamp()
.setColor("RANDOM")


    let texto = args.join(' ');
if(!texto) return     message.channel.send({ embeds: [embedmencion] }).then((m) => setTimeout(() => m.delete(), 10000));
let opciones = texto.split(' | ')

const embed = new MessageEmbed()

.setTitle(opciones[0])
  .setDescription(`${message.author}`+" ** dice**\n"+opciones[1])
  .setColor("RANDOM")
  .setFooter(opciones[2])
  .setImage(opciones[3])
  .setThumbnail(opciones[4])
.setTimestamp() 


 


      message.channel.send({ embeds: [embed] });
    

  }

  }