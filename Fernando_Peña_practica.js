

//Seccion de variables que empleamos
let palabrejas; // Variable para almacenar la palabra a adivinar
let errores = 0; // Contador de errores
let aciertos = 0; // Contador de aciertos
let puntuacion = 0; // Puntuación de la partida
let timeout; // Timeout para la cuenta regresiva
let puntuacionInterval; // variable para guardar la puntuación


const palabras = ['camiseta', 'mariposa', 'cadaver', 'vikingo', 'baloncesto', 'matrimonio','atacar','viaje','erosionar','tijeras','chispa','anillo','hijo','cubiertos','municipalidad','archivar','falsificacion','eternidad','experimento','bermudas','desenrollar','necesito','aprobar','unica','asignatura','quedar','favor','desastre','tristeza','ansiedad','miedo','tiempo','timbre'];


//ACUERDATE!! es una función auxiliar que se utiliza para coger un elemento del DOM por su ID. El str representa el ID del elemento que se desea coger, y utiliza la función document.getElementById(str) para buscar y devolver ese elemento.
function id(str) {
    return document.getElementById(str)
}

// Selección de elementos del DOM
const btn = id('jugar'); // Botón jugar
const imagen = id('imagen'); // Elemento de imagen
const btn_letras = document.querySelectorAll("#letras button"); // Botones de letras
const reiniciarBtn = id('reiniciar'); // Botón reiniciar

// Este evento se activa cuando se hace clic en el botón de reinicio (reiniciarBtn). Al hacer clic, se llama a la función reiniciar
reiniciarBtn.addEventListener('click', reiniciar);

//Este evento se activa cuando se hace clic en el botón de jugar (btn). Al hacer clic, se llama a la función iniciar.
btn.addEventListener('click', iniciar);

//Utiliza el método querySelector para seleccionar el main.
const main = document.querySelector('main');


//Con este evento lo que hago es que cada vez que se presione la "c" se cambie el fondo del body a azul 
document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 'c') {
        //Se utiliza el metodo getComputedStyle para coger el fondo que ya hay y se compara con el color a cambiar, si coincide se cambia a azul y si no a blanco
        if (getComputedStyle(document.body).backgroundColor === 'rgb(173, 216, 230)') {
            document.body.style.backgroundColor = ''; // Restaurar el color de fondo original del body
        } else {
            document.body.style.backgroundColor = 'rgb(173, 216, 230)'; // Cambiar el color de fondo del body a azul claro
        }
        //Se de tiene para que no haya propagacion a otros elementos
        event.stopPropagation();

        //Si la tecla no es "c" y es "d" se hace lo mismo que el anterior pero sin metodo ya que tenemos un color asignado 
    } else if (event.key.toLowerCase() === 'd') {
        if (main.style.backgroundColor === 'rgb(144, 238, 144)') {
            main.style.backgroundColor = ''; // Restaurar el color de fondo original del main
        } else {
            main.style.backgroundColor = 'rgb(144, 238, 144)'; // Cambiar el color de fondo del main a verde claro
        }
        //Se de tiene para que no haya propagacion a otros elementos
        event.stopPropagation();
    }
});

btn.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'rgb(255, 182, 193)'; // Cambiar el color de fondo del botón "obtener palabra" a rosado claro
});

btn.addEventListener('mouseout', function (event) {
    event.target.style.backgroundColor = ''; // Restaurar el color de fondo original del botón "obtener palabra"
});

reiniciarBtn.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'rgb(255, 255, 153)'; // Cambiar el color de fondo del botón "reiniciar" a amarillo claro
});

reiniciarBtn.addEventListener('mouseout', function (event) {
    event.target.style.backgroundColor = ''; // Restaurar el color de fondo original del botón "reiniciar"
});


