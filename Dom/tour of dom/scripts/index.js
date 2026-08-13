// console.log(document.body.innerText)
let liCollections = document.getElementsByTagName('li');
console.log(liCollections)
for(let li of liCollections){
    console.log(li.innerText)
}

let fruitsTitle = document.getElementById('fruitsTitle');
fruitsTitle.innerText = 'Fruits Title change by javascript'