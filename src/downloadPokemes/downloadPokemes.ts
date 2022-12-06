export const downloadPokemes = (url: string) => {
    let pokeArray = [];
    return fetch(url)
        .then((response) => response.json())
        .catch((err) => console.log(err))
        .then((data) => {
            pokeArray = data.results;
            const slice = pokeArray.slice(0, 1154);
            const saveDataTLS = (slice: object) => {
                localStorage.setItem('pokeArray', JSON.stringify(slice));
            };
            saveDataTLS(slice);
            return slice;
        })
        .catch((err) => console.log(err));
};
