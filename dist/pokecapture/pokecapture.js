import { createPokemon } from '../Classes/Pokemon.js';
export const pokeCapture = () => {
    const pokeminis = document.querySelectorAll('img.pokemini');
    pokeminis.forEach((element) => {
        element.addEventListener('click', async (event) => {
            console.log(event);
            const pokeName = element.textContent.trim();
            const pokeobject = await createPokemon(pokeName);
            pokemonUpload(pokeobject);
        });
    });
};
/*const pokemonUpload = (pokeObject:PokemonType) => {
    const data = new FormData();
    data.append('pokeObject', JSON.stringify(pokeObject));
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: data,
    });
};

const handleLiClick = () => {
    // Imprime "bobo" en la consola
    console.log('bobo');
  };
  
  // Agrega un listener de clic a cada componente li
  const lis = document.querySelectorAll('li');
  lis.forEach((li) => {
    li.addEventListener('click', handleLiClick);
  });*/
