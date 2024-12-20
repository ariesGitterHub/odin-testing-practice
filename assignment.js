// See messyNotes.js for "sausage making" notes.

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

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

// NOTE: I added negative shift number code for fun.

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
      if (
        shift > 0 &&
        targetLetterNum >= startLower &&
        targetLetterNum + shift > endLower
      ) {
        result.push(String.fromCharCode(targetLetterNum - shiftNum));
      } else if (
        shift > 0 &&
        targetLetterNum <= endUpper &&
        targetLetterNum + shift > endUpper
      ) {
        result.push(String.fromCharCode(targetLetterNum - shiftNum));
      } else if (
        shift < 0 &&
        targetLetterNum >= startLower &&
        targetLetterNum + shift < startLower
      ) {
        result.push(String.fromCharCode(targetLetterNum + shiftNum));
      } else if (
        shift < 0 &&
        targetLetterNum <= endUpper &&
        targetLetterNum + shift < startUpper
      ) {
        result.push(String.fromCharCode(targetLetterNum + shiftNum));
      } else {
        result.push(String.fromCharCode(targetLetterNum + shift));
      }
    } else {
      result.push(char);
    }
  }

  return result.join("");
}

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

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
