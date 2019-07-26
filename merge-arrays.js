/**
 *  Merges two sorted arrays.
 * @param {array} arr1 
 * @param {array} arr2 
 * @param {array} 
 */
function merge(arr1, arr2) {
  let p1 = 0,
      p2 = 0,
  output = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      output.push(arr1[p1]);
      p1++;
    } else {
      output.push(arr2[p2]);
      p2++;
    }
  }
  
  while (p1 < arr1.length) {
    output.push(arr1[p1]);
    p1++;
  }

  while (p2 < arr2.length) {
    output.push(arr2[p2]);
    p2++;
  }

  // output.push(...arr1.slice(p1));
  // output.push(...arr2.slice(p2));

  return output;
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);