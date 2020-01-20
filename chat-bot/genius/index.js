import moment from "moment";
import { illuminatedspace } from "../consts";

const messageArray = [
  name => `Look out everyone. ${name} is the Certified Genius.`,
  name =>
    `I used to be the Certified Genius like ${name}, but then I took an arrow to the knee.`,
  name => `${name} is the Certified Cenius. All hail ${name}.`
];

const getSetCertifiedGeniusMessage = name => {
  return messageArray[Math.floor(Math.random() * messageArray.length)](name);
};

const certifiedGenius = {
  name: null,
  createdAt: null
};

const setCertifiedGenius = name => {
  certifiedGenius.name = name;
  certifiedGenius.createdAt = moment().toISOString();
};

const getCurrentGeniusMessage = () => {
  const time = moment(certifiedGenius.createdAt).fromNow();
  return `${certifiedGenius.name} was made the Certified Genius ${time}`;
};

const handleGeniusCommand = ([name], say, context) => {
  const { username, mod } = context;

  if (name) {
    if (username === illuminatedspace || mod) {
      setCertifiedGenius(name);
      say(getSetCertifiedGeniusMessage(name));
    } else {
      say("Only mods can set the Certified Genius!");
    }
  } else {
    if (!certifiedGenius.name) {
      say("There isn't a Certified Genius yet!");
    } else {
      const currentCertifiedGeniusMessage = getCurrentGeniusMessage(name);

      say(currentCertifiedGeniusMessage);
    }
  }
};

export default handleGeniusCommand;
