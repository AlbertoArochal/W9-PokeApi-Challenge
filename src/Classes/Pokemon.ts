import { PokemonType } from '../types/types.js';
import { getPokePic } from '../getPokepic/getPokePic.js';

export class Pokemon implements PokemonType {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: string;
    constructor(
        name: string,
        id: number,
        height: number,
        weight: number,
        sprites: string
    ) {
        this.name = name;
        this.id = id;
        this.height = height;
        this.weight = weight;
        this.sprites = sprites;
    }
}
export const createPokemon = async (name: string) => {
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name}`
        );

        if (response.ok) {
            const data = await response.json();

            const pokemon = {
                name: data.name,
                id: data.id,
                height: data.height,
                weight: data.weight,
                sprites: data.sprites.front_default,
            };
            const pokeInstance = new Pokemon(
                pokemon.name,
                pokemon.id,
                pokemon.height,
                pokemon.weight,
                pokemon.sprites
            );

            return pokeInstance;
        } else {
            throw new Error(
                `Error al obtener datos del Pokémon: ${response.status}`
            );
        }
    } catch (err) {
        console.log(err);
    }
};
