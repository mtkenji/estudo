const botaoMenu = document.querySelector('.cabecalho__button');
const menu = document.querySelector('.cabecalho__lista');

botaoMenu.addEventListener('click', () =>{
    menu.classList.toggle('cabecalho__lista--ativo');
});