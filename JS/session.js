document.addEventListener("DOMContentLoaded", () => {

  const btnLogout = document.getElementById("btnLogout");
  const userBadge = document.querySelector(".user-badge");

  const sesion = localStorage.getItem("sesionUMI");
  let data = null;

  if (sesion) {
    data = JSON.parse(sesion);
  }

  // ✔ Si NO hay sesión → mostrar botón "Iniciar sesión"
  if (!data) {
    if (btnLogout) {
      btnLogout.textContent = "Iniciar sesión";
      btnLogout.onclick = () => window.location.href = "login.html";
    }

    if (userBadge) userBadge.style.display = "none";
    return;
  }

  // ✔ Si SÍ hay sesión → mostrar usuario + cerrar sesión
  if (btnLogout) {
    btnLogout.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i> Cerrar sesión';
    btnLogout.onclick = () => {
      localStorage.removeItem("sesionUMI");
      window.location.href = "login.html";
    };
  }

  // Mostrar icono usuario + rol
  if (userBadge) {
    userBadge.style.display = "inline-flex";
    userBadge.title = data.usuario.toUpperCase();
  }
});
