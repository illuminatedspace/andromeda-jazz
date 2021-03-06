import pokedex from "./pokedex";
import { commandPrefix } from "./consts";

export const commands = {
  pokedex: "pokedex",
  pokebattle: "pokebattle",
  genius: "genius",
  scare: "scare",
};

export const pokebattle = {
  tallgrass: "tallgrass"
};

export const commandMap = {
  [commands.pokedex]: {
    name: commands.pokedex,
    description: "returns information about a given pokemon",
    args: { pokemonName: { description: "Any pokemon name", optional: false } },
    usage: `${commandPrefix}${commands.pokedex} <pokemonName>`,
  },
  [commands.pokebattle]: {
    name: commands.pokebattle,
    description: "Prefix for any pokebattle command",
    args: {
      pokemonName: { description: "Enter tallgrass mode", optional: true },
      abilityName: {
        description: "One of the availble ability names",
        optional: true,
      },
    },
    usage: `${commandPrefix}${commands.pokebattle} tallgrass | <abilityName>`,
  },
  [commands.genius]: {
    name: commands.genius,
    description: "Tells you who the current certified geinus is.",
    args: {
      username: { description: "User to set as genius" },
    },
    usage: `${commandPrefix}${commands.genius}`,
  },
  [commands.scare]: {
    name: commands.scare,
    description: "Tells you how many times Liz has been scared this stream or lets you modify the count.",
    args: {
      add: { description: "Add a number to the count", optional: true },
      minus: { description: "Subtract a number from the count", optional: true },
      number: { description: "The number to modify the count", optional: true },
    },
    usage: `${commandPrefix}${commands.scare} add | minus <number>`,
  },
};

const argWrappers = { optional: ["[", "]"], required: ["<", ">"] };

const transformArgumentDescriptions = (args) =>
  Object.keys(args)
    .map((arg) => {
      const { description, optional } = args[arg];
      const argWrapper = optional ? argWrappers.optional : argWrappers.required;
      return `${argWrapper[0]}${arg}${argWrapper[1]} ${description}`;
    })
    .join(", ");

export const getCommandInfo = (commandName) => {
  const { description, usage, args } = commandMap[commandName];

  const argsWithDescriptions = transformArgumentDescriptions(args);

  return `The ${commandName} command ${description}. Usage syntax: \`${usage}\`. ${argsWithDescriptions}`;
};
