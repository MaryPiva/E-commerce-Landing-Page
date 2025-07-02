// Troca a imagem principal ao clicar nas miniaturas
function slider(imageSrc) {
  document.getElementById('main-image').src = imageSrc;
}

// Menu hambúrguer toggle
let menu = document.getElementById('menu');
let menuIcon = document.querySelector('#menu i');
let navbar = document.querySelector('.navegacao');

menu.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};
