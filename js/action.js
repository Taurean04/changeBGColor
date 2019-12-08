const color = ['white', 'black', 'blue', 'red', 'yellow', 'violet', 'brown', 'orange', 'pink', 'grey', 'green', 'purple'];
const body = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    const random = Math.floor(Math.random()*color.length);
    body.style.backgroundColor = color[random];
});
