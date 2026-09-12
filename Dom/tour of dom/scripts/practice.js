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

// let sections = document.querySelectorAll('section');
// sections.forEach(section=>{
//     section.style.border = ' 2px solid red';
//     section.style.marginBottom = '5px'
//     section.style.borderRadius = '15px'
//     section.style.padding = '10px';
// })
// console.log(sections)


