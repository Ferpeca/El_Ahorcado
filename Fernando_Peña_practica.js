var palabrasDificil = ["electroencefalografista","esternocleidomastoideo","electroencefalográfico","anticonstitucionalidad","electroencefalografia","contrarrevolucionario","desoxirribonucleotido","interdisciplinariedad","otorrinolaringologico","antinorteamericanismo","constitucionalizacion","corresponsabilizacion","preterintencionalidad","pseudohermafroditismo","electroencefalograma"];
var palabrasNormales =["cabeza","	calles","cascos","encaje","enfado","exacto","europa","huella","huerto","huelen","helado","halago","juicio","jardín","juegos","llover","llorar","morado","mostrar","musica"];
var palabrasFacil =["feo","dar","ver","uso","rio","rol","paz","rey","pan","mal","hoy","mar","adn","ano","uva","ave","ola","gps","pez","red","res","oro","ego","sal","gay","mil","rie",]
var palabrasDificilAle = palabrasDificil[Math.floor(Math.random() * palabras.length)];
var palabrasNomralesAle = palabrasNormales[Math.floor(Math.random() * palabras.length)];
var palabrasFacilesAle = palabrasFacil[Math.floor(Math.random() * palabras.length)];
var hombre, l;
var tiempoRestante;
var temporizador;
var puntuacion = 0;
var tiempo = 0;
var imagenesFallo = ["Cabeza.PNG", "Cuerpo.PNG", "BrazoIzquierdo.PNG","BrazoDerecho.PNG","PiernaIzquierda.PNG","PiernaDerecha_cuerpoEntero.PNG"];

function iniciarTemporizador(tiempo) {
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
  iniciarTemporizador(60);
}

function facil(){

  


}

