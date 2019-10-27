import pokedex from "./pokedex";
import { commandPrefix } from "./consts";

export const commands = {
  pokedex: "pokedex"
};

export const commandMap = {
  [commands.pokedex]: {
    name: commands.pokedex,
    description: "returns information about a given pokemon",
    args: { pokemonName: { description: "Any pokemon name", optional: false } },
    usage: `${commandPrefix}pokedex <pokemonName>`
  }
};

const argWrappers = { optional: ["[", "]"], required: ["<", ">"] };

const transformArgumentDescriptions = args =>
  Object.keys(args)
    .map(arg => {
      const { description, optional } = args[arg];
      const argWrapper = optional ? argWrappers.optional : argWrappers.required;
      return `${argWrapper[0]}${arg}${argWrapper[1]} ${description}`;
    })
    .join(", ");

export const getCommandInfo = commandName => {
  const { description, usage, args } = commandMap[commandName];

  const argsWithDescriptions = transformArgumentDescriptions(args);

  return `The ${commandName} command ${description}. Usage syntax: \`${usage}\`. ${argsWithDescriptions}`;
};
