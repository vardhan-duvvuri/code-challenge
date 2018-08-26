// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.

class Hamming {
  compute(str1, str2) {
    if (str1.length !== str2.length)
      throw "DNA strands must be of equal length.";
    let result = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) result++;
    }
    return result;
  }
}


module.exports = Hamming;
