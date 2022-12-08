import { Componente } from '../Classes/Component';
class PokeProfile extends Componente {
    element;
    constructor(element) {
        super(element);
        this.element = element;
    }
    async showProfile() {
        const pokeObject = await JSON.parse(localStorage.getItem('pokeobject'));
        console.log(pokeObject);
    }
}
pokeProfile();
