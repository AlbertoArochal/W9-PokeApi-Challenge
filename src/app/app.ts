import { downloadPokemes } from '../downloadPokemes/downloadPokemes.js';
import { pokemon } from '../types/types.js';

let start = 0;
let stop = 25;

const buttonP = document.querySelector('.prev-button');
const buttonN = document.querySelector('.next-button');

buttonP!.addEventListener('click', () => {
    start -= 25;
    stop -= 25;
    app();
});
buttonN!.addEventListener('click', () => {
    start += 25;
    stop += 25;
    app();
});

export const app = () => {
    downloadPokemes(
        'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    ).then(() => {
        document.querySelector('.counter')!.innerHTML = `${start} / 1000`;
        const pokeArray = JSON.parse(localStorage.getItem('pokeArray')!);
        let template = '';
        pokeArray.slice(start, stop).forEach((element: pokemon) => {
            template += `<li> ${
                element.name
            } <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokeArray.indexOf(element) + 1
            }.png"class = "pokemon-img">  </li>`;
        });
        const domichi = document.querySelector('ul');
        domichi!.innerHTML = template;
    });
};
app();
