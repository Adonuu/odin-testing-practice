const createCalculator = require('./calculator');

const calculator = createCalculator();

test('Caculator Add Happy Path 1', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('Caculator Add Happy Path 2', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('Caculator Subtract Happy Path 1', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});

test('Caculator Subtract Happy Path 2', () => {
    expect(calculator.subtract(1, 1)).toBe(0);
});

test('Caculator Multiply Happy Path 1', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});

test('Caculator Multiply Happy Path 2', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});

test('Caculator Divide Happy Path 1', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
});

test('Caculator Divide Happy Path 2', () => {
    expect(calculator.divide(2, 2)).toBe(1);
});

test('Caculator Divide by 0', () => {
    expect(() => calculator.divide(1, 0)).toThrow('Cannot divide by zero');
});
