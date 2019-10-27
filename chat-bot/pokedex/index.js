import { getCommandInfo, commands } from "../commandMap";

const pokedex = ([pokemonName], say) => {
  if (!pokemonName) {
    console.log("No pokemon given ¯_(ツ)_/¯");
    say(`You're missing an argument. ${getCommandInfo(commands.pokedex)}`);
    return null;
  }
  // call pokeapi to get poke facts
  console.log("saying pokemon name");
  say(`${pokemonName}`);
};

export default pokedex;
