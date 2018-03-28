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


var calculadora = {
        operacion   : 0,
        total       : 0,
        temporal    : 0,
        totaltemp   : 0,
        decimal     :false,
        decimaltemp :0.1,
        decimalcant :0,
        boton: 0,
        tipo : 0,
        valordisplay : 0,
        valortemp : 0,
        contador : 0,
        negativo  :false,
    
    resultado:function(){
        switch(this.operacion){
            case 1:
                this.total = this.temporal + this.totaltemp + this.total;
                this.totaltemp = 0;
                this.valordisplay = 0;
                break;
            case 2:
                this.total = this.total + this.totaltemp - this.temporal;
                this.totaltemp = 0;
                break;
            case 3:
                this.total = this.total + this.totaltemp;
                this.total = this.total * this.temporal;
                this.totaltemp = 0;
                this.valordisplay = 0;
                break;
            case 4:
                this.total = this.total + this.totaltemp;
                this.total = this.total / this.temporal;
                this.totaltemp = 0;
                this.valordisplay = 0;
                break;
        }
        
        pantalla.innerHTML =this.total;
        return;
    },

};

/*fin de variables*/

/* presion de botones de teclado */
on.onclick = function() {
    calculadora.boton = on;
    calculadora.tipo = 1;
    clickboton();
    limpiar();

}
sign.onclick = function() {
    calculadora.boton=sign;
    calculadora.tipo =1;
    clickboton();
    cambiosigno();
}

raiz.onclick = function() {
    calculadora.boton=raiz;
    calculadora.tipo = 1;
    clickboton();

}

dividido.onclick = function() {
    calculadora.boton=dividido;
    calculadora.tipo = 1;
    clickboton();
    calculadora.decimaltemp = 0.1;
    calculadora.decimal= false;

}
por.onclick = function() {
    calculadora.boton=por;
    calculadora.tipo = 1;
    clickboton();
    calculadora.decimaltemp = 0.1;
    calculadora.decimal= false;

}
menos.onclick = function() {
    calculadora.boton=menos;
    calculadora.tipo = 1;
    clickboton();
    calculadora.decimaltemp = 0.1;
    calculadora.decimal= false;

}
mas.onclick = function() {
    calculadora.tipo = 3;
    calculadora.boton=mas;
    calculadora.totaltemp = calculadora.totaltemp + calculadora.valordisplay;
    calculadora.valordisplay = 0;
    calculadora.operacion = 1;
    clickboton();
    calculadora.decimaltemp = 0.1;
    calculadora.decimal= false;
    calculadora.decimalcant = 0;
    
}

punto.onclick = function() {
    calculadora.tipo = 2;
    calculadora.boton=punto;
    clickboton();
    calculadora.decimal = true;

}
igual.onclick = function() {
    calculadora.tipo = 2;
    calculadora.boton=igual;
    calculadora.temporal=calculadora.valordisplay;
    clickboton();
    calculadora.resultado();

}

