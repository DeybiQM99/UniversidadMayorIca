 const carrusel = document.querySelector(".ciclos-carousel");
        const left = document.querySelector(".carrusel-left");
        const right = document.querySelector(".carrusel-right");

        function updateArrows() {
            const max = carrusel.scrollWidth - carrusel.clientWidth;
            left.classList.toggle("hidden", carrusel.scrollLeft <= 5);
            right.classList.toggle("hidden", carrusel.scrollLeft >= max - 5);
        }

        left.onclick = () => carrusel.scrollBy({ left: -350, behavior: "smooth" });
        right.onclick = () => carrusel.scrollBy({ left: 350, behavior: "smooth" });

        carrusel.addEventListener("scroll", updateArrows);
        updateArrows();

        document.getElementById("btnInscribirme").onclick = () => {
            window.location.href = "../inscripcion.html?carrera=Ciencias%20de%20la%20Comunicacion";
        };