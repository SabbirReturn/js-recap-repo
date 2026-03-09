let loadDetails = ()=>{
    let url = "https://jsonplaceholder.typicode.com/users"
    fetch(url)
    .then((Response)=> Response.json())
    .then((data)=>disPlayShow(data))
}
let disPlayShow = (users)=>{
    let detailsContainer = document.getElementById('detailsContainer')
    detailsContainer.innerText = '';
    users.forEach(element => {
        let div = document.createElement('div')
        div.textContent = JSON.stringify(element, null, 2)
        detailsContainer.appendChild(div)
    });
}
// loadDetails();
loadDetails();