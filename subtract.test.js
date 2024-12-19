const subtract = require("./subtract");

test.skip("subtracts 1 - 2 to equal -1", () => {
  expect(subtract(1, 2)).toBe(-1);
});
