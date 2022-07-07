const { Command } = require("reconlx");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");
const emoji = require("../../settings/emoji.json");
const player = require("../../handlers/player");
const { check_dj  } = require('../../handlers/functions')                       
module.exports = new Command({
  name: "resume",
  description: `Resume the current paused song.`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  DJ : true,

  run: async ({ client, interaction, args, prefix }) => {
    let channel = interaction.member.voice.channel;
    let queue = await player.getQueue(interaction.guild.id);
    if (!channel) {
      return interaction.followUp(
        `** ${emoji.ERROR} You Need to Join Voice Channel first **`
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
    } else if (!queue) {
      return interaction.followUp(`** ${emoji.ERROR} Nothing Playing Now **`);
    }else if(check_dj(client,interaction.member , queue.songs[0])){
      return interaction.followUp(`** ${emoji.ERROR} You are Not DJ and also not Song Requester **`)
    }
     else if (!queue.paused) {
      return interaction.followUp(`** ${emoji.ERROR} Song is Already resumed **`);
    } else {
      await queue.resume();
      interaction.followUp(`** ${emoji.resume} Song resumed **`);
    }
  },
});

/**
Coded by: Real_IceyDev
License: Creative Commons Legal Code
Whetū, best music bot of 2022.
*/
