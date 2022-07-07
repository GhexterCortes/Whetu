const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const { MessageEmbed } = require("discord.js");
const emoji = require('../../settings/emoji.json')

module.exports = new Command({
  name: "vote",
  description: `Get the links to upvote the bot! [2 bot lists]`,
  userPermissions: ['SEND_MESSAGES'],
  botPermissions: ['SEND_MESSAGES'],
  category: "Information",
  cooldown: 10,

  run: async ({ client, interaction, args, prefix }) => {
    interaction.followUp({embeds : [
        new MessageEmbed()
        .setColor(ee.color)
        .setTitle(` :partying_face: Link to vote **Cool Music**`)
        .setDescription(`[Click me](https://top.gg/bot/989152122656399453/vote) to vote on [Top.gg](https://top.gg/bot/989152122656399453/vote)\n[Click me](https://discordbotlist.com/bots/whetu/upvote) to vote on [discordbotlist](https://discordbotlist.com/bots/whetu/upvote)\n\n💝 Thank you for voting!`)
        .setFooter({text : ee.footertext , iconURL : ee.footericon})
    ]})
  },
});

/**
Coded by: Real_IceyDev
License: Creative Commons Legal Code
Whetū, best music bot of 2022.
*/
