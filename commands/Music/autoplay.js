const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const emoji = require("../../settings/emoji.json");
const player = require("../../handlers/player");
const { check_dj } = require("../../handlers/functions");

module.exports = new Command({
  // options
  name: "autoplay",
  description: `Toggle autoplay for the track.`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  DJ: true,
  // command start
  run: async ({ client, interaction, args, prefix }) => {
    // Code
    let channel = interaction.member.voice.channel;
    let queue = await player.getQueue(interaction.guild.id);
    if (!channel) {
      return interaction.followUp(
        `** ${emoji.ERROR} You must join a voice channel first! **`
      );
    } else if (
      interaction.guild.me.voice.channel &&
      !interaction.guild.me.voice.channel.equals(channel)
    ) {
      return interaction.followUp(
        `** ${emoji.ERROR} You need to join __my__ voice channel. **`
      );
    } else if (interaction.guild.me.voice.serverMute) {
      return interaction.followUp(
        `** ${emoji.ERROR} I am muted in the voice channel, please unmute me first! **`
      );
    } else if (!queue) {
      return interaction.followUp(`** ${emoji.ERROR} Nothing is playing right now! **`);
    } else if (check_dj(client, interaction.member, queue.songs[0])) {
      return interaction.followUp(
        `** ${emoji.ERROR} You don't have the DJ role! Or you aren't the song requester! **`
      );
    } else {
      let mode = await queue.toggleAutoplay();
      if (mode === true) {
        interaction.followUp(`** ${emoji.SUCCESS} AutoPlay enabled. **`);
      } else {
        interaction.followUp(`** ${emoji.ERROR} AutoPlay disabled **`);
      }
    }
  },
});

/**
Coded by: Real_IceyDev
License: Creative Commons Legal Code
Whetū, best music bot of 2022.
*/
