 const btnIrArriba = document.getElementById("btn-ir-arriba");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      btnIrArriba.classList.add("visible");
    } else {
      btnIrArriba.classList.remove("visible");
    }
  });

  btnIrArriba.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });