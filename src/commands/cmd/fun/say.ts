import {
  Client,
  Message,
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  MessageSelectMenu,
} from "discord.js";

module.exports = {
  name: "say",
  alias: [],
  async run(client: Client, message: Message, args: string[]) {
    try {
      const txt = 
        args.slice(0).join(" ");
      
 await message.channel.sendTyping();
        let embed = new MessageEmbed() 
        .setTitle("💎 | Comando say")
        .setDescription(
            "perdon " +
              `${message.author}` +
              ", pero debes escribir lo que quieres que contenga el mensaje (say) \n\n**ejemplo**\n `+say hola gente 😆`\n\n**resultado**")
          
          .setColor("RANDOM")
          .setThumbnail("https://i.imgur.com/3KuMHNA.jpg")

          .setImage(
            "https://i.imgur.com/WtHGAgj.jpg"
          )
        .setFooter({
          text: `${client.user?.username}`,
          iconURL: `${client.user?.displayAvatarURL()}`,})
          .setTimestamp()
        
if(!txt) return     message.channel.send({ embeds: [embed] }).then((m) => setTimeout(() => m.delete(), 10000));

        await message.delete();
        await          message.channel.send(`${message.author}`+" **dice**\n\n"+ txt);
    } catch (err) {
      console.log(err);
      // @ts-ignore
      await message.reply({ content: err.message });
    }
  },
};
