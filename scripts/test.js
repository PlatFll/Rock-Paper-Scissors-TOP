

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const pRed = document.createElement('p');
pRed.classList.add('pRed');
pRed.style.color = "red";
pRed.textContent = "Hey I'm red!";

container.appendChild(pRed);

const h3Blue = document.createElement('h3');
h3Blue.classList.add('h3Blue');
h3Blue.style.color = "blue";
h3Blue.textContent = "I'm a blue h3!";

container.appendChild(h3Blue);

const newDiv = document.createElement("div");
newDiv.classList.add("newDiv");
newDiv.style.cssText = "background-color : pink; border : 2px solid black;";

const divH3 = document.createElement("h3");
divH3.textContent = "I'm in a div!";
newDiv.appendChild(divH3);

const divP = document.createElement("p");
divP.textContent = "ME TOO!";
newDiv.appendChild(divP);

container.appendChild(newDiv);


