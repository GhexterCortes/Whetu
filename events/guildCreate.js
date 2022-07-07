const client = require("../index");
const { MessageEmbed } = require("discord.js");

client.on("guildCreate", async (guild) => {
  if (!guild) return;
  let channel = guild.channels.cache.find(
    (ch) =>
      ch.type === "GUILD_TEXT" &&
      ch.permissionsFor(guild.me).has("SEND_MESSAGES")
  );

  if (guild.me.permissions.has("USE_APPLICATION_COMMANDS")) {
    try {
      guild.commands
        .set(client.arrayOfCommands)
        .then((s) => {
          channel.send(`Successfully reloaded application (/) commands.`);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e.message);
    }
  } else {
    channel.send(
      `I don't have \`USE_APPLICATION_COMMANDS\`, so I can't create slash commands in your server, if you want to use me then re-invite me with the \`USE_APPLICATION_COMMANDS\` permissions.`
    );
  }
});

/**
Coded by: Real_IceyDev
License: Creative Commons Legal Code
Whetū, best music bot of 2022.
*/
