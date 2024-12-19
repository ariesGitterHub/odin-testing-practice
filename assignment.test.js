// const capitalize = require("./assignment");
const { capitalize, reverseString } = require("./assignment");

test("capitalizes the f in foo", () => {
  expect(capitalize("foo")).toBe("Foo");
});

// const reverseString = require("./assignment");

test("reverses the letters in foo", () => {
  expect(reverseString("foo")).toBe("oof");
});