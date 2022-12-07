import { createPokemon } from '../Classes/Pokemon.js';
export const pokeClick = async (event) => {
    try {
        const name = event.target.textContent;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemon = await response.json();
        const id = pokemon.id;
        const instance = await createPokemon(id);
        // Save the new item to the local server instead of local storage
        const postResponse = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ instance }),
        });
        return postResponse;
    }
    catch (err) {
        console.log(err);
    }
};
