// JS/logoutModal.js
document.addEventListener('DOMContentLoaded', () => {
  const btnLogout = document.getElementById('btnLogout');
  const overlay = document.getElementById('overlayLogout');
  const btnConfirm = document.getElementById('confirmLogout');
  const btnCancel = document.getElementById('cancelLogout');

  if (!btnLogout || !overlay) return;

  // Abrir modal (agrega clase .show)
  btnLogout.addEventListener('click', () => {
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden', 'false');
  });

  // Cerrar por cancelar
  btnCancel?.addEventListener('click', () => {
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden', 'true');
  });

  // Cerrar al clickear fuera de la caja (overlay)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('show');
      overlay.setAttribute('aria-hidden', 'true');
    }
  });

  // Confirmar cierre de sesión (ajusta a tu flujo real)
  btnConfirm?.addEventListener('click', () => {
    // TODO: aquí va tu lógica real de logout (sessionStorage, fetch, etc.)
    // De ejemplo, redirigimos a login:
    window.location.href = 'login.html';
  });
});