// Sirve para iniciar la cuenta regresiva
// Utiliza una promesa para manejar la cuenta regresiva y notificar cuando se inicia correctamente.
function iniciarCuentaRegresiva() {
  return new Promise((resolve) => {

    //pone 120 en el contenedor con id "contenedor"
    const contadorElement = id('contador');
    contadorElement.innerHTML = '120';

    let contador = 120;
    //Hace la cuenta regresiva y si llega a 0 manda un mensaje y activa la funcion game_over, si no, sigue contando
    function actualizarContador() {
      contador--;
      contadorElement.innerHTML = contador;

      if (contador === 0) {
        id('resultado').innerHTML = "¡Tiempo agotado!";
        game_over();
      } else {
        timeout = setTimeout(actualizarContador, 1000);
      }
    }

    timeout = setTimeout(actualizarContador, 1000);
    resolve(); // Resolver la promesa una vez que se inicie la cuenta regresiva
  });
}

function reiniciarCuentaRegresiva() {
  if (timeout) {
    clearTimeout(timeout); // Cancela la cuenta regresiva actual si existe
  }
  }
  

  iniciarCuentaRegresiva()
    .then(() => {
      console.log('La cuenta regresiva ha finalizado');
      // Aquí puedes realizar otras acciones o verificaciones adicionales
    })
    .catch((error) => {
      console.log('Error: ' + error);
      // Aquí puedes realizar las acciones necesarias para manejar el fin del juego debido a tiempo agotado
    });


//Esta funcion nos va ayudar a sacar una palabra del array en iniciar ejerciendo como indice
function obtener_random(num_min, num_max) {
  const amplitud_valores = num_max - num_min; // son saca la amplitud de palabras que hay en la array, si necesito sacar un numero de 10 al 20, si lo rento tengo la amplitud, qeu son 10, en este caso igual
  const valor_al_azar = Math.floor(Math.random() * amplitud_valores) + num_min;//Se utilizara mas adelante para generar un numero aletario que sera la posicion la palbra en la array por ende la palabra
  return valor_al_azar; //Para cuando llame a la funcion devuelva ese numero

}
/*La función iniciar en la cual reflejo el estado inicial del juego y preparo los elementos necesarios para que el jugador 
comience a adivinar una palabra.*/
 function iniciar(event) {

  // Establecer la imagen de inicio
  imagen.src = "Imagenes/img0.png";

  puntuaciones = [];

//cada vez que se inicie no aparezca el resultado de si has perdido o ganado
  id('resultado').innerHTML = "";
  

  // Desactivar el botón "Obtener palabra" para que tengas que jugar esa palabra si o si
  btn.disabled = true;

  // Reiniciar los contadores de errores y aciertos
  errores = 0;
  aciertos = 0;

  // Limpiar el contenido de la palabra a adivinar
  const parrafo = id('palabra_a_adivinar');
  parrafo.innerHTML = ""; //es importante limpiar el parrafo porque si no cada vez que le de al boton para conseguir una palabra nueva, se va a sumar a la anterior

  // Obtener la cantidad de palabras disponibles
  const cant_palabras = palabras.length;

  // Generar un número aleatorio para seleccionar una palabra
  const valor_al_azar =  obtener_random(0, cant_palabras);

  // Asignar la palabra seleccionada a la variable palabrejas
  palabrejas = palabras[valor_al_azar];
  console.log(palabrejas);

  // Obtener la cantidad de letras de la palabra
  const cant_letras = palabrejas.length;

  // Habilitar los botones de letras
  for (let i = 0; i < btn_letras.length; i++) {
      btn_letras[i].disabled = false;
  }

  // Crear un span para cada letra de la palabra a adivinar
  for (let i = 0; i < cant_letras; i++) {
      const span = document.createElement('span');
      parrafo.appendChild(span);
  }

  // Iniciar el intervalo para guardar la puntuación periódicamente
  puntuacionInterval = setInterval(guardarPuntuacion,10000);


}



for (let i = 0; i < btn_letras.length; i++) {
  btn_letras[i].addEventListener('click', click_letras);

}


