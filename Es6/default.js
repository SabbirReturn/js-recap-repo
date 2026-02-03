// function sum (num1, num2, ...num3){
//     let total = num1 + num2 ;
//     let sum = 0;
//     for(let n of num3){
//         let full = sum + n;
        
//     }
//    console.log(sum)
// }
// // console.log(sum(2,10,11,12,13))
function sum (num1, num2, ...numbers){
    let total = num1 + num2;
    let sum = 0;
    for(let num of numbers){
        sum = sum + num
    }
    let full = total + sum
    return full
}
console.log(sum(11,1,2,3,4,5,5,))