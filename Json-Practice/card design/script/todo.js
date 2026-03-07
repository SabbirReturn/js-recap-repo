let todoList = ()=>{
    let url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url)
    .then((Response)=> Response.json())
    .then((data)=> displayShow(data))
}
let displayShow = (posts)=>{
    let todoContainer = document.getElementById('todo_container')
    posts.forEach(element => {
        let todoCard = document.createElement('div')
        todoCard.innerHTML = `
        <div class="todo_list">
            <h1>${element.userId}</h1>
            <p>${element.id}</p>
            <p>${element.title}</p>
            <p>${element.completed}</p>
        </div>
        `
        todoContainer.appendChild(todoCard);
    });
}
todoList();