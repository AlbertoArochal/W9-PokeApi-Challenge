import { PokemonType } from '../types/types';

export class Pokemon implements PokemonType {
    id: number;
    name: string;
    url: string;
    height: number;
    weight: number;
    pictures: string;
    constructor(id: number) {
        this.id = id;
        this.name = '';
        this.url = '';
        this.height = 0;
        this.weight = 0;
        this.pictures = '';
        this.fill();
    }
    async fill() {
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${this.id}`
            );
            const pokemon = await response.json();
            this.name = pokemon.name;
            this.url = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
            this.height = pokemon.height;
            this.weight = pokemon.weight;
            this.pictures = pokemon.sprites.front_default;
        } catch (err) {
            console.log(err);
        }
    }
}

export const createPokemon = async (id: number) => {
    try {
        const pokemon = new Pokemon(id);
        await pokemon.fill();
        return pokemon;
    } catch (err) {
        console.log(err);
    }
};
