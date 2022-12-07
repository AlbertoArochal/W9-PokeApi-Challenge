export type pokemon = {
    name: string;
    url: string;
};

export interface PokemonType {
    id: number;
    name: string;
    url: string;
    height: number;
    weight: number;
    pictures: string;
    fill: () => Promise<void>;
}
