 // URL de Google Script
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx6oxZBs2ux33PeRgE_-BxXetFv9OfYXr_LbLe1qGr1ugosfW8PiHQ0Ded9_JMJ8N6z/exec";

        // Obtener carrera desde URL
        // ======================================


        const params = new URLSearchParams(window.location.search);
        // Aquí sacamos exactamente el texto después de la carrera como tal 
        const carrera = params.get("carrera");

        // Mostrara el nombre de la carrera en el formulario
        document.getElementById("nombreCarrera").textContent =
            carrera ? "Carrera: " + carrera : "Carrera no especificada";

        // Evento del formulario Detectar cuando hacen clic en "Enviar"
        // ==========================================
        document.getElementById("formInscripcion").addEventListener("submit", (e) => {
            // Evita que recargue la página automáticamente
            e.preventDefault();
            //Crear objeto con los datos del formulario
            // ================================
            const data = {
                nombre: document.getElementById("nombre").value,
                dni: document.getElementById("dni").value,
                correo: document.getElementById("correo").value,
                telefono: document.getElementById("telefono").value,
                turno: document.getElementById("turno").value,
                carrera: carrera   //lo que vino en el URL
            };

            fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then(() => {
                    document.getElementById("mensajeExito").style.display = "block";
                    setTimeout(() => {
                        window.location.href = "index.html";
                    }, 2000);
                })
                .catch(err => alert("Error al enviar: " + err));
        });