// console.log('click')
let mainContainer= document.getElementById('main-container')
function btnClick(){
    mainContainer.style.backgroundColor = 'yellow'
}

let makeRed = document.getElementById('makeRed')
makeRed.addEventListener('click', function(){
    mainContainer.style.backgroundColor = 'Red'
})

let makeGreen = document.getElementById('makeGreen')

makeGreen.addEventListener('click', ()=>{
    mainContainer.style.backgroundColor = 'green'
})

let title = document.getElementById('title')

let changeBtn = document.getElementById('changeBtn');
let input = document.getElementById('input')
changeBtn.addEventListener('click', function(){
    input.addEventListener('keyup', function(event){
        let text = event.target.value;
        title.innerText = text;
    })
})

// input.addEventListener('keyup', function(event){
//         console.log(event.target.value)
//     })



