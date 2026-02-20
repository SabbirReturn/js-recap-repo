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
// console.log(length);
// console.log(firstLetter);
// console.log(multiplyIndex)

// Reduce
let sum = numbers.reduce((total,num)=> total + num,0);
// console.log(sum)


let products=[
    {name:'T-shirt', id: 201, price: 500},
    {name:'pant', id: 202, price: 700},
    {name:'Shirt', id: 203, price: 800},
]

let pay = products.reduce((total, product)=> total + product.price,0);
console.log(pay);

