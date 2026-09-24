let firstNameInput = document.getElementById('firstNameInput');
let lastNameInput = document.getElementById('lastNameInput')
let setPassInput = document.getElementById('setPassInput')
let firstText = '';
let lastText = '';
let setPass = '';


firstNameInput.addEventListener('input', function(event){
    firstText = event.target.value
})

lastNameInput.addEventListener('input',(event)=>{
    lastText = event.target.value;
})

setPassInput.addEventListener('input',(event)=>{
    setPass = event.target.value;
})

let details = document.getElementById('details')
document.getElementById('submitBtn').addEventListener('click',function(){

    let section = document.createElement('section');
    section.innerHTML =`
        <P>${firstText}</P>
        <P>${lastText}</P>
        <P>${setPass}</P>
    
    `
    
    // let p1 = document.createElement('p');
    // p1.innerText = firstText;
    // let p2 = document.createElement('p');
    // p2.innerText = lastText;
    // let p3 = document.createElement('p');
    // p3.innerText = setPass
    // details.appendChild(p1)
    // details.appendChild(p2)
    // details.appendChild(p3)
    details.appendChild(section)
})