let person={
    name: 'Sabbir hasan',
    age: 22,
    firends: ['Hasan','Rahman']
}
// console.log(person, typeof person);

// let jsonData = JSON.stringify(person);
// console.log(jsonData, typeof jsonData);

// let parseJson = JSON.parse(jsonData);
// // console.log(parseJson, typeof parseJson);
// console.log(parseJson, typeof parseJson);
let jsonData = JSON.stringify(person);
// console.log(jsonData);

let parseJson = JSON.parse(jsonData);
// console.log(parseJson)

 

document.getElementById('button').addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response=> Response.json())
    .then(data=> console.log(data))
})