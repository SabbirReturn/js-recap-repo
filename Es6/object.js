let employee = {
    name: 'Md Sabbir Hasan',
    salary : 20000,
    profession : 'Web developer',
}

employee.designation = 'Project Manager'
//  Object.freeze(employee)
// Object.seal(employee)
//  delete employee.profession
 console.log(employee)
let {salary} = employee;
// console.log(salary);


// let keys = Object.keys(employee);
// let values = Object.values(employee);
// console.log(`${keys} || ${values}`)