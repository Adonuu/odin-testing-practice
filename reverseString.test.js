const reverseString = require('./reverseString');

test('Reverse String Happy Path', () => {
    expect(reverseString('test')).toBe('tset');
});

test('Reverse String Happy Path', () => {
    expect(reverseString('tester')).toBe('retset');
});