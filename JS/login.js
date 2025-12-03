const loginForm = document.getElementById("loginForm");
const mensaje = document.getElementById("mensaje");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value.trim().toLowerCase();
  const clave = document.getElementById("clave").value.trim();

  mensaje.textContent = "";
  mensaje.className = "msg";

  let accesoConcedido = false;
  let rol = "";

  switch (usuario) {
    case "admin":
      if (clave === "1234") { accesoConcedido = true; rol = "admin"; }
      break;

    case "alumno":
      if (clave === "1111") { accesoConcedido = true; rol = "alumno"; }
      break;

    case "docente":
      if (clave === "2222") { accesoConcedido = true; rol = "docente"; }
      break;
  }

  if (!accesoConcedido) {
    mensaje.textContent = "Usuario o contraseña incorrectos.";
    mensaje.classList.add("error");
    return;
  }

  // ✔ Guardar sesión
  localStorage.setItem("sesionUMI", JSON.stringify({
    usuario: usuario,
    rol: rol,
    time: Date.now()
  }));

  mensaje.textContent = "Acceso correcto.";
  mensaje.classList.add("ok");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 600);
});
