function start(){
const array= []
    for (let i = 1;  i <= 3; i++) { 
        array.push(i);
}
const indiceAleatorio= Math.floor(Math.random() * array.length)
numeroElegido= array[indiceAleatorio];
console.log("Numero elegido por la CPU: "+ numeroElegido)
randomIcon()
let imagenAlex= document.getElementById("Alex");
    imagenAlex.src= "img/alex1.png";
let imagenJanken= document.getElementById("Janken");
    imagenJanken.src= "img/janken the great.png";
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
 //Aca estoy seguro que me la re mande he hice cualquier cosa llamando a un monton de funciones,
 //Podria de hecho crear solo tres funciones para las posibilidades de si perdes, empatas o ganas,
 //Y capaz lo haga pero otro dia, encima esta escrito el nombre de las funciones en ingles para flashear que soy bilingue,
 //Lo importante es que funciona y que se entiende la idea de lo que quiero hacer (creo)
function rock(){
 switch (numeroElegido){
    case 1:
    changeIconToRock();
    randomIconToRock();
    draw();
    break;
    case 2:
    changeIconToRock();
    randomIconToPaper();
    lose();
    break;
    case 3:
    changeIconToRock();
    randomIconToScissors();
    win();
    break;
 }
}
function paper(){
 switch (numeroElegido){
    case 1:
    changeIconToPaper();
    randomIconToRock();
    win();
    break;
    case 2:
    changeIconToPaper();
    randomIconToPaper();
    draw();
    break;
    case 3:
    changeIconToPaper();
    randomIconToScissors();
    lose()
    break;
 }
}
function scissors(){
switch (numeroElegido){
    case 1:
    changeIconToScissors();
    randomIconToRock();
    lose();
    break;
    case 2:
    changeIconToScissors();
    randomIconToPaper();
    win()
    break;
    case 3:
    changeIconToScissors();
    randomIconToScissors();
    lose();
    break;
 }
}

function win(){
let imagenAlex= document.getElementById("Alex");
    imagenAlex.src= "img/alexWin.png";
let imagenJanken= document.getElementById("Janken");
    imagenJanken.src= "img/jankenLose.png";
setTimeout(function(){
    alert("Ganaste! Derrotaste a la CPU!");
    start();
    }, 300);
}
function lose(){
let imagenAlex= document.getElementById("Alex");
    imagenAlex.src= "img/alexLose.png";
let imagenJanken= document.getElementById("Janken")
    imagenJanken.src= "img/jankenWin.png"
setTimeout(function(){
    alert("Perdiste! Te gano la CPU!");
    start();
    }, 300);
}
function draw(){
let imagenAlex= document.getElementById("Alex")
    imagenAlex.src= "img/alexLose.png";
let imagenJanken= document.getElementById("Janken")
    imagenJanken.src= "img/JankenLose.png"
setTimeout(function(){
    alert("Empate!");
    start();
    }, 300);
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
//Es que mira cuantas funciones hice XD