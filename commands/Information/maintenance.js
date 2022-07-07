const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const { MessageEmbed } = require("discord.js");
const emoji = require('../../settings/emoji.json')

module.exports = new Command({
  // options
  name: "maintenance",
  description: `Get the maintenance status of the bot.`,
  userPermissions: ['SEND_MESSAGES'],
  botPermissions: ['SEND_MESSAGES'],
  category: "Information",
  cooldown: 10,
  // command start
  run: async ({ client, interaction, args, prefix }) => {
    // Code
    interaction.followUp({embeds : [
        new MessageEmbed()
        .setColor(ee.color)
        .setTitle(`<a:arrow:993675427929403402>  Maintenance status of **Whetū**`)
        .setDescription(`Upcoming maintenance scheduled:\n
1. Bot revamp 7/7/2022.`)
        .setFooter({text : ee.footertext , iconURL : ee.footericon})
    ]})
  },
});

/**
Coded by: Real_IceyDev
License: 
Whetū, best music bot of 2022.
*/
