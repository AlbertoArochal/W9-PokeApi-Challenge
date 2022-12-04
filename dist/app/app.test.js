"use strict";
test('app adds 25 li elements to the ul element', () => {
    expect.assertions(1);
    const mockLocalStorage = {
        getItem: jest.fn(() => JSON.stringify([
            {
                name: 'pikachu',
                url: 'https://pokeapi.co/api/v2/pokemon/25',
            },
        ])),
    };
    const mockDocument = {
        querySelector: jest.fn(() => ({
            innerHTML: '',
        })),
    };
    app(mockLocalStorage, mockDocument);
    expect(mockDocument.querySelector().innerHTML).toBe('<li> Pokemon Name: pikachu; url = https://pokeapi.co/api/v2/pokemon/25 </li>');
});
