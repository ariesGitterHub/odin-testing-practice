// const capitalize = require("./assignment");
const { capitalize, reverseString, calculator } = require("./assignment");

test("capitalizes the f in foo", () => {
  expect(capitalize("foo")).toBe("Foo");
});

// const reverseString = require("./assignment");

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