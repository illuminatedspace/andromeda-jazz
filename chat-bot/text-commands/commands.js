const commandNames = {
  charity: "charity",
  discord: "discord",
  donate: "donate",
  furret: "furret",
  genius: "genius",
};

const commands = [
  // {
  //   command: commandNames.charity,
  //   message:
  //     "All money made during this stream will go to Refugee and Immigrant Center for Education and Legal Services (RAICES), the largest provider of pro-bono legal services to immigrants in Texas. Every dollar raised will help RAICES provide lawyers for children, reunite families, provide social services to immigrants in need, resettle refugees, and more. https://tiltify.com/@illuminatedspace/12hourcharitystream"
  // },
  {
    command: commandNames.discord,
    message:
      "Join our Discord server for stream announcements, book club, knitting circle, watch party, and to vote on our next mission! https://discord.gg/U8amNwk",
  },
  // {
  //   command: commandNames.donate,
  //   message:
  //     "Donate to RAICES through Tiltify to get your donation alert on stream, pick your donation incentive, and vote for the cross stitch pattern. https://tiltify.com/@illuminatedspace/12hourcharitystream/donate"
  // },
  // turn furrent into overlay of the gif
  {
    command: commandNames.furret,
    message:
      "https://thumbs.gfycat.com/WellinformedDirectBorderterrier-mobile.mp4",
  },
];

const commandMap = new Map();

// seed the commands in the map
commands.forEach(({ command, message }) => {
  commandMap.set(command, message);
});

export default commandMap;