/*Esta funcion se se encarga de procesar el clic en una letra adivinada, actualizar la interfaz 
de usuario en función de si la letra es correcta o incorrecta*/
function click_letras(event) {

  // Obtener todos los elementos <span> que representan las letras de la palabra a adivinar
  const spans = document.querySelectorAll('#palabra_a_adivinar span')

  // Obtener el botón en el que se hizo clic
  const boton = event.target;

  // Deshabilitar el botón para evitar más clics cuando ya se ha pulsado
  boton.disabled = true;
  
  //convertir la letra y la palabra a minuscula
  const letra = boton.innerHTML.toLowerCase();
  const palabra = palabrejas.toLowerCase();

  //para saber si se ha acertado una letra o no
  let acierto = false;


  // Recorrer cada letra de la palabra a adivinar
  for (let i = 0; i < palabra.length; i++) {
      // Si la letra adivinada coincide con una letra de la palabra en la posición i
      if (letra == palabra[i]) {
          // Actualizar el contenido del <span> correspondiente con la letra adivinada
          spans[i].innerHTML = letra;

          // Incrementar el contador de aciertos
          aciertos++;

          // Indicar que se ha acertado una letra
          acierto = true;
        
      }
  }
  // Si no se ha acertado ninguna letra
  if (acierto == false) {
      // Incrementar el contador de errores
      errores++;

      // Construir la ruta de la imagen correspondiente al número de errores
      const fuente = `Imagenes/img${errores}.png`;

      // Seleccionar la imagen y actualizar su atributo src con la ruta de la imagen
      const imagen = id(`imagen`);
      imagen.src = fuente;
  }

  // Verificar si se ha alcanzado el límite de errores
  if (errores == 6) {
      // Actualizar el contenido del elemento con el id "resultado" para mostrar un mensaje de pérdida junto con la palabra a adivinar
      id('resultado').innerHTML = "Perdiste, la palabra era: " + palabrejas;

       // Deshabilitar el botón principal
       btn.disabled = true;
       guardarPuntuacion();

      // Realizar acciones para finalizar el juego
      game_over();

     


  } else if (aciertos == palabrejas.length) {

    btn.disabled = false;
      // Incrementar la puntuación en 2 puntos
      puntuacion += 2;

      // Actualizar el contenido del elemento con el id "puntuacion" para mostrar la puntuación actualizada
      id('puntuacion').textContent = 'Puntuación: ' + puntuacion;

      // Actualizar el contenido del elemento con el id "resultado" para mostrar un mensaje de victoria
      id('resultado').innerHTML = "¡FELICIDADES, HAS GANADO!"

  }
}

/*Esta funcion detiene el intervalo de puntuación, marca el juego como terminado, deshabilita los botones de letras*/
function game_over() {
  
  // Detener el intervalo que guarda la puntuación periódicamente
  clearInterval(puntuacionInterval);
  

  // Deshabilitar todos los botones de letras
  for (let i = 0; i < btn_letras.length; i++) {
      btn_letras[i].disabled = true;
  }

  //En caso de que se pierda que se detenga la cuenta atras 
  reiniciarCuentaRegresiva()
  guardarPuntuacion();
}

// Reinicia la cuenta regresiva y realiza las acciones necesarias para comenzar un nuevo juego.
function reiniciar() {
  
  errores = 0;
  aciertos = 0;
  puntuacion = 0;
  id('puntuacion').innerHTML = 'Puntuación: '+ puntuacion;


  //Vacia el mensaje de si has ganado o perdido
  id('resultado').innerHTML = "";

  //Borra las letras que hay puestas en la palabra
  const spans = document.querySelectorAll('#palabra_a_adivinar span');
  for (let i = 0; i < spans.length; i++) {
      spans[i].innerHTML = "";
  }

  //pone la imagen de 0
  const imagen = id('imagen');
  imagen.src = "Imagenes/img0.png";

  //Vuelve a habilitar las palabras
  for (let i = 0; i < btn_letras.length; i++) {
      btn_letras[i].disabled = false;
  }

  btn.disabled = false;

  clearTimeout(timeout); // Limpia el intervalo de tiempo anterior
  iniciarCuentaRegresiva();
  iniciar();


}

function guardarPuntuacion() {

  // Obtener las puntuaciones almacenadas en el LocalStorage
  let puntuaciones = localStorage.getItem('puntuaciones');

  // Convertir las puntuaciones a un arreglo.
  puntuaciones = puntuaciones ? JSON.parse(puntuaciones) : [];

  // Agregar la puntuación actual al arreglo de puntuaciones
  puntuaciones.push(puntuacion);

  // Guardar el arreglo de puntuaciones en el LocalStorage
  localStorage.setItem('puntuaciones', JSON.stringify(puntuaciones));

}







