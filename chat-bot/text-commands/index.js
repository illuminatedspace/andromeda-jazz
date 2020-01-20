import { commandPrefix } from "../consts";
import commandMap from "./commands";

const getUnprefixedCommand = commandWithPrefix =>
  commandWithPrefix.replace(commandPrefix, "");

export const isTextCommand = commandWithPrefix => {
  const command = getUnprefixedCommand(commandWithPrefix);
  return commandMap.has(command);
};

export const sayTextCommand = (commandWithPrefix, say) => {
  const command = getUnprefixedCommand(commandWithPrefix);
  const text = commandMap.get(command);
  say(text);
};
