function slider(imageSrc) {
  document.getElementById('main-image').src = imageSrc;
}

const menu = document.querySelector('#menu');
const menuIcon = document.querySelector('#menu i');
const navbar = document.querySelector('.navegacao');

// Abrir/fechar menu
menu.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};

// Fechar menu ao clicar em um link
document.querySelectorAll('.navegacao a').forEach(link => {
  link.onclick = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('open');
  };
});
