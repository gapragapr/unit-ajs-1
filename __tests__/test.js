import checkHP from "..";

test ('check ch value', () => {
    const hero = {name: '...', health: 1};

    const expected = 'critical';
    const received = checkHP(hero);

    expect(received).toBe(expected)
})