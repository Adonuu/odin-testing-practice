const caesarCipher = require('./caesarCipher');

test('Caesar Cipher Happy Path 1', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Caesar Cipher Happy Path 2', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});
