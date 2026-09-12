let mainContainer = document.getElementById('main-container');

let tourSection = document.createElement('section');

let h1 = document.createElement('h1');
h1.innerText = 'Tour Place where we go'
tourSection.appendChild(h1);

let ul = document.createElement('ul');
tourSection.appendChild(ul)

let li1 = document.createElement('li');
li1.innerText = 'cox bazar';
ul.appendChild(li1);

let li2 = document.createElement('li');
li2.innerText = 'SundarBan';
ul.appendChild(li2);

let li3 = document.createElement('li');
li3.innerText = 'Bandarban'
ul.appendChild(li3)
mainContainer.appendChild(tourSection)







