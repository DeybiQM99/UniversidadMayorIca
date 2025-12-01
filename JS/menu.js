
  const btnMenu = document.getElementById('btnMenu');
  const menu = document.getElementById('mainMenu');
  const iconMenu = document.getElementById('iconMenu');

  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('open');

    // Cambiar icono
    if (menu.classList.contains('open')) {
      iconMenu.classList.replace('fa-bars', 'fa-xmark');
    } else {
      iconMenu.classList.replace('fa-xmark', 'fa-bars');
    }
  });