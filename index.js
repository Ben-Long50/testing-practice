export default function capitalize(string) {
  const array = [...string];
  array[0] = array[0].toUpperCase();
  const newString = array.join('');
  return newString;
}

export function reverseString(string) {
  const array = [...string];
  const reversedArray = [];
  for (let i = array.length - 1; i > -1; i--) {
    reversedArray.push(array[i]);
  }
  const reversedString = reversedArray.join('');
  return reversedString;
}

export const caluculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    return a / b;
  },
};

export function caesarCipher(string, fact) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const punctuation = /[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g;
  const stringArray = [...string];
  const newStringArray = stringArray.map((letter) => {
    if (punctuation.test(letter)) {
      return letter;
    }
    const index = alphabet.findIndex(
      (alphLet) => alphLet === letter.toLowerCase(),
    );
    if (index + fact < 25) {
      if (letter === letter.toUpperCase()) {
        return alphabet[index + fact].toUpperCase();
      }
      return alphabet[index + fact];
    }
    if (letter === letter.toUpperCase()) {
      return alphabet[(index + fact) % 26].toUpperCase();
    }
    return alphabet[(index + fact) % 26];
  });
  const cipher = newStringArray.join('');
  return cipher;
}

export function analyzeArray(array) {
  const sortedArray = array.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < sortedArray.length; i++) {
    sum += sortedArray[i];
  }
  return {
    average: sum / sortedArray.length,
    min: sortedArray[0],
    max: sortedArray[sortedArray.length - 1],
    length: sortedArray.length,
  };
}
