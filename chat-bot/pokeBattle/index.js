import { pokebattle as pokebattleCommands } from "../commandMap";
import { illuminatedspace } from "../consts";

const gameInfo = {
  tallgrass: false
};

const canInvokeTallgrass = ({ username, mod }) =>
  username === illuminatedspace || mod;

const handleTallgrass = (args, say, context) => {
  if (!canInvokeTallgrass(context)) {
    say("This command can only be invoked by a mod");
    return null;
  }

  gameInfo.tallgrass = !gameInfo.tallgrass;
  const modeState = gameInfo.tallgrass ? "ENABLED" : "DISABLED";
  say(`TALLGRASS MODE ${modeState}`);
};

const pokebattle = ([commandName, ...args], say, context) => {
  switch (commandName) {
    case pokebattleCommands.tallgrass:
      handleTallgrass(args, say, context);
      break;

    default:
      console.log(`* Unknown command ${commandName}`);
  }
};

export default pokebattle;

/* Me
{ 'badge-info': { subscriber: '7' },
  badges: { broadcaster: '1', subscriber: '0', premium: '1' },
  color: '#8A2BE2',
  'display-name': 'illuminatedspace',
  emotes: null,
  flags: null,
  id: 'a1486ef8-5334-427e-9f74-76308b163ef2',       
  mod: false,
  'room-id': '62007729',
  subscriber: true,
  'tmi-sent-ts': '1573923235334',
  turbo: false,
  'user-id': '62007729',
  'user-type': null,
  'emotes-raw': null,
  'badge-info-raw': 'subscriber/7',
  'badges-raw': 'broadcaster/1,subscriber/0,premium/1',
  username: 'illuminatedspace',
  'message-type': 'chat' }
*/

/* Viewer
{ 'badge-info': null,
  badges: null,
  color: '#1E90FF',
  'display-name': 'kleinfreund',
  emotes: null,
  flags: null,
  id: '2a14803d-a475-4cf6-b73d-bb60d08f521a',       
  mod: false,
  'room-id': '62007729',
  subscriber: false,
  'tmi-sent-ts': '1573923228338',
  turbo: false,
  'user-id': '69999398',
  'user-type': null,
  'emotes-raw': null,
  'badge-info-raw': null,
  'badges-raw': null,
  username: 'kleinfreund',
  'message-type': 'chat' }
*/
