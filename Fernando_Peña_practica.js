/*var palabrasDificil = ["electroencefalografista","esternocleidomastoideo","electroencefalográfico","anticonstitucionalidad","electroencefalografia","contrarrevolucionario","desoxirribonucleotido","interdisciplinariedad","otorrinolaringologico","antinorteamericanismo","constitucionalizacion","corresponsabilizacion","preterintencionalidad","pseudohermafroditismo","electroencefalograma"];
var palabrasNormales =["cabeza","	calles","cascos","encaje","enfado","exacto","europa","huella","huerto","huelen","helado","halago","juicio","jardín","juegos","llover","llorar","morado","mostrar","musica"];
var palabrasFacil =["feo","dar","ver","uso","rio","rol","paz","rey","pan","mal","hoy","mar","adn","ano","uva","ave","ola","gps","pez","red","res","oro","ego","sal","gay","mil","rie",]
//var palabrasDificilAle = palabrasDificil[Math.floor(Math.random() * palabras.length)];
//var palabrasNomralesAle = palabrasNormales[Math.floor(Math.random() * palabras.length)];
//var palabrasFacilesAle = palabrasFacil[Math.floor(Math.random() * palabras.length)];
var tiempoRestante;
let palabraSeleccionada; 
let letrasAdivinadas; 
let numeroIntentos; 
var temporizador;
var puntuacion = 0;
var tiempo = 0;
var imagenesFallo = ["Cabeza.PNG", "Cuerpo.PNG", "BrazoIzquierdo.PNG","BrazoDerecho.PNG","PiernaIzquierda.PNG","PiernaDerecha_cuerpoEntero.PNG"];

// Obtén los elementos de los botones
const botonFacil = document.getElementById("facil");
const botonMedio = document.getElementById("medio");
const botonDificil = document.getElementById("dificil");*/

document.querySelector('#calcular').addEventListener('click', ()=>{
  alert(1)
});

/*
// Agrega event listeners a los botones
botonFacil.addEventListener("click", function() {
  iniciarJuego(palabrasFacil);
});

botonMedio.addEventListener("click", function() {
  iniciarJuego(palabrasNormales);
});

botonDificil.addEventListener("click", function() {
  iniciarJuego(palabrasDificil);
});



function iniciarJuego(palabrasSeleccionadas) {
  // Seleccionar una palabra aleatoria
  const indiceAleatorio = Math.floor(Math.random() * palabrasSeleccionadas.length);
  palabraSeleccionada = palabrasSeleccionadas[indiceAleatorio];

  // Restablecer las letras adivinadas, los intentos, las imágenes del ahorcado, el tiempo de inicio y la puntuación
  letrasAdivinadas = [];
  numeroIntentos = 0;
  imagenesAhorcado = document.querySelectorAll("#imagenes-ahorcado img");
  ocultarImagenesAhorcado();
  tiempoInicio = Date.now();
  puntuacion = 0;

  // Mostrar la palabra a adivinar
  mostrarPalabraAdivinar();
}

function ocultarImagenesAhorcado() {
  imagenesAhorcado.forEach(function(imagen) {
    imagen.style.display = "none";
  });
}

function mostrarPalabraAdivinar() {
  var palabraAdivinar = document.getElementById("palabra-adivinar");
  palabraAdivinar.innerHTML = "";

  for (var i = 0; i < palabraSeleccionada.length; i++) {
    var letra = palabraSeleccionada[i];
    var span = document.createElement("span");
    span.textContent = letrasAdivinadas.includes(letra) ? letra : "_";
    palabraAdivinar.appendChild(span);
  }
}

/*function iniciarTemporizador(tiempo) {
  tiempoRestante = tiempo;
  actualizarTemporizador();
  temporizador = setTimeout(function() {
    alert("¡Se acabó el tiempo!");
  }, tiempo * 1000);
}

function actualizarTemporizador() {
  var contador = document.getElementById("contador");
  contador.innerHTML = "Tiempo restante: " + tiempoRestante;
  if (tiempoRestante === 0) {
    clearTimeout(temporizador);
    alert("¡Se acabó el tiempo!");
  } else {
    tiempoRestante--;
    setTimeout(actualizarTemporizador, 1000);
  }
}

function detenerTemporizador() {
  clearTimeout(temporizador);
}

document.getElementById("puntuacion").innerHTML = puntuacion;
document.getElementById("contador").innerHTML = "Tiempo restante: " + tiempo + " segundos";

function iniciar() {
  iniciarTemporizador();
}*/
