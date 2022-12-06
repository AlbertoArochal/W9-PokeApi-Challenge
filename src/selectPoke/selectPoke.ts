const selectPoke = () => {
    const pokelinks = document.querySelectorAll('./pokemon__profile');
    pokelinks.forEach((poke) => {
        const pokeSelected: = '';
        poke.addEventListener('click', () => {
            const pokeName = poke.textContent;
            const url:string = `https://pokeapi.co/api/v2/pokemon/${pokeName}` 
        });
    });
};
