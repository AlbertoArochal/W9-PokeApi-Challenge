import { createPokemon } from '../Classes/Pokemon.js';
export const pokeClick = async (event) => {
    const pokeName = event.target.innerHTML;
    const pokemon = await createPokemon(pokeName);
};
