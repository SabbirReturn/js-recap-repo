let inputField = document.getElementById('input-text');
let deleteBtn = document.getElementById('btn-delete')
inputField.addEventListener('focus', function(){
    inputField.addEventListener('keyup', function(event){
        let text = event.target.value;
        let deleteBtn = document.getElementById('btn-delete')
        if(text === 'Delete'){
            deleteBtn.removeAttribute('disabled')
        }
        else{
            deleteBtn.setAttribute('disabled',true)
        }
    })
})

deleteBtn.addEventListener('click',()=>{
    let title = document.getElementById('title');
    title.style.display = 'none';
})
