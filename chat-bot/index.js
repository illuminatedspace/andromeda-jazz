import tmi from "tmi.js";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve("../.env") });

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
const tmiClient = new tmi.client(tmiOptions);

// Called every time a message comes in
const onMessageHandler = (target, context, message, self) => {
  if (self) {
    return;
  } // Ignore messages from the bot

  // Remove whitespace from chat message
  const [commandName, ...args] = message.trim().split(" ");

  // If the command is known, let's execute it
  if (commandName === "!dice") {
    const num = rollDice();
    tmiClient.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } else if (commandName === "!pokedex") {
    tmiClient.say(target, `${args}`);
    console.log(args);
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

// Register our event handlers (defined below)
tmiClient.on("message", onMessageHandler);
tmiClient.on("connected", onConnectedHandler);

// connect to twitch
tmiClient.connect();
