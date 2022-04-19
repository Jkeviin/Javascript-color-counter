var rojo = document.getElementById("btnRojo");
var azul = document.getElementById("btnAzul");
var verde = document.getElementById("btnVerde");
var amarillo = document.getElementById("btnAmarillo");
var scores = document.getElementById("score")
var Maximo = document.getElementById("Maximo");
var Normal = document.getElementById("Normal");
var reiniciar = document.getElementById("btnReiniciar")

var reinicio = false;

var scores = 0;
var max_score = 0;

var parar = false;

var verificacion = 0;
var aciertos = 0;

var iniciador;
var colores = [];
var contador = 0;

function clickEmpezar(){
    rojo.style.visibility = 'visible';
    azul.style.visibility = 'visible';
    verde.style.visibility = 'visible';
    amarillo.style.visibility = 'visible';
    Maximo.style.visibility = 'visible';
    Normal.style.visibility = 'visible';
    clickSiguiente();
    document.getElementById("btnEmpezar").style.display = "none";
}

function secuencia() {
    switch(colores[contador]){
        case 0:
            document.getElementById("btnRojo").style.backgroundColor = "white";
            break;
        case 1:
            document.getElementById("btnAzul").style.backgroundColor = "white";
            break;
        case 2:
            document.getElementById("btnVerde").style.backgroundColor = "white";
            break;
        case 3:
            document.getElementById("btnAmarillo").style.backgroundColor = "white";
            break;
    }
    if(contador<=colores.length){
        contador++;
    }else{
        contador = 0;
        clearInterval(iniciador);
        parar = true;
    }
    if(parar == false){
        setTimeout("reiniciar_color()", 250)
    }
}

function clickSiguiente(){
    activar_boton();
    reinicio = false;
    if(contador == 0){
        parar = false;
    }
    colores.push(Math.floor((Math.random() * 4)));
    console.log(colores);
    iniciador = setInterval("secuencia()",500);
    document.getElementById("btnSiguiente").style.visibility = "hidden";
    verificacion = 0;
    document.getElementById("texto").textContent = "";
}

function reiniciar_color(){
    document.getElementById("btnRojo").style.backgroundColor = "red";
    document.getElementById("btnAzul").style.backgroundColor = "blue";
    document.getElementById("btnVerde").style.backgroundColor = "green";
    document.getElementById("btnAmarillo").style.backgroundColor = "orange";
}

function clickRojo(){
    comprobacion(rojo);
}
function clickAzul(){
    comprobacion(azul);
}
function clickVerde(){
    comprobacion(verde);
}
function clickAmarillo(){
    comprobacion(amarillo);
}

function comprobacion(a){

    if(a.value == colores[verificacion]){
        console.log(a.value);
        console.log(colores[verificacion]);
        verificacion++;
        aciertos++;
    }else{
        document.getElementById("texto").textContent = "FALLASTE";
        desactivar_boton();
        reiniciar.style.visibility = "visible";
        
    }
    if(aciertos == colores.length && reinicio ==  false){
        activar_boton();
        document.getElementById("btnSiguiente").style.visibility = "visible";
        document.getElementById("texto").textContent = "BIEN HECHO";
        scores++;
        document.getElementById("score").textContent = scores;
        aciertos  = 0;
    }
}

function reiniciarTodo(){
    reiniciar.style.visibility = "hidden";
    asingScore();
    reinicio = true;
    scores = 0;
    parar = false;
    verificacion = 0;
    aciertos = 0;
    iniciador;
    colores = [];
    contador = 0;
    clickSiguiente();
}

function activar_boton(){
    document.getElementById("btnRojo").disabled = false;
    document.getElementById("btnAzul").disabled = false;
    document.getElementById("btnVerde").disabled = false;
    document.getElementById("btnAmarillo").disabled = false;
}

function desactivar_boton(){
    document.getElementById("btnRojo").disabled = true;
    document.getElementById("btnAzul").disabled = true;
    document.getElementById("btnVerde").disabled = true;
    document.getElementById("btnAmarillo").disabled = true;
}

function asingScore(){
    if(max_score<=scores){
        max_score = scores;
    }
    document.getElementById("Maxscore").textContent = max_score;
    document.getElementById("score").textContent =  0;
}
