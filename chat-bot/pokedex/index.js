const pokedex = ([pokemonName], say) => {
  // handle no pokemon name
  // call pokeapi to get poke facts
  console.log("saying pokemon name");
  say(`${pokemonName}`);
};

export default pokedex;
