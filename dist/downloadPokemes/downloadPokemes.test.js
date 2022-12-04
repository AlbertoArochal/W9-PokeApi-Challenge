test('downloadPokemes returns an array of 25 elements', () => {
    expect.assertions(1);
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    return downloadPokemes(url).then((result) => {
        expect(result.length).toBe(25);
        expect(typeof result).toBe('array');
    });
});
