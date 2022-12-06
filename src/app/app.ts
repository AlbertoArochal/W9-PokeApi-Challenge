import { downloadPokemes } from '../downloadPokemes/downloadPokemes.js';
import { pokemon } from '../types/types.js';

let start = 0;
let stop = 27;

const prevButton = document.querySelector('.prev-button');
prevButton!.addEventListener('click', () => {
    if (start <= 0) {
        return;
    }
    start -= 27;
    stop -= 27;
    app();
});
const nextButton = document.querySelector('.next-button');
nextButton!.addEventListener('click', () => {
    start += 27;
    stop += 27;
    app();
});

export const app = () => {
    downloadPokemes(
        'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    ).then(() => {
        const pokeArray = JSON.parse(localStorage.getItem('pokeArray')!);
        document.querySelector(
            '.counter'
        )!.innerHTML = `${start} / ${pokeArray.length}`;

        let template = '';
        pokeArray.slice(start, stop).forEach((element: pokemon) => {
            template += `<li> <a href="./poke_profile.html" class="pokemon__profile"> ${
                element.name
            } </a> <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokeArray.indexOf(element) + 1
            }.png"class = "pokemon-img">  </li>`;
        });
        const domichi = document.querySelector('ul');
        domichi!.innerHTML = template;
    });
};

app();
