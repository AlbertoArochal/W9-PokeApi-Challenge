export const getPokePic = (pokemon: string) => {
    let pokePic = '';
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .catch((err) => console.log(err))
        .then((data) => {
            pokePic = data.sprites.front_default;
            const savePicTLS = (pokePic: string) => {
                localStorage.setItem('pokepic', pokePic);
            };
            savePicTLS(pokePic);
            return pokePic;
        })
        .catch((err) => console.log(err));
};
