// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.

class Hamming {
  compute(dna_seq1, dna_seq2) {
    if (dna_seq1.length !== dna_seq2.length)
      throw "DNA strands must be of equal length.";
    let hamming_distance = 0;
    for (let i = 0; i < dna_seq1.length; i++) {
      if (dna_seq1[i] !== dna_seq2[i]) hamming_distance++;
    }
    return hamming_distance;
  }
}


module.exports = Hamming;
