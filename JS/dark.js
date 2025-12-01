

  const btnDark = document.getElementById("btnDarkMode");
  const iconDark = btnDark.querySelector("i");

  // cargar preferencia guardada
  if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
    document.documentElement.classList.add("dark");
    iconDark.classList.replace("fa-moon", "fa-sun");
  }

  btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.documentElement.classList.toggle("dark");

    // cambiar icono
    if (document.body.classList.contains("dark")) {
      iconDark.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("tema", "dark");
    } else {
      iconDark.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("tema", "light");
    }
  });
