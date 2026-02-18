let details = {
    name: "Shirt",
    price: 500,
    quantity: 7,
}
// console.log(details);

// let discountPrice = details.price *20/100;
// let payBill = details.price- discountPrice;
// console.log(payBill)


let {name,price,quantity} = details;

let discountPrice = price * 20/100;
let payBill = price - discountPrice;
// console.log(payBill)

// function numbers(nums){
//     // return [num1,num2, num3] = nums
// }
// // let number = numbers([22,34,56,78]);
// console.log(num1);


let numbers = [22,34,56,78,88]

let [num1,num2, num3,...num] = numbers;
console.log(num)


