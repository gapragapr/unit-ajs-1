import checkHP from "../main.js";

test('check function', () => {
    const testHeroes = [
        {name: 'Маг', health: 75, expected: 'healthy'},
        {name: 'Маг', health: 51, expected: 'healthy'},
        {name: 'Маг', health: 15, expected: 'wounded'},
        {name: 'Маг', health: 50, expected: 'wounded'},
        {name: 'Маг', health: 7,  expected: 'critical'},
        {name: 'Маг', health: 0,  expected: 'critical'},
    ];

    testHeroes.forEach(item => {
        const expected = item.expected;
        const received = checkHP(item)

        expect(received).toBe(expected);
    })

    // expect(received).toBe(expected)
})