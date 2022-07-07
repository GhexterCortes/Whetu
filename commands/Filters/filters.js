const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const emoji = require("../../settings/emoji.json");
const config = require("../../settings/config.json");
const { check_dj } = require("../../handlers/functions");
const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const { default: DisTube, Queue } = require("distube");
const player = require("../../handlers/player");

module.exports = new Command({
  name: "filter",
  description: `Add filters to the current track!`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Filters",
  cooldown: 10,
  options: [
    {
      name: "8d",
      description: `Add 8D filter in Song`,
      type: "SUB_COMMAND",
    },
    {
      name: "bassboost",
      description: `Add Bassboost filter in Song`,
      type: "SUB_COMMAND",
    },
    {
      name: "clear",
      description: `Clear all filters in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "earrape",
      description: `Add earrape filter in track`,
      type: "SUB_COMMAND",
    },
    {
      name: "flanger",
      description: `Add flanger filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "gate",
      description: `Add gate filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "haas",
      description: `Add haas filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "heavybass",
      description: `Add heavybass filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "karaoke",
      description: `Add karaoke filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "lightbass",
      description: `Add lightbass filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "mcompad",
      description: `Add mcompad filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "nightcore",
      description: `Add nightcore filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "phaser",
      description: `Add phaser filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "pulsator",
      description: `Add pulsator filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "purebass",
      description: `Add purebass filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "reverse",
      description: `Add reverse filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "subboost",
      description: `Add subboost filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "surround",
      description: `Add surround filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "treble",
      description: `Add treble filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "tremolo",
      description: `Add tremolo filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "vaporware",
      description: `Add vaporware filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "vibrato",
      description: `Add vibrato filter in the current track.`,
      type: "SUB_COMMAND",
    },
    {
      name: "custombassboost",
      description: `Add custombassboost filter in the current track.`,
      type: "SUB_COMMAND",
      options: [
        {
          name: "amount",
          description: "give bass amount between 0 -20",
          type: "NUMBER",
          required: true,
        },
      ],
    },
    {
      name: "customspeed",
      description: `Add customspeed filter in the current track.`,
      type: "SUB_COMMAND",
      options: [
        {
          name: "amount",
          description: "give bass amount between 0 - 2",
          type: "NUMBER",
          required: true,
        },
      ],
    },
  ],

  run: async ({ client, interaction, args, prefix }) => {
    const [subcmd] = args;
    switch (subcmd) {
      case "8d":
        {
          setFilter(client, interaction, player, "8d");
        }
        break;
      case "bassboost":
        {
          setFilter(client, interaction, player, "bassboost");
        }
        break;
      case "clear":
        {
          setFilter(client, interaction, player, false);
        }
        break;
      case "earrape":
        {
          setFilter(client, interaction, player, "earrape");
        }
        break;
      case "flanger":
        {
          setFilter(client, interaction, player, "flanger");
        }
        break;
      case "gate":
        {
          setFilter(client, interaction, player, "gate");
        }
        break;
      case "hass":
        {
          setFilter(client, interaction, player, "hass");
        }
        break;
      case "heavybass":
        {
          setFilter(client, interaction, player, "heavybass");
        }
        break;
      case "karaoke":
        {
          setFilter(client, interaction, player, "karaoke");
        }
        break;
      case "lightbass":
        {
          setFilter(client, interaction, player, "lightbass");
        }
        break;
      case "mcompad":
        {
          setFilter(client, interaction, player, "mcompad");
        }
        break;
      case "nightcore":
        {
          setFilter(client, interaction, player, "nightcore");
        }
        break;
      case "phaser":
        {
          setFilter(client, interaction, player, "phaser");
        }
        break;
      case "pulsator":
        {
          setFilter(client, interaction, player, "pulsator");
        }
        break;
      case "purebass":
        {
          setFilter(client, interaction, player, "purebass");
        }
        break;
      case "reverse":
        {
          setFilter(client, interaction, player, "reverse");
        }
        break;
      case "subboost":
        {
          setFilter(client, interaction, player, "subboost");
        }
        break;
      case "surround":
        {
          setFilter(client, interaction, player, "surround");
        }
        break;
      case "treble":
        {
          setFilter(client, interaction, player, "treble");
        }
        break;
      case "tremolo":
        {
          setFilter(client, interaction, player, "tremolo");
        }
        break;
      case "vaporware":
        {
          setFilter(client, interaction, player, "vaporware");
        }
        break;
      case "vibrato":
        {
          setFilter(client, interaction, player, "vibrato");
        }
        break;
      case "custombassboost":
        {
          let channel = interaction.member.voice.channel;
          let bass = interaction.options.getNumber("amount");
          let queue = player.getQueue(interaction.guild.id);
          if (!channel) {
            return client.embed(
              interaction,
              `** You need to join a voice channel first! **`
            );
          } else if (
            interaction.guild.me.voice.channel &&
            !interaction.guild.me.voice.channel.equals(channel)
          ) {
            return client.embed(
              interaction,
              `** You must join __my found channel__ first! first! **`
            );
          } else if (!queue.playing) {
            return client.embed(
              interaction,
              `** ${emoji.msg.ERROR} Nothing is playing right now! **`
            );
          } else if (bass > 20 || bass < 0) {
            return client.embed(
              interaction,
              ` ** ${emoji.msg.ERROR} Custom bass-boost limit is 0 - 20 **`
            );
          } else {
            let fns = `bass=g=${bass},dynaudnorm=f=200`;
            setFilter(client, interaction, player, fns);
          }
        }
        break;
      case "customspeed":
        {
          let channel = interaction.member.voice.channel;
          let bass = interaction.options.getNumber("amount");
          let queue = player.getQueue(interaction.guild.id);
          if (!channel) {
            return client.embed(
              interaction,
              `** You must join a voice channel first! **`
            );
          } else if (
            interaction.guild.me.voice.channel &&
            !interaction.guild.me.voice.channel.equals(channel)
          ) {
            return client.embed(
              interaction,
              `** You must join __my found channel__ first! **`
            );
          } else if (!queue.playing) {
            return client.embed(
              interaction,
              `** ${emoji.msg.ERROR} Nothing is currently playing! **`
            );
          } else if (bass <= 0 || bass > 2) {
            return client.embed(
              interaction,
              ` ** ${emoji.msg.ERROR} Custom BassBoost Limit is 0 - 2 **`
            );
          } else {
            let fns = `atempo=${bass}`;
            setFilter(client, interaction, player, fns);
          }
        }
        break;
      default:
        break;
    }
  },
});

async function setFilter(client, interaction, player, filter) {
  let channel = interaction.member.voice.channel;
  let queue = player.getQueue(interaction.guild.id);
  if (!channel) {
    return client.embed(interaction, `** You must join a voice channel first! **`);
  } else if (
    interaction.guild.me.voice.channel &&
    !interaction.guild.me.voice.channel.equals(channel)
  ) {
    return client.embed(
      interaction,
      `** You must join __my found channel__ first! **`
    );
  } else if (!queue) {
    return client.embed(
      interaction,
      `** ${emoji.ERROR} Nothing is currently playing! **`
    );
  } else if (check_dj(client, interaction.member, queue.songs[0])) {
    return interaction.followUp(
      `** ${emoji.ERROR} You don\'t have the DJ role, you're also not the song requester! **`
    );
  } else {
    await queue.setFilter(filter);
    return client.embed(
      interaction,
      `** ${emoji.SUCCESS} Added \`${filter}\` filter in the current track! **`
    );
  }
}

/**
Coded by: Real_IceyDev
License: 
Whetū, best music bot of 2022.
*/
