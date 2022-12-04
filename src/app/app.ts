import { downloadPokemes } from '../downloadPokemes/downloadPokemes.js';
import { pokemon } from '../types/types.js';
export const app = () => {
    downloadPokemes('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const pokeArray = JSON.parse(localStorage.getItem('pokeArray')!);
    let template = '';
    pokeArray.forEach((element: pokemon) => {
        template += `<li> Pokemon Name: ${element.name}; url = ${element.url} </li>`;
    });
    const domichi = document.querySelector('ul');
    domichi!.innerHTML = template;
};
app();
