import tmi from "tmi.js";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve("../.env") });

// Called every time a message comes in
const onMessageHandler = (target, context, msg, self) => {
  if (self) {
    return;
  } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === "!dice") {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
};

// Function called when the "dice" command is issued
const rollDice = () => {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
};

// Called every time the bot connects to Twitch chat
const onConnectedHandler = (addr, port) => {
  console.log(`* Connected to ${addr}:${port}`);
};

const chatBot = () => {
  // declare env variables
  const username = "andromedajazz";
  const channels = ["illuminatedspace"];

  // get secret
  const password = process.env.OAUTH_TOKEN;

  // create tmi client
  const tmiOptions = {
    identity: {
      username,
      password
    },
    channels
  };
  const tmiClient = new tmiClient.client(tmiOptions);

  // Register our event handlers (defined below)
  client.on("message", onMessageHandler);
  client.on("connected", onConnectedHandler);

  // connect to twitch
  tmiClient.connect();
};
