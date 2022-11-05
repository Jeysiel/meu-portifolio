var itemMenu = document.querySelectorAll('.menu-item');

itemMenu.forEach(item =>{
    item.addEventListener('click', scrollPara);
})

function scrollPara(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to, 
        behavior: "smooth",
    });
}