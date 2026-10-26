// EJERCICIO 4: función con nombre con el evento submit.

let formularioDividir = document.getElementById("formularioDividir");

// Asociamos la función dividir al envío del formulario.
formularioDividir.addEventListener("submit", dividir);

function dividir(event) {

    event.preventDefault();

    let numero1 = Number(document.getElementById("numero11").value);
    let numero2 = Number(document.getElementById("numero21").value);

    // required no puede saber si el divisor es cero: lo revisamos con if.
    if (numero2 === 0) {
        alert("No es posible dividir entre cero.");
        return;
    }

    alert(`División: ${numero1 / numero2}`);
}
