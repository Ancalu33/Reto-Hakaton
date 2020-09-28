let opcion;
let personaje;
let comenzar = document.getElementById('inicio');
var tarjeta = new Array( 
    {id:'uno',
    nombre:'Natalia', 
    cabello:'castaño',
    tcabello:'largo',
    tez:'blanca',
    fcabello:'liso',
    barba: 'no',
    seleccion: false},
    {id:'dos',
    nombre:'Marianela', 
    cabello:'castaño',
    tcabello:'largo',
    tez:'blanca',
    fcabello:'ondulado',
    barba: 'no',
    seleccion: false},
    {id:'tres',
    nombre:'Jorge', 
    cabello:'negro',
    tcabello:'corto',
    tez:'morena',
    fcabello:'liso',
    barba: 'si',
    seleccion: false},
    {id:'cuatro',
    nombre:'Andres', 
    cabello:'negro',
    tcabello:'corto',
    tez:'blanca',
    fcabello:'ondulado',
    barba: 'si',
    seleccion: false},
    {id:'cinco',
    nombre:'Alejandro', 
    cabello:'castaño',
    tcabello:'corto',
    tez:'trigueña',
    fcabello:'liso',
    barba: 'no',
    seleccion: false});

function uno(){
    alert("Seleccionaste la opcion 1. Buena eleccion")
    opcion = 1;
    personaje = tarjeta[0]
    jugar()
}
function dos(){
    opcion = 2;
    personaje = tarjeta[1]
    jugar()
}
function tres(){
    opcion = 3;
    personaje = tarjeta[2]
    jugar()
}
function cuatro(){
    opcion = 4;
    personaje = tarjeta[3]
    jugar()
}
function cinco(){
    opcion = 5;
    personaje = tarjeta[4]
    jugar()
}

function jugar(){
    switch (opcion){
        case 1:
            num1 += num2;
        break;
        case 2:
            num1 = num2 - num1;
        break;
        case 3:
            num1 *= num2;
        break;
        case 4:
            num1 = num2 / num1;
        break;
        case 5:
            num1 = Math.pow(num2, num1);
        break;
    }
}

comenzar.addEventListener('click',()=>{                      
    tarjeta.sort(function() {
        return Math.random() - 0.5;
        });
    for ( var i = 0 ; i < 5 ; i++ ) {
      var carta = tarjeta[i].id;
      var dato = document.getElementById(tarjeta[i].id);
      dato.dataset.valor = carta;
      }
      alert("por favor selecciona una de las cinco imagenes para iniciar la busqueda de tu personaje")
  })


var cartas = document.querySelectorAll("img");
  for (var x = 0; x < cartas.length; x++) {
    cartas[x].onclick = function() {
      window[this.id]();
    }
  }