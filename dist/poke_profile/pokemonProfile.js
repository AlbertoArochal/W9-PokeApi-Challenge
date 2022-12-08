import { Componente } from '../Classes/Component.js';
class PokeProfile extends Componente {
    element;
    constructor(element) {
        super(element);
        this.element = element;
    }
    async showProfile() {
        const pokeObject = await JSON.parse(localStorage.getItem('pokeobject'));
        const template = `
        <div class = "pokefile" >
        <h1>Perfil de ${pokeObject.name}</h1>
          <ul>
            <li>Nombre: ${pokeObject.name}</li>
            <li>ID: ${pokeObject.id}</li>
            <li>URL: ${pokeObject.url}</li>
            <li>Altura: ${pokeObject.height}</li>
            <li>Peso: ${pokeObject.weight}</li>
            <li>
              <img src="${pokeObject.sprites}" alt="${pokeObject.name}">
            </li>
          </ul>
        </div>
      `;
        this.replaceElementWithTemplate(template);
    }
}
const pokeProfileElement = document.querySelector('.Profile__container');
const pokeProfile = new PokeProfile(pokeProfileElement);
pokeProfile.showProfile();
