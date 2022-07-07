const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const emoji = require("../../settings/emoji.json");
const player = require("../../handlers/player");

module.exports = new Command({
  name: "playskip",
  description: `Play/add a new song to the track/queue while skipping the current song.`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  options: [
    {
      name: "song",
      description: `Give song url/name to play. [Spotify & Soundcloud url's supported!]`,
      type: "STRING",
      required: true,
    },
  ],

  run: async ({ client, interaction, args, prefix }) => {
    let channel = interaction.member.voice.channel;
    if (!channel) {
      return interaction.followUp(
        `** ${emoji.ERROR} You Need to Join Voice Channel first **`
      );
    } else if (channel.userLimit != 0 && channel.full) {
      return interaction.followUp(
        `** ${emoji.ERROR} Your Voice Channel Full , i can't Join **`
      );
    } else if (
      interaction.guild.me.voice.channel &&
      !interaction.guild.me.voice.channel.equals(channel)
    ) {
      return interaction.followUp(
        `** ${emoji.ERROR} You Need to Join __My__ Voice Channel **`
      );
    } else if (interaction.guild.me.voice.serverMute) {
      return interaction.followUp(
        `** ${emoji.ERROR} I am Muted in Voice Channel , unmute me first **`
      );
    } else {
      let song = interaction.options.getString("song");
      player
        .play(channel, song, {
          member: interaction.member,
          textChannel: interaction.channel,
          skip : true
        })
        .then((m) => {
          interaction.followUp(`Added ${song} In Queue`);
        });
    }
  },
});

/**
Coded by: Real_IceyDev
License: Creative Commons Legal Code
Whetū, best music bot of 2022.
*/
