const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const { MessageEmbed } = require("discord.js");
const emoji = require("../../settings/emoji.json");
const { duration } = require(`../../handlers/functions`);

module.exports = new Command({
  name: "uptime",
  description: `Get the bot's uptime!`,
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES"],
  category: "Information",
  cooldown: 10,

  run: async ({ client, interaction, args, prefix }) => {
    interaction.followUp(
      `\`\`\`yml\n Uptime :- ${duration(client.uptime)
        .map((t) => `${t}`)
        .join(" , ")} \`\`\``
    );
  },
});

/**
Coded by: Real_IceyDev
License: Creative Commons Legal Code
Whetū, best music bot of 2022.
*/
