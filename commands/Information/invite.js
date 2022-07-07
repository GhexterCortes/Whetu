const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const { MessageEmbed } = require("discord.js");
const emoji = require('../../settings/emoji.json')

module.exports = new Command({
  // options
  name: "invite",
  description: `Get the bot's invite link.`,
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
        .setTitle(`<a:blobjoin:993676536156786699> Invite Link`)
        .setDescription(`>>> **[Click me to invite!](https://discord.com/api/oauth2/authorize?client_id=989152122656399453&permissions=8&scope=bot+applications.commands)**`)
        .setFooter({text : ee.footertext , iconURL : ee.footericon})
    ]})
  },
});

/**
Coded by: Real_IceyDev
License: 
Whetū, best music bot of 2022.
*/
