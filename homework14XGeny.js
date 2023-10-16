// 2. Gene finder - file: brca1.json - augment gene finder by:
// a. Displaying number of all genes
// b. Displaying length of longest and shortest gene

let dna = require("./brca1.json");
let START_CODON = "atg";
let END_CODON = "taa";
let startIndex = 0;
let endIndex = 0;
let geneArray = [];

while (endIndex != dna.lastIndexOf(END_CODON)) {
  startIndex = dna.indexOf(START_CODON);
  endIndex = dna.indexOf(END_CODON, startIndex + 3);
  let candidate = dna.slice(startIndex, endIndex + 3);
  candidate.length % 3 == 0 && candidate.length > 6
    ? geneArray.push(candidate)
    : null;
  dna = dna.substring(endIndex + 3);
}
let lengthOfLongest = 0;
let lengthOfShortest = geneArray[0].length;
for (gen of geneArray) {
  lengthOfLongest < gen.length ? (lengthOfLongest = gen.length) : null;
  lengthOfShortest > gen.length ? (lengthOfShortest = gen.length) : null;
}
console.log("number of all genes is: " + geneArray.length);
console.log("lenght of longest genes is: " + lengthOfLongest);
console.log("lenght of shortest genes is: " + lengthOfShortest);
