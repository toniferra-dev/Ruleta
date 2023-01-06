// Variables
const miFormulario = document.querySelector("#mi-formulario");
const preguntaH4 = document.querySelector("#pregunta");
const respuestaH5 = document.querySelector("#respuesta");
const info = document.querySelector("#nota");



// FORMULARIO
// Recoger pregunta
miFormulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Evita que el formulario se envíe

    const miInput = document.querySelector("#mi-input");
    const valor = miInput.value;

    console.log(`El valor del input es: ${valor}`);


    // RESPUESTAS aleatorias
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
    // insertar los valores al h4 y h5
    preguntaH4.innerHTML = valor;
    respuestaH5.innerHTML = obtenerRespuesta();

    // limpiar input
    miInput.value = "";

    // información
    info.innerHTML = "Si no es la respuesta que esperabas, vuelve a probar."

});

