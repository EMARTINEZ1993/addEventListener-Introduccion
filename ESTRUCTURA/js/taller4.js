// TALLER 4: Formulario de registro.

// 1. Seleccionamos el formulario y el párrafo de resultados.
let formulario = document.getElementById("formTaller4");
let resultado = document.getElementById("resultado");

// 2. Registramos la función validarRegistro (sin paréntesis).
formulario.addEventListener("submit", validarRegistro);

function validarRegistro(event) {

    // Evitamos que la página se recargue.
    event.preventDefault();

    // 3. Obtener los valores de los campos.
    let nombre = document.getElementById("nombre").value.trim();
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value.trim();
    let clave = document.getElementById("clave").value;
    let confirmar = document.getElementById("confirmar").value;

    // 4. Validar en el orden indicado. Si algo está mal: mostrar el error y usar return.
    if (nombre === "") {
        resultado.textContent = "Escribe tu nombre.";
        resultado.className = "mensaje error";
        return;
    }

    if (edad === "") {
        resultado.textContent = "Escribe tu edad.";
        resultado.className = "mensaje error";
        return;
    }

    let edadNumero = Number(edad);

    if (!Number.isInteger(edadNumero) || edadNumero < 18 || edadNumero > 100) {
        resultado.textContent = "La edad debe ser un número entero entre 18 y 100.";
        resultado.className = "mensaje error";
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        resultado.textContent = "Escribe un correo válido.";
        resultado.className = "mensaje error";
        return;
    }

    if (confirmar !== clave) {
        resultado.textContent = "Las contraseñas no coinciden.";
        resultado.className = "mensaje error";
        return;
    }

    // 5. Si todo está bien: mostrar el resultado.
    resultado.textContent = `Registro exitoso. Bienvenido(a), ${nombre}.`;
    resultado.className = "mensaje exito";
}
