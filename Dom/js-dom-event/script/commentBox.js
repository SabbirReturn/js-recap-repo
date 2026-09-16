let btn = document.getElementById('submitBtn')

btn.addEventListener('click', function(){
    let commentBox = document.getElementById('commentBox');
    let text = commentBox.value;
    let commentContainer = document.getElementById('comment-container');
    let p = document.createElement('p');
    p.innerText = text;
    commentContainer.appendChild(p);
    commentBox.value = '';
})