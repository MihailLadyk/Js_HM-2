'use strict'



// ______________________________________________TASK-1______________________________________________


// const logItems = function(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// ______________________________________________TASK-2______________________________________________


// const calculateEngravingPrice = function(message, pricePerWord) {
//   let words = message.split(" ");
//   return words.length * pricePerWord;
// };





// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120



// ______________________________________________TASK-3______________________________________________


// const findLongestWord = function(string) {
//   const words = string.split(" ");
//   let wordNumber;
//   let number = 0;
//   let oneWord;
//   let LargestWord;
//   for (let i = 0; i < words.length; i++) {
//     oneWord = words.slice(i, i + 1);
//     if (oneWord.join("").length > number) {
//       number = oneWord.join("").length;
//       wordNumber = i;
//     }
//     LargestWord = words[wordNumber];
//   }

//   return LargestWord;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'


// ______________________________________________TASK-4______________________________________________



// const formatString = function(string) {
//   if (string.length > 40) {
//     let shortArray = string.split("");
//     shortArray.splice(40);
//     let text = shortArray.join("");
//     return `${text}...`;
//   } else {
//     return string;
//   }
// };

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// // вернется форматированная строка


// ______________________________________________TASK-5______________________________________________

// const checkForSpam = function(message) {
//   let bannedWords = ["spam", "sale"];
//   let chekWords = bannedWords.join(" ").split("").join(" ").toLowerCase().split("  ");
//   let messageToCheck = message.split("").join(" ").toLowerCase();
//   let check = false;


//   for (let i = 0; i < bannedWords.length; i++) {
//     if (messageToCheck.includes(chekWords[i])) {
//       check = true;
//     }
//   }
//   return check;
// };


// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true






// ______________________________________________TASK-6______________________________________________





// let input;
// const numbers = [];
// let sum = 0;

// while (input !== null) {
//   input = prompt("Введите число:");
//   if (Number.isNaN(+input)) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else {
//     numbers.push(+input);
//   }
// }


// for (const total of numbers) {
//   sum += +total;
// }


// console.log(`Общая сумма чисел равна ${sum}`);