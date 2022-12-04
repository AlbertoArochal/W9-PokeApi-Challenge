export const downloadPokemes = (url) => {
    let pokeArray = [];
    return fetch(url)
        .then((response) => response.json())
        .catch((err) => console.log(err))
        .then((data) => {
        pokeArray = data.results;
        let start = 0;
        let end = 25;
        const slice = pokeArray.slice(start, end);
        const saveDataTLS = (slice) => {
            localStorage.setItem('pokeArray', JSON.stringify(slice));
        };
        saveDataTLS(slice);
        return slice;
    })
        .catch((err) => console.log(err));
};
