let paragrafos = document.querySelector('.fadeout');
let html = document.getElementById('#html');
let css = document.querySelector('#css');
let js = document.querySelector('#js');
let git = document.querySelector('#git');

mostraParagrafo();

function mostraParagrafo(){
    html.addEventListener("mouseover", function(){
        console.log("funcionou")
    })
    //html.classList.remove('fadeout');
    console.log("funcionou")
}