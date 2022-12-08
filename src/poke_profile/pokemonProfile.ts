import { Componente } from '../Classes/Component';

class PokeProfile extends Componente {
    constructor(public element: HTMLElement) {
        super(element);
    }
    async showProfile() {
        const pokeObject = await JSON.parse(
            localStorage.getItem('pokeobject')!
        );
        console.log(pokeObject);
    }
}
pokeProfile();
