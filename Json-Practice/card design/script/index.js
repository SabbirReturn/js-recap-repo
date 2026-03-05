let addPost = ()=>{
    let url ="https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then((response)=> response.json())
    .then((json)=> displayShow(json))
}

let displayShow =(posts)=>{
    let postContainer = document.getElementById('post-container')
    posts.forEach(element => {
        let postCard = document.createElement('div')
        postCard.innerHTML = `
        <div class="displayPost">
            <p>${element.userId}</p>
            <p>${element.id}</p>
            <p>${element.title}</p>
            <P>${element.body}</P>
        </div>`
        postContainer.appendChild(postCard);
    });
}
addPost()

// {
//     "userId": 10,
//     "id": 97,
//     "title": "quas fugiat ut perspiciatis vero provident",
//     "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
// }


