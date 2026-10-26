// EJERCICIO 1: función anónima con el evento click.

// Seleccionamos el botón por su id y registramos la función
// que se ejecutará cuando el usuario haga clic.
document.getElementById("botonSumar").addEventListener("click", function (event) {

    // Evitamos que el formulario se envíe y recargue la página.
    event.preventDefault();

    // Obtenemos los valores escritos en los campos (llegan como texto).
    let valor1 = document.getElementById("n1").value;
    let valor2 = document.getElementById("n2").value;

    // Al escuchar el clic, required no valida: revisamos los vacíos con if.
    if (valor1 === "" || valor2 === "") {
        alert("Escribe los dos números.");
        return;
    }

    // Convertimos el texto a número y mostramos la suma.
    let n1 = Number(valor1);
    let n2 = Number(valor2);

    alert(`Suma: ${n1 + n2}`);
});
