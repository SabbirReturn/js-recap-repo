// let addPost = ()=>{
//     let url ="https://jsonplaceholder.typicode.com/posts"
//     fetch(url)
//     .then((response)=> response.json())
//     .then((json)=> displayShow(json))
// }


// let displayShow =(posts)=>{
//     let postContainer = document.getElementById('post-container')
//     posts.forEach(element => {
//         let postCard = document.createElement('div')
//         postCard.innerHTML = `
//         <div class="displayPost">
//             <p>${element.userId}</p>
//             <p>${element.id}</p>
//             <p>${element.title}</p>
//             <P>${element.body}</P>
//         </div>`
//         postContainer.appendChild(postCard);
//     });
// }

// addPost()


let albumsPost = ()=>{
    let url = 'https://jsonplaceholder.typicode.com/photos'
    fetch(url)
    .then((Response)=> Response.json())
    .then((data)=> displayAlbum(data));
}

let displayAlbum = (albums)=>{
    let albumContainer = document.getElementById('album-container')
    albumContainer.innerHTML = '';
    albums.forEach(element => {
        let div = document.createElement('div');
        div.innerHTML = `
         <div class="ablums">
            <h3>${element.albumId}</h3>
            <p>${element.displayAlbum}</p>
            <p>${element.title}</p>
            <p>${element.url}</p>
            <p>${element.thumbnailUrl}</p>
        </div>
        `
        albumContainer.appendChild(div)
    });
}
albumsPost()



