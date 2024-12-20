// This file was formerly named assignment.js

// 1. A capitalize function that takes a string and returns it with the first character capitalized.

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// Also: const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');
// module.exports = capitalize;

// 2. A reverseString function that takes a string and returns it reversed.
function reverseString(string) {
  return string.split("").reverse().join("");
}

// 3. A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation. USE AN OBJECT LITERAL!!!
const calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
};

// console.log(calculator.add(3, 4))

// 4. A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works.

// - Don’t forget to test wrapping from z to a. For example, caesarCipher('xyz', 3) should return 'abc'.

// - Don’t forget to test case preservation. The shifted lettercase should follow the original lettercase. For example, caesarCipher('HeLLo', 3) should return 'KhOOr'.

// - Don’t forget to test punctuation. Punctuations, spaces, and other non-alphabetical characters should remain unchanged. For example, caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'.

// - For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.
// let butt = "Butt"
// console.log(butt.charAt(0));
// console.log(butt.charCodeAt(0));
// let char0 = String.fromCharCode(66)
// console.log(char0)

// NOTE: I added negative shift numbers for fun.

function caesarCipher(string, shift) {
  const startLower = "a".charCodeAt(0); // 97
  const endLower = "z".charCodeAt(0); // 122
  const startUpper = "A".charCodeAt(0); // 65
  const endUpper = "Z".charCodeAt(0); // 90
  const shiftNum = 26 - Math.abs(shift);
  let result = [];

  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    let targetLetterNum = string.charCodeAt(i); 

    if (/[a-zA-Z]/.test(char)) {
      // Shift is a positive number and lowercase letters are past the last lowercase letter value
      if (
        shift > 0 &&
        targetLetterNum >= startLower &&
        targetLetterNum + shift > endLower
      ) {
        result.push(String.fromCharCode(targetLetterNum - shiftNum));
      }

      // Shift is a positive number and uppercase letters are past the last uppercase letter value
      else if (
        shift > 0 &&
        targetLetterNum <= endUpper &&
        targetLetterNum + shift > endUpper
      ) {
        result.push(String.fromCharCode(targetLetterNum - shiftNum));
      }

      // Shift is a negative number and lowercase letters are before the first lowercase letter value
      else if (
        shift < 0 &&
        targetLetterNum >= startLower &&
        targetLetterNum + shift < startLower
      ) {
        result.push(String.fromCharCode(targetLetterNum + shiftNum));
      }

      // Shift is a negative number and uppercase letters are before the first uppercase letter value
      else if (
        shift < 0 &&
        targetLetterNum <= endUpper &&
        targetLetterNum + shift < startUpper
      ) {
        result.push(String.fromCharCode(targetLetterNum + shiftNum));
      }

      // Any lower or upper cased letter not past the respective last letter threshold
      else {
        result.push(String.fromCharCode(targetLetterNum + shift));
      }
    }
    // Let through any other character from the string as in
    else {
      result.push(char);
    }
  }

  return result.join("");
}

// Below is a MUCH better refactored version of my code from chatGPT. Analyze and review where I can improve. Keep both versions for future reference.
function caesarCipher2(string, shift) {
  const startLower = "a".charCodeAt(0); // 97
  const endLower = "z".charCodeAt(0); // 122
  const startUpper = "A".charCodeAt(0); // 65
  const endUpper = "Z".charCodeAt(0); // 90
  let result = [];

  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    let targetLetterNum = char.charCodeAt(0);

    // Check if the character is a letter (either lowercase or uppercase)
    if (/[a-zA-Z]/.test(char)) {
      // Determine if the letter is lowercase or uppercase
      let base, end;
      if (targetLetterNum >= startLower && targetLetterNum <= endLower) {
        base = startLower;
        end = endLower;
      } else if (targetLetterNum >= startUpper && targetLetterNum <= endUpper) {
        base = startUpper;
        end = endUpper;
      } else {
        // In case of non-alphabet characters, push as-is
        result.push(char);
        continue;
      }

      // Normalize shift to a value between 0 and 25
      let newCharCode = ((targetLetterNum - base + shift) % 26 + 26) % 26 + base;

      // Push the shifted character
      result.push(String.fromCharCode(newCharCode));
    } else {
      // For non-alphabet characters, just add them to the result without changing
      result.push(char);
    }
  }

  return result.join("");
}

console.log("Logs for better chatGPT version of my code...");
console.log(caesarCipher2("xyz", 3)); // abc
console.log(caesarCipher2("XYZ", 3)); // ABC
console.log(caesarCipher2("abc", 3)); // def
console.log(caesarCipher2("ABC", 3)); // DEF
console.log(caesarCipher2("HeLLo", 3)); // KhOOr
console.log(caesarCipher2("Hello, World!", 3)); // Khoor, Zruog!
console.log(caesarCipher2("abc", -3)); // xyz
console.log(caesarCipher2("ABC", -3)); // XYZ
console.log(caesarCipher2("azAZ!", 1)); // baBA!

// 5. An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

function analyzeArray(array) {
    const sum = array.reduce((acc, num) => acc + num, 0); 
    const average = sum / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);   
    return {
      average: average,
      min: min,
      max: max,
      length: array.length,
    };
}

// const object = analyzeArray([1, 8, 3, 4, 2, 6]);
// console.log(object);

// object ==
//   {
//     average: 4,
//     min: 1,
//     max: 8,
//     length: 6,
//   };

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
