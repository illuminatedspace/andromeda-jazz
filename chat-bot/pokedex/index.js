import _ from "lodash";
import pokedexPromise from "./pokedexPromise";
import { getCommandInfo, commands } from "../commandMap";

// TODO: no commas for 2 abilities
const transformAbilities = abilities => {
  const abilityNames = abilities.map(({ ability: { name } }) => name);

  const abilitiesLength = abilityNames.length;
  if (abilitiesLength > 1) {
    return abilityNames.reduce((acc, ability, index) => {
      let newAcc = acc;
      if (index === 0) {
        return acc.concat(ability);
      }
      newAcc = newAcc.concat(", ");
      if (index === abilitiesLength - 1) {
        console.log("ZAPADOS");
        newAcc = newAcc.concat("and ");
      }
      return newAcc.concat(ability);
    }, "");
  }

  const abilityString = abilityNames[0];
  return abilityString;
};

const transformTypes = types =>
  types.map(({ type: { name } }) => name).join("/");

const vowels = ["a", "e", "i", "o", "u"];
const getArticle = proceedingWord => {
  if (vowels.includes(proceedingWord[0])) {
    return "an";
  }

  return "a";
};

const formatPokemonInfo = rawPokemonInfo => {
  const {
    abilities: rawAbilities,
    name: rawName,
    types: rawTypes,
    weight,
    height
  } = rawPokemonInfo;

  const abilities = transformAbilities(rawAbilities);
  const types = transformTypes(rawTypes);
  const name = _.capitalize(rawName);
  const article = getArticle(types[0]);

  const sentences = [
    `${name} is ${article} ${types} type pokemon, with a height of ${height} decimeters and weight of ${weight} hectograms.`,
    `${name} can learn the abilities ${abilities}.`
  ];

  return sentences.join(" ");
};

const pokedex = async ([pokemonName], say) => {
  if (!pokemonName) {
    console.log("No pokemon given ¯\\_(ツ)_/¯");
    say(`You're missing an argument. ${getCommandInfo(commands.pokedex)}`);
    return null;
  }

  console.log("getting pokemon info", pokemonName);
  const pokemonInfo = await pokedexPromise.getPokemonByName(pokemonName);
  const formattedPokemonInfo = formatPokemonInfo(pokemonInfo);

  console.log("JIGGILYPUFF", formattedPokemonInfo);

  console.log("printing pokemon facts");
  say(`${formattedPokemonInfo}`);
};

export default pokedex;
