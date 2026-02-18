let numbers = [11,12,13,14,15,16,17,18];
let max = Math.max(...numbers);
// console.log(max);


let first = [1,2,3,4,4,5];
let second =[...first] ;
second.push(7);
console.log(first);
console.log(second);


let person ={
    name:'Sabbir Hasan',
    profession : "software Engineer"
}

let address = {
    ...person,
    address: "Uttara Sector 10",
    
}
console.log(address)