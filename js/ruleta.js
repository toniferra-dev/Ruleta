// Variables
const boton = document.querySelector("#btnexcusa");
// const preguntaH4 = document.querySelector("#pregunta");
const respuestaH5 = document.querySelector("#respuesta");
const info = document.querySelector("#nota");



// FORMULARIO
// Recoger pregunta
boton.addEventListener("click", function (evento) {

    // RESPUESTAS aleatorias
    // Crea una matriz de respuestas posibles
    const respuestas = [
        "Ellos se lo pierden",
        "Me da pereza",
        "No va conmigo",
        "Ya veré que se puede hacer",
        "Es que genera envidias",
        "No nos da la vida",
        "No tengo tiempo",
        "Tengo que hablarlo con Penélope",
        "No me gusta repetir juegos",
        "Tengo el coche averiado",
        "Penélope no abre la cartera",
        "No es nuestro target",
        "🤷🏻‍♂️",
        "😂",
        "El manual es un infierno",
        "Tiene erratas",
        "No lo hace FFG",
        "Me duele la espalda",
        "Te escribo por privado",
        "Estoy castigado",
        "Eso es un euro",
        "Tengo a la niña",
        "Bueno, ya son las 21h...",
        "Mi madre no me deja",
        "Eso es fanmade",
        "No me estas remando en la dirección adecuada",
        "Así no ayudas"
    ];

    // Esta función devuelve una respuesta aleatoria de la matriz
    function obtenerRespuesta() {
        const indiceAleatorio = Math.floor(Math.random() * respuestas.length);
        return respuestas[indiceAleatorio];
    }
    // insertar los valores al h4 y h5
    // preguntaH4.innerHTML = valor;
    respuestaH5.innerHTML = obtenerRespuesta();

    // información
    info.innerHTML = "* Si no es la respuesta que esperabas, vuelve a probar."

});

