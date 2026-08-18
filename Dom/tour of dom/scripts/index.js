// console.log(document.body.innerText)
let liCollections = document.getElementsByTagName('li');
// console.log(liCollections)
for(let li of liCollections){
    // console.log(li.innerText)
}

let fruitsTitle = document.getElementById('fruitsTitle');
// console.log(fruitsTitle)
fruitsTitle.innerText = 'Fruits Title change by javascript'

let fruitsItems = document.querySelectorAll('.fruitsContainer ul li');
// console.log(fruitsItems);


let items = document.querySelectorAll('#fruitsTitle + ul li')
// for(let item of items){
//     console.log(item.innerText)
// }
items.forEach(item=>{
    // console.log(item.innerText)
})


let fruitsContainer = document.getElementById('fruitsTitle')
let className = fruitsContainer.getAttribute('class')
// className('hasan')
let addClass = fruitsContainer.classList.add('backgroundColor')
let removeClass = fruitsContainer.classList.remove('home')
// console.log(fruitsContainer.classList)

fruitsContainer.setAttribute('title','Js change Tool tip')
let container = document.getElementsByClassName('fruitsContainer')
// console.log(container[0])

let placeContainer = document.getElementById('placeContainer');
placeContainer.classList.toggle('active');
// console.log(placeContainer.classList)

let nameList = document.querySelectorAll('#name li');
// console.log(nameList)

let place_Container = document.getElementById('places');
console.log(place_Container.childNodes);


// Create element

let placesUl = document.querySelector('#places ul');
console.log(placesUl)

let newLi = document.createElement('li')
newLi.innerText = 'Kushtia';

placesUl.appendChild(newLi);

