const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const emoji = require("../../settings/emoji.json");
const { MessageEmbed } = require("discord.js");

module.exports = new Command({
  name: "dj",
  description: `Setup the DJ system in your server!`,
  userPermissions: ["MANAGE_ROLES"],
  botPermissions: ["MANAGE_ROLES"],
  category: "Config",
  cooldown: 10,
  options: [
    {
      name: "set",
      description: `Set the DJ role within your server.`,
      type: "SUB_COMMAND",
      options: [
        {
          name: "role",
          description: `Mention the role you want to set as the DJ role.`,
          type: "ROLE",
          required: true,
        },
      ],
    },
    {
      name: "remove",
      description: `Remove the set DJ role within your server.`,
      type: "SUB_COMMAND",
      options: [
        {
          name: "role",
          description: `Mention the current DJ role.`,
          type: "ROLE",
          required: true,
        },
      ],
    },
    {
      name: "show",
      description: `Show all the DJ roles in your server.`,
      type: "SUB_COMMAND",
    },
    {
      name: "djonly",
      description: `Make the bot DJ role only.`,
      type: "SUB_COMMAND",
    },
    {
      name: "reset",
      description: `Reset all DJ configurations in your server.`,
      type: "SUB_COMMAND",
    },
  ],

  run: async ({ client, interaction, args, prefix }) => {
    let subcmd = interaction.options.getSubcommand();
    switch (subcmd) {
      case "set":
        {
          let role = interaction.options.getRole("role");
          client.settings.push(interaction.guild.id, role.id, "djroles");
          interaction.followUp(
            `>>> ** ${emoji.SUCCESS} Successfully added ${role} as a DJ role!**`
          );
        }
        break;
      case "remove":
        {
          let role = interaction.options.getRole("role");
          client.settings.remove(interaction.guild.id, role.id, "djroles");
          interaction.followUp(
            `>>> ** ${emoji.SUCCESS} Successfully added ${role} as a DJ role **`
          );
        }
        break;
      case "show":
        {
          let djroleids = client.settings.get(interaction.guild.id, "djroles");
          if (djroleids === []) {
            return interaction.followUp(`>>> ** No DJ role setup yet! **`);
          } else {
            let data = [...djroleids];
            let string = await data.map((roleid, index) => {
              let role = interaction.guild.roles.cache.get(roleid);
              return `${role}`;
            });
            interaction.followUp({
              embeds: [
                new MessageEmbed()
                  .setColor(ee.color)
                  .setTitle(`** All DJ roles for ${interaction.guild.name} **`)
                  .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
                  .setDescription(
                    `>>> ${
                      string.join(" ' ").substr(0, 3000) ||
                      `** No DJ role setup yet! **`
                    }`
                  )
                  .setFooter({ text: ee.footertext, iconURL: ee.footericon }),
              ],
            });
          }
        }
        break;
      case "djonly":
        {
          let data = await client.settings.get(interaction.guild.id, "djonly");
          if (data === false) {
            client.settings.set(interaction.guild.id, true, "djonly");
            return interaction.followUp(
              `** ${emoji.SUCCESS} DJ only enabled **`
            );
          } else if (data === true) {
            client.settings.set(interaction.guild.id, false, "djonly");
            return interaction.followUp(
              `** ${emoji.SUCCESS} DJ only disabled **`
            );
          }
        }
        break;
      case "reset":
        {
          let data = await client.settings.get(interaction.guild.id, "djroles");
          client.settings.delete(interaction.guild.id, "djroles");
          if (data === []) {
            interaction.followUp(`** ${emoji.ERROR} Cannot find any DJ roles.. **`);
          } else {
            interaction.followUp(
              `** ${emoji.SUCCESS} Successfully reset all DJ roles/all DJ configurations. **`
            );
          }
        }
        break;
      default:
        break;
    }
  },
});
