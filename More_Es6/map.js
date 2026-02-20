let numbers = [12,22,34,56,7,77,88];
// let doubled = [];
// for(let number of numbers){
//     let double = number * 2;
//     doubled.push(double);
// }

let doubled = numbers.map(num => num *2);
// console.log(doubled);

let friends = ['Sabbir','Hasan','Robin'];
let length = friends.map(name => name.length);
let firstLetter = friends.map(name => name[0])
let multiplyIndex = numbers.map((num,index)=>num * index)
console.log(length);
console.log(firstLetter);
console.log(multiplyIndex)