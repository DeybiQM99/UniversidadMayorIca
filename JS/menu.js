const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('mainMenu');
const iconMenu = document.getElementById('iconMenu');

// Abrir / Cerrar menú hamburguesa
btnMenu.addEventListener('click', () => {
  menu.classList.toggle('open');

  if (menu.classList.contains('open')) {
    iconMenu.classList.replace('fa-bars', 'fa-xmark');
  } else {
    iconMenu.classList.replace('fa-xmark', 'fa-bars');
  }
});

