const cloneArray = require("./cloneArray")

test("properly clones array", () => {
    const array = [1, 2, 3]
    // expect(cloneArray(array)).toBe(array)
    expect(cloneArray(array)).toEqual(array);
    expect(cloneArray(array)).not.toBe(array) // makes sure that the clone array is not just making a copy, but a clone.
})