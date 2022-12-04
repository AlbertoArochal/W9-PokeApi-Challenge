import { downloadPokemes } from '../downloadPokemes/downloadPokemes.js';
export const app = () => {
    downloadPokemes(
        'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    ).then(() => {
        const pokeArray = JSON.parse(localStorage.getItem('pokeArray'));
        let template = '';
        pokeArray.forEach((element) => {
            template += `<li> Pokemon Name: ${
                element.name
            } <img src = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokeArray.indexOf(
                element
            )}.svg"class = "pokemon-img">  </li>`;
        });
        const domichi = document.querySelector('ul');
        domichi.innerHTML = template;
    });
};
app();
