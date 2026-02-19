let employee = {
    name: 'Md Sabbir Hasan',
    Designation : 'QA',
    Salary: 25000,
}

for( let key in employee){
    let value = employee[key];
    // console.log(key,value);
}

let keys = Object.keys(employee);
for( let key of keys){
    let value = employee[key];
    console.log(value,key)
}