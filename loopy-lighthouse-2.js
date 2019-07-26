/**
 * Extension of loopy-lighthouse.js
 * Prints the numbers from 'range[0]' to 'range[1]' to the console, with three exceptions:
 * - If the number is a multiple of 'multiples[0]', print the string 'words[0]' instead.
 * - If the number is a multiple of 'multiples[1]', print the string 'words[1]' instead.
 * - If the number is a multiple of both, print the string 'words[0] + words[1]' instead.
 * @param {array} range - array of 2 numbers representing the start and end values for the loop.
 * @param {array} multiples - array of 2 numbers representing the multiples to replace with words.
 * @param {array} words - array of 2 strings representing the words that will replace the multiples.
 */
function loopyLighthouse(range, multiples, words) {
  let start = range[0],
        end = range[1],
      mult1 = multiples[0],
      mult2 = multiples[1],
      word1 = words[0],
      word2 = words[1];

  for (let i = start; i <= end; i++) {
    if (i % mult1 === 0 && i % mult2 === 0) {
      console.log(word1 + word2);
    } else if (i % mult1 === 0) {
      console.log(word1);
    } else if (i % mult2 === 0) {
      console.log(word2);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);