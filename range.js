/**
 * Creates an array of every even number from 'start' to 'end' counting by 'step'.
 * Returns an empty array [] if given incorrect parameters, such as:
 * - start, end, or step being undefined
 * - start being greater than end
 * - step being 0, or negative
 * @param {number} start
 * @param {number} end
 * @param {number} step
 * @return {array} 
 */
function range(start, end, step) {
  if ((start === undefined || end === undefined || step === undefined) || start > end || step <= 0)
    return [];
  let output = [];
  for (let i = start; i <= end; i += step) {
    output.push(i);
  }
  return output;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));