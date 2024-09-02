const analyzeArray = require('./analyzeArray');

test('Analyze Array Happy Path', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({"average": 4, "min": 1, "max": 8, "length": 6});
});

test('Analyze Array Happy Path 2', () => {
    expect(analyzeArray([1, 14, 3, 4, 2, 6])).toEqual({"average": 5, "min": 1, "max": 14, "length": 6});
});