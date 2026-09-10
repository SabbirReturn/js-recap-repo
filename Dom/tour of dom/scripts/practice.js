// console.log('Hello Js')
// console.log(document.body)

// Get liCollection

let liCollections = document.getElementsByTagName('li');

for(let li of liCollections){
    console.log(li.innerText);
}
console.log(liCollections);


// add class and remove
let fruitsTitle = document.getElementById('fruitsTitle')
fruitsTitle.classList.add('name')
let attribute= fruitsTitle.getAttribute('class')

console.log(attribute);
fruitsTitle.classList.add('color');

// fruitsTitle.style.background = 'red'

fruitsTitle.innerText = 'js changed fruits title';

// Set title
fruitsTitle.title = 'Fol Khaba?'


