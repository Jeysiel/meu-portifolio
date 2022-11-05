var titulo = document.querySelector('.h1');
var texto = document.querySelector('.paragrafo-apresentaçao');
var foto = document.querySelector('.foto-apresentacao');
escreveTitulo(titulo);
escreveTexto(texto);
mostraFoto();

function mostraFoto(){
    setTimeout(() => {
        foto.classList.remove('fadeout'); 
    }, 3000);
}

function escreveTitulo(element){
    const tituloArray = element.innerHTML.split('');
    element.innerHTML = '';
    tituloArray.forEach((letra, i) => {
        setTimeout(()=> element.innerHTML += letra, 75 * i)
    });
}

function escreveTexto(element){
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(()=> element.innerHTML += letra, 25 * i)
    });
}