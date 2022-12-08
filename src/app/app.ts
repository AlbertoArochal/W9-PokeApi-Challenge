import { downloadPokemes } from '../downloadPokemes/downloadPokemes.js';
import { getPokePic } from '../getPokepic/getPokePic.js';
import { pokemon } from '../types/types.js';
import { createPokemon } from '../Classes/Pokemon.js';
import { pokeClick } from '../poke_profile/pokemonProfile.js';
import { Pokemon } from '../Classes/Pokemon.js';
export const app = async (start: number = 0, stop: number = 27) => {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    const handlePrevButtonClick = () => {
        if (start <= 0) {
            return;
        }
        start -= 27;
        stop -= 27;
        app(start, stop);
    };

    const handleNextButtonClick = () => {
        start += 27;
        stop += 27;
        app(start, stop);
    };

    prevButton!.addEventListener('click', handlePrevButtonClick);
    nextButton!.addEventListener('click', handleNextButtonClick);

    await downloadPokemes(
        'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    );
    const pokeArray = JSON.parse(localStorage.getItem('pokeArray')!);

    document.querySelector(
        '.counter'
    )!.innerHTML = `${start} / ${pokeArray.length}`;

    let template = '';
    pokeArray.slice(start, stop).forEach((element: pokemon) => {
        let pokePic: string;
        getPokePic(element.name)
            .then(() => {
                pokePic = localStorage.getItem('pokepic')!;
            })
            .then(() => {
                template += `<li> <a href="./poke_profile.html" class="pokemon__profile">   ${element.name} </a> <img src = ${pokePic}
            }.png"class = "pokemon-img">  </li>`;
                const domichi = document.querySelector('ul');
                domichi!.innerHTML = template;
                const pokemonProfile = document.querySelectorAll('li');
                pokemonProfile.forEach((element) => {
                    element.addEventListener('click', async () => {
                        const pokeName = element.textContent!.trim();
                        const pokeobject = await createPokemon(pokeName);
                        localStorage.setItem(
                            'pokeobject',
                            JSON.stringify(pokeobject)
                        );
                    });
                });
            });
    });
};

app();
