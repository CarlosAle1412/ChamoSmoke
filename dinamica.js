// Esperamos a que la página termine de cargar

document.addEventListener("DOMContentLoaded", function () {

    // VERIFICACIÓN DE EDAD

    const edad = document.getElementById("edad");
    const edadSi = document.getElementById("edadSi");
    const edadNo = document.getElementById("edadNo");
    const edadMensaje = document.getElementById("edadMensaje");

    let confirmado = false;

    try {
        confirmado = localStorage.getItem("mayorDeEdad") === "si";
    } catch (e) {}

    if (confirmado) {
        edad.remove();
    } else {
        document.body.classList.add("bloqueado");
    }

    edadSi.addEventListener("click", function () {
        try {
            localStorage.setItem("mayorDeEdad", "si");
        } catch (e) {}
        edad.remove();
        document.body.classList.remove("bloqueado");
    });

    edadNo.addEventListener("click", function () {
        edadMensaje.textContent =
            "Lo sentimos, este sitio es solo para mayores de 18 años.";
    });

});