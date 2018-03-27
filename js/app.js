/*variables principales*/
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
var pantalla = document.getElementById('display');
var boton;
var tipo = 0;
var valordisplay = 0;
var valortemp = 0;
var contador = 0;
var negativo  = false;

var calculadora = {
        operacion   : 0,
        total       : 0,
        temporal    : 0,
        totaltemp   : 0,
        decimal     :false,
    
    resultado:function(){
        switch(this.operacion){
            case 1:
                this.total = this.temporal + this.totaltemp + this.total;
                this.totaltemp = 0;
                break;
            case 2:
                this.total = this.total + this.totaltemp - this.temporal;
                this.totaltemp = 0;
                break;
            case 3:
                this.total = this.total + this.totaltemp;
                this.total = this.total * this.temporal;
                this.totaltemp = 0;
                break;
            case 4:
                this.total = this.total + this.totaltemp;
                this.total = this.total / this.temporal;
                this.totaltemp = 0;
                break;
        }
        return this.total;
    },
    suma:function(){
        
    }
};

/*fin de variables*/

/* presion de botones de teclado */
on.onclick = function() {
    boton=on;
    tipo = 1;
    clickboton();
    limpiar();

}
sign.onclick = function() {
    boton=sign;
    tipo = 1;
    clickboton();
    cambiosigno();
}

raiz.onclick = function() {
    boton=raiz;
    tipo = 1;
    clickboton();

}

dividido.onclick = function() {
    boton=dividido;
    tipo = 1;
    clickboton();

}
por.onclick = function() {
    boton=por;
    tipo = 1;
    clickboton();

}
menos.onclick = function() {
    boton=menos;
    tipo = 1;
    clickboton();

}
mas.onclick = function() {
    tipo = 3;
    boton=mas;
    calculadora.temporal = valordisplay;
    valordisplay = 0;
    clickboton();
    
}

punto.onclick = function() {
    tipo = 2;
    boton=punto;
    clickboton();
    calculadora.decimal = true;

}
igual.onclick = function() {
    tipo = 2;
    boton=igual;
    clickboton();

}

uno.onclick = function() {
    tipo = 2;
    boton=uno;
    valortemp = 1;
    clickboton();
    mostrardisplay();
    
    //mostrardisplay();
}
dos.onclick = function() {
    tipo = 2;
    boton=dos;
    clickboton();
    valortemp = 2;
    mostrardisplay();
}
tres.onclick = function() {
    tipo = 2;
    boton=tres;
    clickboton();
    valortemp = 3;
    mostrardisplay();

}
cuatro.onclick = function() {
    boton=cuatro;
    tipo = 1;
    clickboton();
    valortemp = 4;
    mostrardisplay();
}
cinco.onclick = function() {
    boton=cinco;
    tipo = 1;
    clickboton(); 
    valortemp = 5;
    mostrardisplay();
}
seis.onclick = function() {
    boton=seis;
    tipo = 1;
    clickboton();
    valortemp = 6;
    mostrardisplay();
}
siete.onclick = function() {
    boton=siete;
    tipo = 1;
    clickboton();
    valortemp = 7;
    mostrardisplay();

}
ocho.onclick = function() {nueve
    boton=ocho;
    tipo = 1;
    clickboton();
    valortemp = 8;
    mostrardisplay();

}
nueve.onclick = function() {
    boton=nueve;
    tipo = 1;
    clickboton();
    valortemp = 9;
    mostrardisplay();

}
zero.onclick = function() {
    boton=zero;
    tipo = 2;
    clickboton();
    if(valordisplay !== 0)
    {
        valortemp = 0;
        mostrardisplay();  
    }
    

}
/* fin de teclado*/

/*animacion de teclado*/
function clickboton() {
    if(tipo === 1){
        boton.style.height = "58px";
        boton.style.width = "20%";
        setTimeout(restaurarbtn, 100);
    }
    else if(tipo === 2){
        boton.style.height = "58px";
        boton.style.width = "27%";
        setTimeout(restaurarbtn1, 100);
    }
    else if(tipo === 3)
    {
            
            boton.style.width = "70px";
            setTimeout(restaurarbtn2, 100);
    }

    
        function restaurarbtn() 
    {
            boton.style.width = "22%"; 
            boton.style.height = "62.91px";        

    }
        function restaurarbtn1() 
    {
            boton.style.width = "29%"; 
            boton.style.height = "62.91px";      

    }
        function restaurarbtn2()
    {
        
        boton.style.width = "79px";
    }
    tipo=0;
    return;
}
/*fin de animacion*/
/* visualizador de numeros digitados*/
function mostrardisplay(){
    if(contador < 8)
    {
        valordisplay = valordisplay*10;
        if(negativo){
            valortemp = valortemp * -1
        }
        valordisplay = valordisplay + valortemp;
        pantalla.innerHTML  = valordisplay;
        contador = contador + 1;
    }
    
    
}

function cambiosigno(){
    valordisplay =  valordisplay * -1; 
    pantalla.innerHTML  = valordisplay;
    if(valordisplay < 0){
        negativo = true;
    }
    else{
        negativo = false;
    }
       
}
function limpiar(){
    tipo = 0;
    valordisplay = 0;
    valortemp = 0;
    contador = 0;
    calculadora.decimal = false;
    negativo  = false;
    pantalla.innerHTML  = valordisplay;
}
