let person= [
    {name:'Md Sabbir', id:20203034, marks:80},
    {name:'Md Hasan', id:20203035, marks:82},
    {name:'Md Rahman', id:20203036, marks:70},
    {name:'Md Robin', id:20203037, marks:89}
]
// console.log(name)

let miniId = person.filter(idNum => idNum.id<20203035);
console.log(miniId);