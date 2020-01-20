import moment from "moment";
import { commandPrefix } from "./consts";
import { commandMap } from "./commandMap";

const lastCalledMap = {};

export const canRunCommand = prefixedCommandName => {
  const commandName = prefixedCommandName.replace(commandPrefix, "");
  const lastCalled = lastCalledMap[commandName];

  console.log("JIGGILYPUFF", lastCalledMap);

  if (!lastCalled) {
    lastCalledMap[commandName] = moment().toISOString();
    return true;
  }

  const nowMoment = moment().utc();
  const lastCalledMoment = moment.utc(lastCalledMap);
  const secondsSinceLastCalled = moment
    .duration(nowMoment.diff(lastCalledMoment))
    .seconds();

  console.log("STARME", secondsSinceLastCalled);

  const commandEntry = commandMap[commandName];

  if (!commandEntry) {
    return false;
  }

  const timeout = commandEntry.timeout || 60;

  if (secondsSinceLastCalled > timeout) {
    console.log("can call again");
    lastCalledMap[commandName] = moment().toISOString();
    return true;
  }

  return false;
};
