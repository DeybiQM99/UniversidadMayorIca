const loginForm = document.getElementById("loginForm");
const mensaje = document.getElementById("mensaje");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita recargar la página

  const usuario = document.getElementById("usuario").value.trim().toLowerCase();
  const clave = document.getElementById("clave").value.trim();

  // Reset del mensaje
  mensaje.textContent = "";
  mensaje.className = "msg";

  let accesoConcedido = false;

  // Usamos switch para validar según el usuario
  switch (usuario) {
    case "admin":
      if (clave === "1234") {
        mensaje.textContent = "Bienvenido, administrador.";
        mensaje.classList.add("ok");
        accesoConcedido = true;
      } else {
        mensaje.textContent = "Contraseña o usuario incorrecta.";
        mensaje.classList.add("error");
      }
      break;

    case "alumno":
      if (clave === "1111") {
        mensaje.textContent = "Bienvenido, alumno.";
        mensaje.classList.add("ok");
        accesoConcedido = true;
      } else {
        mensaje.textContent = "Contraseña o usuario incorrecta.";
        mensaje.classList.add("error");
      }
      break;

    case "docente":
      if (clave === "2222") {
        mensaje.textContent = "Bienvenido, docente.";
        mensaje.classList.add("ok");
        accesoConcedido = true;
      } else {
        mensaje.textContent = "Contraseña o usuario incorrecta.";
        mensaje.classList.add("error");
      }
      break;

    default:
      mensaje.textContent = "Usuario no reconocido.";
      mensaje.classList.add("error");
      break;
  }

  // Si el acceso fue correcto, redirigimos al inicio del proyecto
  if (accesoConcedido) {
    // Cambia "index.html" si tu archivo se llama distinto (por ejemplo "Index.html" o "inde.html")
    setTimeout(() => {
      window.location.href = "index.html";
    }, 800); // pequeño delay para que se vea el mensaje
  }
});
