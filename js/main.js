let html = document.querySelector('#html');
let css = document.querySelector('#css');
let js = document.querySelector('#js');
let git = document.querySelector('#git');

let fotoHtml = document.querySelector("#foto-html");
let fotoCss = document.querySelector('#foto-css');
let fotoJs = document.querySelector('#foto-js');
let fotoGit = document.querySelector('#foto-git');

ocultaParagrafo();
mostraParagrafo();

function ocultaParagrafo(){
    fotoHtml.addEventListener("mouseover", function(){
        console.log("funcionou html")
        html.classList.remove('fadeout');
        html.classList.add('centraliza')
    })
    fotoCss.addEventListener("mouseover", function(){
        console.log("funcionou html")
        css.classList.remove('fadeout');
        css.classList.add('centraliza');
    })
    fotoJs.addEventListener("mouseover", function(){
        console.log("funcionou html")
        js.classList.remove('fadeout');
    })
    fotoGit.addEventListener("mouseover", function(){
        console.log("funcionou html")
        git.classList.remove('fadeout');
    })
}

function mostraParagrafo() {
    fotoHtml.addEventListener("mouseout", function () {
        console.log("ta funcionando");
        html.classList.add('fadeout');
    })
    fotoCss.addEventListener("mouseout", function () {
        console.log("ta funcionando");
        css.classList.add('fadeout');
    })
    fotoJs.addEventListener("mouseout", function () {
        console.log("ta funcionando");
        js.classList.add('fadeout');
    })
    fotoGit.addEventListener("mouseout", function () {
        console.log("ta funcionando");
        git.classList.add('fadeout');
    })
}
