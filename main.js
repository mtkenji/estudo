const noivasFotos = document.querySelectorAll(".noivas-img, .social-img");
const modal = document.getElementById("myModal");
const portifolioTitles = document.querySelectorAll(".main_title__portifolio__item");
const portifolioLink = document.querySelectorAll(".section_portifolio__link");

const elemPhotosSocial = document.getElementById("photos-social");
const elemPhotosNoivas = document.getElementById("photos-noivas");
const elemPhotosContainer = document.getElementsByClassName("photos__container");

const menu = document.querySelector('.menu_navegacao_ul');

//const botaoMenu = document.querySelector('.cabecalho__menu');

/* botaoMenu.addEventListener('click', () =>{
    menu.classList.toggle('menu_navegacao_ul__ativo');
}); */


/* console.log('elemPhotosSocial: '+ elemPhotosSocial);
console.log('elemPhotosNoivas: ' + elemPhotosNoivas);

console.dir(elemPhotosSocial);
console.dir(elemPhotosNoivas); */

portifolioLink.forEach((element)=>{
  element.addEventListener("click", () => {
    sessionStorage.setItem("portifolio__section", element.innerHTML);
  })
})

noivasFotos.forEach((elemento) => {
    elemento.addEventListener("click", (evento)=> {
        //console.log(evento.target);
        //console.log(evento.target.parentNode);

        insertModal(evento.target);
    })
});

portifolioTitles.forEach((element) => {
  element.addEventListener("click", (evento) => {
    showHideNoivasSocialPhotos(element.innerHTML);
  })
});


function loadAttribute () {
  //console.log(sessionStorage.getItem('portifolio__section'));

  showHideNoivasSocialPhotos(sessionStorage.getItem('portifolio__section'));
}

function showHideNoivasSocialPhotos (value) {
  if (value === "Social") {
    hidePhotos(elemPhotosNoivas);
    showPhotos(elemPhotosSocial);
  }
  else {
    hidePhotos(elemPhotosSocial);
    showPhotos(elemPhotosNoivas);
  }

}

function hidePhotos (element) {
  //element.setAttribute('style', 'display: none');
  element.remove();
}

function showPhotos (element) {
  //element.setAttribute('style', 'display: grid');
  //elemPhotosContainer.appendChild(element);
  console.dir(element);
  elemPhotosContainer[0].appendChild(element);
}


function insertModal(elemento){

  //CREATE ELEMENT, ADDING CLASS AND ID.
  const newModal = document.createElement('div');
  newModal.setAttribute('id', 'myModal');
  newModal.classList.add('modal');
  const newSpan = document.createElement('span');
  newSpan.classList.add('close');
  newSpan.innerHTML = '&times;';
  
  //console.log(elemento.src.substring(0, elemento.src.length-4));

  const newImg = document.createElement('img');
  newImg.classList.add('modal-content');
  newImg.setAttribute('id', elemento.id);
  newImg.setAttribute('src', elemento.src.substring(0, elemento.src.length-4)+'_full.jpg');

  newModal.appendChild(newImg);
  newModal.appendChild(newSpan);

  //console.log(newModal);

  const mainElement = document.getElementById("main");

  mainElement.appendChild(newModal);

  const modal = document.getElementById("myModal");
  const img = document.getElementById(elemento.id);
  const modalImg = document.getElementById(elemento.id);

  modal.style.display = "block";

   var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {     
    mainElement.removeChild(newModal);
  }
}

