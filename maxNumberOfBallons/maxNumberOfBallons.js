/**
 * @param {string} text
 * @return {number}
 */

const maxNumberOfBalloons = (text) => {
  let wordMap = { b: 1, a: 1, l: 2, o: 2, n: 1 };
  let textMap = {};
  for (let char of text) {
    if (char in wordMap) {
      textMap[char] = textMap[char] ? textMap[char] + 1 : 1;
    }
  }

  for (let key in wordMap) {
    if (!(key in textMap) || textMap[key] < wordMap[key]) {
      return 0;
    }
  }

  return Math.min(Math.floor(textMap.l / 2), Math.floor(textMap.o / 2));
};
