// EJERCICIO 2: función con nombre con el evento click.

// Seleccionamos el botón que activará la operación.
let botonRestar = document.getElementById("botonRestar");

// Registramos la función resta SIN paréntesis:
// así se ejecuta cuando ocurra el clic y no al cargar la página.
botonRestar.addEventListener("click", resta);

function resta(event) {

    // Evitamos el envío predeterminado del formulario.
    event.preventDefault();

    let valor1 = document.getElementById("num1").value;
    let valor2 = document.getElementById("num2").value;

    // Revisamos que ningún campo esté vacío.
    if (valor1 === "" || valor2 === "") {
        alert("Escribe los dos números.");
        return;
    }

    let resultado = Number(valor1) - Number(valor2);
    alert(`Resta: ${resultado}`);
}
