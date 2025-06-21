function start(){
const array= []
    for (let i = 1;  i <= 3; i++) { 
        array.push(i);
}
const indiceAleatorio= Math.floor(Math.random() * array.length)
numeroElegido= array[indiceAleatorio];
console.log("Numero elegido por la CPU: "+ numeroElegido)
randomIcon()
}
//
function randomIcon(){
let imagenes= ["img/Rock.png", "img/Paper.png", "img/scissors.png"]
let imagenRandom= document.getElementById("randomChoice")
let contador= 0;
setInterval(() => {
  imagenRandom.src= imagenes[contador];
  contador= (contador + 1) % imagenes.length; //Vuelve a 0 al final
}, 500);
 }
 //
function rock(){
 switch (numeroElegido){
    case 1:
    changeIconToRock();
    randomIconToRock();
    setTimeout(function(){
    alert("Empate!");
    start();
    }, 300);
    break;
    case 2:
    changeIconToRock();
    randomIconToPaper();
    setTimeout(function(){
    alert("Perdiste! Te gano la CPU!");
    start();
    }, 300);
    break;
    case 3:
    changeIconToRock();
    randomIconToScissors();
    setTimeout(function(){
    alert("Ganaste! Derrotaste a la CPU!");
    start();
    }, 300);
    break;
 }
}
function paper(){
 switch (numeroElegido){
    case 1:
    changeIconToPaper();
    randomIconToRock();
    setTimeout(function(){
    alert("Ganaste! Derrotaste a la CPU!")
    start()
    }, 300);
    break;
    case 2:
    changeIconToPaper();
    randomIconToPaper();
    setTimeout(function(){
    alert("Empate!")
    start()
    }, 300);
    break;
    case 3:
    changeIconToPaper();
    randomIconToScissors();
    setTimeout(function(){
    alert("Perdiste! Te gano la CPU!")
    start()
    }, 300);
    break;
 }
}
function scissors(){
switch (numeroElegido){
    case 1:
    changeIconToScissors();
    randomIconToRock();
    setTimeout(function(){
    alert("Perdiste! Te gano la CPU!")
    start()
    }, 300);
    break;
    case 2:
    changeIconToScissors();
    randomIconToPaper();
    setTimeout(function(){
    alert("Ganaste! Derrotaste a la CPU!")
    start()
    }, 300);
    break;
    case 3:
    changeIconToScissors();
    randomIconToScissors();
    setTimeout(function(){
    alert("Empate!")
    start()
    }, 300);
    break;
 }
}
function changeIconToRock(){
let imagen= document.getElementById("playerChoice");
    imagen.src= "img/Rock.png";
}
function changeIconToPaper(){
let imagen= document.getElementById("playerChoice");
    imagen.src= "img/Paper.png";
}
function changeIconToScissors(){
let imagen= document.getElementById("playerChoice")
    imagen.src= "img/scissors.png"
}
function randomIconToRock(){
let imagen= document.getElementById("randomChoice")
    imagen.src= "img/Rock.png"
}
function randomIconToPaper(){
let imagen= document.getElementById("randomChoice")
    imagen.src= "img/Paper.png"
}
function randomIconToScissors(){
let imagen= document.getElementById("randomChoice")
    imagen.src= "img/scissors.png"
}