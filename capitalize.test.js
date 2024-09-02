const capitalize = require('./capitalize');

test('Capitalize Happy Path', () => {
    expect(capitalize('test')).toBe('Test');
});

test('Capitalize Happy Path 2', () => {
    expect(capitalize('tester')).toBe('Tester');
})