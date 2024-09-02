function caesarCipher(word, shift) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerAlphabet = alphabet.toLowerCase();

    return word.split('').map(char => {
        if (alphabet.includes(char.toUpperCase())) {
            let isUpperCase = alphabet.includes(char);
            let alphabetToUse = isUpperCase ? alphabet : lowerAlphabet;

            let originalIndex = alphabetToUse.indexOf(char);

            let newIndex = (originalIndex + shift) % 26;

            // handle wrapping around
            let normIndex = newIndex < 0 ? newIndex + 26 : newIndex;

            return alphabetToUse[normIndex];
        }

        return char;
    }).join('');
}

module.exports = caesarCipher;