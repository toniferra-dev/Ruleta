const miFormulario = document.querySelector("#mi-formulario");

const preguntaH3 = document.querySelector("#pregunta");
const respuestaH4 = document.querySelector("#respuesta");




// Recoger pregunta
miFormulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Evita que el formulario se envíe

    const miInput = document.querySelector("#mi-input");
    const valor = miInput.value;

    console.log(`El valor del input es: ${valor}`);





// Crea una matriz de respuestas posibles
const respuestas = [
    "Sí",
    "No",
    "Tal vez",
    "Es posible",
    "Probablemente no"
];

// Esta función devuelve una respuesta aleatoria de la matriz
function obtenerRespuesta() {
    const indiceAleatorio = Math.floor(Math.random() * respuestas.length);
    return respuestas[indiceAleatorio];
}

// Pregunta al usuario una pregunta y muestra una respuesta aleatoria
// const pregunta = prompt("¿Tienes una pregunta para mí?");


preguntaH3.innerHTML = obtenerRespuesta();
// respuestaH4.innerHTML = valor;

});

