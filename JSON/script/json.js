let person={
    name: 'Sabbir hasan',
    age: 22,
    firends: ['Hasan','Rahman']
}
console.log(person, typeof person);

let jsonData = JSON.stringify(person);
console.log(jsonData, typeof jsonData);

let parseJson = JSON.parse(jsonData);
console.log(parseJson, typeof parseJson);