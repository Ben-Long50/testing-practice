import capitalize, {
  caluculator,
  reverseString,
  caesarCipher,
  analyzeArray,
} from './index.js';

// Tests for capitalize function
test('capitalize first character', () => {
  expect(capitalize('pauline')).toBe('Pauline');
});

test('first character is not letter', () => {
  expect(capitalize('!go')).toBe('!go');
});

// Tests for reverseString function
test('reverse string', () => {
  expect(reverseString('pauline')).toBe('eniluap');
});

// Tests for calculator object
test('add', () => {
  expect(caluculator.add(3, 2)).toBe(5);
});

test('subtract', () => {
  expect(caluculator.subtract(3, 2)).toBe(1);
});

test('multiply', () => {
  expect(caluculator.multiply(3, 2)).toBe(6);
});

test('divide', () => {
  expect(caluculator.divide(12, 2)).toBe(6);
});

// Tests for caesarCipher function
test('wrapping from z to a', () => {
  expect(caesarCipher('z', 5)).toBe('e');
});

test('keeping case', () => {
  expect(caesarCipher('Ben', 3)).toBe('Ehq');
});

test('punctuation', () => {
  expect(caesarCipher('death!', 5)).toBe('ijfym!');
});

// Tests for analyzeArray function
test('analyze array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
