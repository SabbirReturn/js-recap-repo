// let items = document.getElementsByClassName('item');
// for(let item of items){
//     item.addEventListener('click', function(event){
//         event.target.parentNode.removeChild(event.target)
//     })
// }
let listContainer = document.getElementById('list-container')
listContainer.addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target)
})

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(){
    let listContainer = document.getElementById('list-container');
    let li = document.createElement('li');
    li.innerText = 'New Id Item'
    listContainer.appendChild(li);
})

document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'Shift'){
        console.log('Enter press')
    }
})

let inputValue = document.getElementById('inputValue');
let outPut = document.getElementById('outPut')

inputValue.addEventListener('change',(event)=>{
    outPut.innerText = event.target.value
    event.target.value = '';
})

let link = document.querySelector('a');

link.addEventListener('click', function(event) {

    event.preventDefault();

});

// document.getElementById('check').addEventListener('click', function(event){
//     console.log(event.target);
//     console.log(event.currentTarget);
// })

listContainer.addEventListener('click',(event)=>{
    console.log(event.target);
    console.log(event.currentTarget)
})

let btnCheck = document.getElementById('btnCheck')
btnCheck.addEventListener('mousemove', (event)=>{
    console.log('x',event.clientX)
    console.log("y",event.clientY)
})