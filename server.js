const http = require("http");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://${nameproject}.glitch.me/`);
}, 280000);

//pkg
const { Client, RichEmbed } = require("discord.js");
const {
  TOKEN,
  prefix,
  serverlogo,
  nameproject,
  colorbc,
  reactromm,
  reactro1mm,
  reactro2mm,
  CMD1
} = require("./config");
const client = new Client({ disableEveryone: true });
client.login(TOKEN);
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag} By 𝐋𝐮𝐜𝐢𝐟𝐞𝐫 𝐆𝐫𝐨𝐮𝐩!`);
});

client.on("guildCreate", guild => {
  var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(
      `BOT MASG v1 BY 𝐋𝐮𝐜𝐢𝐟𝐞𝐫 𝐆𝐫𝐨𝐮𝐩 | bot: I have joined the server | Thanks for your confidence in 𝐋𝐮𝐜𝐢𝐟𝐞𝐫 𝐆𝐫𝐨𝐮𝐩`
    );
  guild.owner.send(embed);
});

const developers = ["557657031713095705"];

client.on("message", message => {
  if (message.content.startsWith(prefix + "help")) {
    let embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setTitle("𝐋𝐮𝐜𝐢𝐟𝐞𝐫 𝐆𝐫𝐨𝐮𝐩")
      .setDescription(`\`My Prefix (${prefix})\``)
      .addField("cmd", `**brodcast**: \`${CMD1}\``)
      .setThumbnail(
        "https://www.emoji.co.uk/files/google-emojis/objects-android/7938-open-book.png"
      )
      .setFooter(
        "Made By 𝐋𝐮𝐜𝐢𝐟𝐞𝐫 𝐆𝐫𝐨𝐮𝐩",
        "https://cdn.discordapp.com/attachments/783462180690591745/790079873456144384/64767cdbb4dadba29d2f1b82bd701cd6.png"
      );

    message.channel.send(embed);
  }
});

client.on("message", async message => {
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (!message.channel.guild) return;
  var args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (command == CMD1) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
    }
    if (!args) {
      return message.reply("**يجب عليك كتابة الوصف**");
    }
    message.channel;
    let embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setTitle(`**Message: **${args}**`)
      .setDescription("▬▬▬▬▬▬▬▬▬▬ main ▬▬▬▬▬▬▬▬▬▬")
      .addField("Send to this channel ", "1️⃣", true)
      .addField("Send to this channel without embld", "2️⃣", true)
      .addField("Cancel the message", "❌", true)
      .setThumbnail(
        "https://www.emoji.co.uk/files/google-emojis/objects-android/7938-open-book.png"
      )
      .setFooter(
        "Made By 𝐋𝐮𝐜𝐢𝐟𝐞𝐫 𝐆𝐫𝐨𝐮𝐩",
        "https://cdn.discordapp.com/attachments/783462180690591745/790079873456144384/64767cdbb4dadba29d2f1b82bd701cd6.png"
      );

    message.channel.send(embed).then(m => {
      m.react("1️⃣")
        .then(() => m.react("2️⃣"))
        .then(() => m.react("❌"));

      let sendchanelFilter = (reaction, user) =>
        reaction.emoji.name == "1️⃣" && user.id == message.author.id;
      let sendchanesFilter = (reaction, user) =>
        reaction.emoji.name == "2️⃣" && user.id == message.author.id;
      let noFiler = (reaction, user) =>
        reaction.emoji.name == "❌" && user.id == message.author.id;

      let sendchanel = m.createReactionCollector(sendchanelFilter);
      let sendchanes = m.createReactionCollector(sendchanesFilter);
      let no = m.createReactionCollector(noFiler);

      sendchanel.on("collect", v => {
        m.delete();
        message.channel
          .sendMessage("", {
            embed: {
              title: `تم ارسال رسالتك`,
              description: ``,
              color: 3003135,
              footer: {}
            }
          })
          .then(msg => {
            msg.delete(10000);
          });
        if (!message.channel.guild)
          return message.channel
            .send("**هذا الأمر فقط للسيرفرات**")
            .then(m => m.delete(5000));
        if (!message.member.hasPermission("ADMINISTRATOR"))
          return message.channel.send(
            "**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`"
          );
        let say = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle("هاااام")
          .setDescription(args)
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/783462180690591745/790079873456144384/64767cdbb4dadba29d2f1b82bd701cd6.png"
          )
          .setFooter(
            "Made By 𝐋𝐮𝐜𝐢𝐟𝐞𝐫 𝐆𝐫𝐨𝐮𝐩",
            "https://cdn.discordapp.com/attachments/783462180690591745/790079873456144384/64767cdbb4dadba29d2f1b82bd701cd6.png"
          );

        message.channel.sendEmbed(say);
        message.delete();
      });
      sendchanes.on("collect", v => {
        m.delete();
        message.channel
          .sendMessage("", {
            embed: {
              title: `تم ارسال رسالتك`,
              description: ``,
              color: 3003135,
              footer: {}
            }
          })
          .then(msg => {
            msg.delete(10000);
          });
        if (!message.channel.guild)
          return message.channel
            .send("**هذا الأمر فقط للسيرفرات**")
            .then(m => m.delete(5000));
        if (!message.member.hasPermission("ADMINISTRATOR"))
          return message.channel.send(
            "**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`"
          );
        message.channel.send(args);
        message.delete();
      });
      no.on("collect", v => {
        m.delete();
        message.channel
          .sendMessage("", {
            embed: {
              title: `تم إلغاء رسالتك:x:`,
              description: ` محتوى الرسالة هو : **${args}**  :arrow_right: `,
              color: 16711680,
              footer: {}
            }
          })
          .then(msg => {
            msg.delete(10000);
          });
      });
    });
  }
});

console.log("Bot is Online ");
///
//الاكواد
