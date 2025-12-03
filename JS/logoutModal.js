// JS/logoutModal.js
document.addEventListener('DOMContentLoaded', () => {
  const btnLogout = document.getElementById('btnLogout');
  const overlay = document.getElementById('overlayLogout');
  const btnConfirm = document.getElementById('confirmLogout');
  const btnCancel = document.getElementById('cancelLogout');

  if (!btnLogout || !overlay) return;

  // Abrir modal
  btnLogout.addEventListener('click', () => {
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden', 'false');
  });

  // Cancelar modal
  btnCancel?.addEventListener('click', () => {
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden', 'true');
  });

  // Cerrar clickeando fuera del modal
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('show');
      overlay.setAttribute('aria-hidden', 'true');
    }
  });

  // CONFIRMAR LOGOUT
  btnConfirm?.addEventListener('click', () => {

    // ❗ BORRAR LA SESIÓN REAL
    localStorage.removeItem("sesionUMI");

    // Redirigir al login
    window.location.href = 'login.html';
  });
});
