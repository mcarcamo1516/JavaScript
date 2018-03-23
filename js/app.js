var on = document.getElementById('on');
var sign = document.getElementById('sign');
var raiz = document.getElementById('raiz');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var zero = document.getElementById('0');
var dividido = document.getElementById('dividido');
var por = document.getElementById('por');
var menos = document.getElementById('menos');
var mas = document.getElementById('mas');
var punto = document.getElementById('punto');
var igual = document.getElementById('igual');
var boton;

on.onclick = function() {
    boton=on;
    clickboton();

}
sign.onclick = function() {
    boton=sign;
    clickboton();
}
raiz.onclick = function() {
    boton=raiz;
    clickboton();

}
dividido.onclick = function() {
    boton=dividido;
    clickboton();

}
por.onclick = function() {
    boton=por;
    clickboton();

}
menos.onclick = function() {
    boton=menos;
    clickboton();

}
mas.onclick = function() {
    mas.style.height = "130px";
    

}
punto.onclick = function() {
    punto.style.height = "60px";
    punto.style.width = "28%";

}
igual.onclick = function() {
    igual.style.height = "60px";
    igual.style.width = "28%";

}
uno.onclick = function() {
    uno.style.height = "60px";
    uno.style.width = "28%";
}
dos.onclick = function() {
    dos.style.height = "60px";
   dos.style.width = "28%";
}
tres.onclick = function() {
    tres.style.height = "60px";
    tres.style.width = "28%";

}
cuatro.onclick = function() {
    boton=cuatro;
    clickboton();
}
cinco.onclick = function() {
    boton=cinco;
    clickboton(); 
}
seis.onclick = function() {
    boton=seis;
    clickboton();
}
siete.onclick = function() {
    boton=siete;
    clickboton();

}
ocho.onclick = function() {nueve
    boton=ocho;
    clickboton();

}
nueve.onclick = function() {
    boton=nueve;
    clickboton();

}
zero.onclick = function() {
    zero.style.height = "60px";
    zero.style.width = "28%";
}


function clickboton() {
        boton.style.height = "60px";
        boton.style.width = "20%";
        setTimeout(restaurarbtn, 400);
    
        function restaurarbtn() 
    {
        boton.style.width = "21%"; 
        boton.style.height = "62.91px";
    }


}

