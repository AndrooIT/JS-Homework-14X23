
// 4. Credit Card - write a program that will tell if the credit card number is valid and what type of card it is (American Express / MasterCard / Visa)
// a. For card number validation - Luhn’s Algorithm is used (https://en.wikipedia.org/wiki/Luhn_algorithm)
// b. Assume:
//     i. All American Express numbers start with 34 or 37; 
//     ii. MasterCard numbers start with 51, 52, 53, 54, or 55; 
//     iii. All Visa numbers start with 4
//     iv. American Express uses 15-digit numbers
//     v. MasterCard uses 16-digit numbers
//     vi. Visa uses 13- and 16-digit numbers
// c. Display either card type or INVALID


let cardNumber = "5117134421213238";
let valid = false;
let firstcharacters = cardNumber.slice(0, 2);
let lastcharacter = Number(cardNumber.slice(-1));
let sumDigits = cardNumber.slice(0, -1).split("").reverse();
let sum = 0;

for (let i = 0; i < sumDigits.length; i++) {
  sumDigits[i] = Number(sumDigits[i]);
  i % 2 == 0 ? (sumDigits[i] *= 2) : null;
}
sum = sumDigits.reduce((acc, curr) => (acc += curr));
if (sum % 10 == lastcharacter){ console.log("karta zdała test Luhna")
}else {console.log("INVALID - karta nie zdała testu Luhna"); return};

switch (firstcharacters) {
  case "34":
  case "37":
    cardNumber.length == 15
      ? console.log("American Ekspress")
      : console.log("INVALID card");
    break;
  case "51":
  case "52":
  case "53":
  case "54":
  case "55":
    cardNumber.length == 16
      ? console.log("MasterCard")
      : console.log("INVALID card");
    break;
  case "40":
  case "41":
  case "42":
  case "43":
  case "44":
  case "45":
  case "46":
  case "47":
  case "48":
  case "49":
    cardNumber.length == 16 || cardNumber.length == 13
      ? console.log("Visa")
      : console.log("INVALID card");
    break;
  default:
    console.log("INVALID card");
}
