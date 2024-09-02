const caesarCipher = require('./caesarCipher');

test('Caesar Cipher Happy Path', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Caesar Cipher Happy Path', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});
