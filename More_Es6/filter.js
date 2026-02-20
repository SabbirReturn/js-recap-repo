let numbers = [11,12,13,14,15,16];
let evenNumber = numbers.filter(num => num % 2===0);
// console.log(evenNumber);

let firstEvenNumber = numbers.find(num=>num % 2===0);
console.log(firstEvenNumber);