// 1. Given a string:
// a. count how many words it contains
// b. count how many letter “A”  is in it
// c. display longest word
// d. display how many words of length same as the longest is in the string
// e. Examples:
// f. “This is an example.”
// g. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let text = "This is an example";
// point g. alternative text value: Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
let spacePositions = [];
let Acounter = 0;
let LongestWord = "";
let WordsTable = text.split(" ");
let LongestWordcounter = 0;
for (let i = 0; i < text.length; i++) {
  text[i] == " " ? spacePositions.push(i) : null;
  text[i] == "A" ? Acounter++ : null;
}
for (let i = 0; i < WordsTable.length; i++) {
  LongestWord.length < WordsTable[i].length
    ? (LongestWord = WordsTable[i])
    : null;
}
for (let i = 0; i < WordsTable.length; i++) {
  LongestWord.length == WordsTable[i].length ? LongestWordcounter++ : null;
}
console.log(
  "Liczba słów w podanym tekście wynosi: " + Number(spacePositions.length + 1)
);
console.log('Liczba znaków "A" w podanym tekście wynosi: ' + Number(Acounter));
console.log(
  "Najdłuższy wyraz podanym tekście to " +
    LongestWord +
    " i występują w tekście " +
    Number(LongestWordcounter) +
    " wyraz/y/ów o tej długości"
);
