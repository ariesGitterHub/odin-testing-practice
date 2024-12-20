// const capitalize = require("./assignment");
const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require("./assignment");

test("capitalizes the f in foo", () => {
  expect(capitalize("foo")).toBe("Foo");
});

test("reverses the letters in foo", () => {
  expect(reverseString("foo")).toBe("oof");
});

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("subtracts 1 + 2 to equal -1", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});
test("multiplies 1 + 2 to equal 2", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
test("divides 1 + 2 to equal 0.5", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("shift wrapping from z to a: ('xyz', 3) to return 'abc'", () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});
test("shift wrapping from Z to A: ('XYZ', 3) to return 'ABC'", () => {
  expect(caesarCipher('XYZ', 3)).toBe('ABC');
});

// I added negative shift numbers for fun.
test("reverse shift wrapping backwards/left to z from a: ('abc', 3) to return 'xyz'", () => {
  expect(caesarCipher('abc', -3)).toBe('xyz');
});
test("reverse shift wrapping backwards/left to Z from A: ('ABC, 3) to return 'XYZ'", () => {
  expect(caesarCipher('ABC', -3)).toBe('XYZ');
});
test("case preservation: ('HeLLo', 3) to return 'KhOOr'", () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});
test("punctuation test: ('Hello, World!', 3) to return 'Khoor, Zruog!'", () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('analyzeArray with positive integers', () => {
  const input = [1, 8, 3, 4, 2, 6];
  const result = analyzeArray(input);
  
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test('analyzeArray with negative integers', () => {
  const input = [-1, -8, -3, -4, -2, -6];
  const result = analyzeArray(input);
  
  expect(result).toEqual({
    average: -4,
    min: -8,
    max: -1,
    length: 6
  });
});

test('analyzeArray with mixed positive and negative integers', () => {
  const input = [1, -8, 3, -4, 2, 6];
  const result = analyzeArray(input);
  
  expect(result).toEqual({
    average: 0,
    min: -8,
    max: 6,
    length: 6
  });
});

test('analyzeArray with a single number', () => {
  const input = [5];
  const result = analyzeArray(input);
  
  expect(result).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1
  });
});

test('analyzeArray with an empty array', () => {
  const input = [];
  const result = analyzeArray(input);
  
  expect(result).toEqual({
    average: NaN,
    min: Infinity,
    max: -Infinity,
    length: 0
  });
});