uno.onclick = function() {
    calculadora.tipo = 2;
    calculadora.boton=uno;
    calculadora.valortemp = 1;
    clickboton();
    mostrardisplay();
    
    //mostrardisplay();
}
dos.onclick = function() {
    calculadora.tipo = 2;
    calculadora.boton=dos;
    clickboton();
    calculadora.valortemp = 2;
    mostrardisplay();
}
tres.onclick = function() {
    calculadora.tipo = 2;
    calculadora.boton=tres;
    clickboton();
    calculadora.valortemp = 3;
    mostrardisplay();

}
cuatro.onclick = function() {
    calculadora.boton=cuatro;
    calculadora.tipo = 1;
    clickboton();
    calculadora.valortemp = 4;
    mostrardisplay();
}
cinco.onclick = function() {
    calculadora.boton=cinco;
    calculadora.tipo = 1;
    clickboton(); 
    calculadora.valortemp = 5;
    mostrardisplay();
}
seis.onclick = function() {
    calculadora.boton=seis;
    calculadora.tipo = 1;
    clickboton();
    calculadora.valortemp = 6;
    mostrardisplay();
}
siete.onclick = function() {
    calculadora.boton=siete;
    calculadora.tipo = 1;
    clickboton();
    calculadora.valortemp = 7;
    mostrardisplay();

}
ocho.onclick = function() {nueve
    calculadora.boton=ocho;
    calculadora.tipo = 1;
    clickboton();
    calculadora.valortemp = 8;
    mostrardisplay();

}
nueve.onclick = function() {
    calculadora.boton=nueve;
    calculadora.tipo = 1;
    clickboton();
    calculadora.valortemp = 9;
    mostrardisplay();

}
zero.onclick = function() {
    calculadora.boton=zero;
    calculadora.tipo = 2;
    clickboton();
    if(calculadora.valordisplay !== 0)
    {
        calculadora.valortemp = 0;
        mostrardisplay();  
    }
    

}
/* fin de teclado*/

/*animacion de teclado*/
function clickboton() {
    if(calculadora.tipo === 1){
        calculadora.boton.style.height = "58px";
        calculadora.boton.style.width = "20%";
        setTimeout(restaurarbtn, 100);
    }
    else if(calculadora.tipo === 2){
        calculadora.boton.style.height = "58px";
        calculadora.boton.style.width = "27%";
        setTimeout(restaurarbtn1, 100);
    }
    else if(calculadora.tipo === 3)
    {
            
            calculadora.boton.style.width = "70px";
            setTimeout(restaurarbtn2, 100);
    }

    
        function restaurarbtn() 
    {
            calculadora.boton.style.width = "22%"; 
            calculadora.boton.style.height = "62.91px";        

    }
        function restaurarbtn1() 
    {
            calculadora.boton.style.width = "29%"; 
            calculadora.boton.style.height = "62.91px";      

    }
        function restaurarbtn2()
    {
        
        calculadora.boton.style.width = "79px";
    }
    calculadora.tipo=0;
    return;
}
/*fin de animacion*/
/* visualizador de numeros digitados*/
function mostrardisplay(){
    if(calculadora.contador < 8)
    {
        if(calculadora.negativo){
            calculadora.valortemp = calculadora.valortemp * -1
        }
        
        if (calculadora.decimal){
            if(calculadora.valordisplay == 0){
                calculadora.contador = calculadora.contador + 1;
            }
            calculadora.valortemp= calculadora.valortemp * calculadora.decimaltemp;
            calculadora.decimaltemp = calculadora.decimaltemp * 0.1;
            calculadora.decimalcant = calculadora.decimalcant + 1;
            
        }
        else{
            calculadora.valordisplay = calculadora.valordisplay * 10;


        }


        calculadora.valordisplay = calculadora.valordisplay + calculadora.valortemp;
        pantalla.innerHTML  = calculadora.valordisplay.toFixed(calculadora.decimalcant);
        calculadora.contador = calculadora.contador + 1;
    }
    
    
}

function cambiosigno(){
    calculadora.valordisplay =  calculadora.valordisplay * -1; 
    pantalla.innerHTML  = calculadora.valordisplay;
    if(calculadora.valordisplay < 0){
        calculadora.negativo = true;
    }
    else{
        calculadora.negativo = false;
    }
       
}
function limpiar(){
    calculadora.tipo = 0;
    calculadora.valordisplay = 0;
    calculadora.valortemp = 0;
    calculadora.total = 0;
    calculadora.totaltemp= 0;
    calculadora.temporal =0;
    calculadora.contador = 0;
    calculadora.decimal = false;
    calculadora.negativo  = false;
    calculadora.decimaltemp = 0.1;
    calculadora.decimal= false;
    calculadora.decimalcant = 0;
    pantalla.innerHTML  = calculadora.valordisplay;
}
