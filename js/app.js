/*variables principales*/

var calculadora = {
        on : document.getElementById('on'),
        sign : document.getElementById('sign'),
        raiz : document.getElementById('raiz'),
        uno : document.getElementById('1'),
        dos : document.getElementById('2'),
        tres : document.getElementById('3'),
        cuatro : document.getElementById('4'),
        cinco : document.getElementById('5'),
        seis : document.getElementById('6'),
        siete : document.getElementById('7'),
        ocho : document.getElementById('8'),
        nueve : document.getElementById('9'),
        zero : document.getElementById('0'),
        dividido : document.getElementById('dividido'),
        por : document.getElementById('por'),
        menos : document.getElementById('menos'),
        mas : document.getElementById('mas'),
        punto : document.getElementById('punto'),
        igual : document.getElementById('igual'),
        pantalla : document.getElementById('display'),
    
    //variables  para procesos
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
        igualnp : true,
    //validador
        valtem: "",
        valcant: 0,
    
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
        
        this.valrest();
        return;
    },
    limpiar:function (){
        this.tipo = 0;
        this.valordisplay = 0;
        this.valortemp = 0;
        this.total = 0;
        this.totaltemp= 0;
        this.temporal =0;
        this.contador = 0;
        this.decimal = false;
        this.negativo  = false;
        this.decimaltemp = 0.1;
        this.decimal= false;
        this.decimalcant = 0;
        this.operacion = 0;
        this.igualnp =true;
        this.pantalla.innerHTML  = this.valordisplay;
    },
    cambiosigno:function(){
    this.valordisplay =  this.valordisplay * -1; 
    this.pantalla.innerHTML  = this.valordisplay;
    if(this.valordisplay < 0){
        this.negativo = true;
    }
    else{
        this.negativo = false;
    }
       
},
    clickboton : function(){
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
    },
    valrest : function(){
        // validador de cantidad de numeros del resultado
        this.valtem = this.total.toString();
        this.valcant = this.valtem.length;
            
        if(this.total < 0){
            if(this.total <= -10000000){
                this.pantalla.innerHTML = this.valtem.substr(0,9);
            }else if(this.valcant > 9){
                this.pantalla.innerHTML = this.valtem.substr(0,10);
            }else{
                this.pantalla.innerHTML = this.total;
            }
            
        }else if(this.total > 0){
            if (this.total>=10000000){
                this.pantalla.innerHTML = this.valtem.substr(0,8);
            }else if(this.valcant > 8){
                this.pantalla.innerHTML = this.valtem.substr(0,9);
            }else{
                this.pantalla.innerHTML = this.total;
            }
        }
      
        
    },
    mostrardisplay: function(){
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
                calculadora.pantalla.innerHTML  = calculadora.valordisplay.toFixed(calculadora.decimalcant);
                calculadora.contador = calculadora.contador + 1;
            }
    },

    
    onboton : function(){
        calculadora.boton = calculadora.on;
        calculadora.tipo = 1;
        calculadora.clickboton();
        calculadora.limpiar();
    },
    signboton : function(){
        calculadora.boton=calculadora.sign;
        calculadora.tipo =1;
        calculadora.clickboton();
        calculadora.cambiosigno();
    },
    masboton : function(){       
        calculadora.tipo = 3;
        calculadora.boton=calculadora.mas;
        if (calculadora.operacion == 0){
            calculadora.totaltemp = calculadora.valordisplay;
        }else{
            calculadora.temporal = calculadora.valordisplay;
            if(calculadora.igualnp){
              calculadora.resultado();  
            }

        }
        calculadora.valordisplay = 0;
        calculadora.operacion = 1;
        calculadora.clickboton();
        calculadora.decimaltemp = 0.1;
        calculadora.decimal= false;
        calculadora.decimalcant = 0;
        this.pantalla.innerHTML ="";
    },
    menosboton: function(){
        calculadora.boton=calculadora.menos;
        calculadora.tipo = 1;
        calculadora.clickboton();
        if (calculadora.operacion === 0){
            calculadora.totaltemp = calculadora.valordisplay;
        }else{
            if(calculadora.igualnp){
              calculadora.resultado();  
            }
        }

        this.valordisplay = 0;
        this.operacion = 2;
        this.decimaltemp = 0.1;
        this.decimal= false;
        this.pantalla.innerHTML = "";
    },
    porboton: function(){
            calculadora.boton=calculadora.por;
            calculadora.tipo = 1;
                if (calculadora.operacion == 0){
                calculadora.totaltemp = calculadora.valordisplay;
            }else{
                if(calculadora.igualnp){
                  calculadora.resultado();  
                }
            }
            this.valordisplay = 0;
            this.operacion = 3;
            this.clickboton();
            this.decimaltemp = 0.1;
            this.decimal= false;
            this.pantalla.innerHTML="";
    },
    divididoboton: function(){
        calculadora.boton=calculadora.dividido;
        calculadora.tipo = 1;
        if (calculadora.operacion == 0){
            calculadora.totaltemp = calculadora.valordisplay;
        }else{
            if(calculadora.igualnp){
              calculadora.resultado();  
            }
        }
        calculadora.valordisplay = 0;
        calculadora.operacion = 4;
        calculadora.clickboton();
        calculadora.decimaltemp = 0.1;
        calculadora.decimal= false;
        this.pantalla.innerHTML = "";
    },

// fin calculadora
};

/*fin de variables*/

/* presion de botones de teclado */

calculadora.on.onclick = function() {
  calculadora.onboton();
}
calculadora.sign.onclick = function() {
    calculadora.signboton();
}

calculadora.raiz.onclick = function() {
    calculadora.boton=calculadora.raiz;
    calculadora.tipo = 1;
    calculadora.clickboton();

}

calculadora.dividido.onclick = function() {
    calculadora.divididoboton();

}
calculadora.por.onclick = function() {
    calculadora.porboton();

}
calculadora.menos.onclick = function() {
    calculadora.menosboton();

}
calculadora.mas.onclick = function() {
    calculadora.masboton();
    
 }

calculadora.punto.onclick = function() {
    calculadora.tipo = 2;
    calculadora.boton=calculadora.punto;
    calculadora.clickboton();
    calculadora.decimal = true;

}
calculadora.igual.onclick = function() {
    calculadora.tipo = 2;
    calculadora.boton=calculadora.igual; 
    calculadora.temporal= calculadora.valordisplay;
    calculadora.clickboton();
    calculadora.resultado();
    calculadora.igualnp = false;

}


//teclado numerico
calculadora.uno.onclick = function() {
    calculadora.tipo = 2;
    calculadora.boton=calculadora.uno;
    calculadora.valortemp = 1;
    calculadora.clickboton();
    calculadora.mostrardisplay();
    
    //mostrardisplay();
}
calculadora.dos.onclick = function() {
    calculadora.tipo = 2;
    calculadora.boton=calculadora.dos;
    calculadora.clickboton();
    calculadora.valortemp = 2;
    calculadora.mostrardisplay();
}
calculadora.tres.onclick = function() {
    calculadora.tipo = 2;
    calculadora.boton=calculadora.tres;
    calculadora.clickboton();
    calculadora.valortemp = 3;
    calculadora.mostrardisplay();

}
calculadora.cuatro.onclick = function() {
    calculadora.boton=calculadora.cuatro;
    calculadora.tipo = 1;
    calculadora.clickboton();
    calculadora.valortemp = 4;
    calculadora.mostrardisplay();
}
calculadora.cinco.onclick = function() {
    calculadora.boton=calculadora.cinco;
    calculadora.tipo = 1;
    calculadora.clickboton(); 
    calculadora.valortemp = 5;
    calculadora.mostrardisplay();
}
calculadora.seis.onclick = function() {
    calculadora.boton=calculadora.seis;
    calculadora.tipo = 1;
    calculadora.clickboton();
    calculadora.valortemp = 6;
    calculadora.mostrardisplay();
}
calculadora.siete.onclick = function() {
    calculadora.boton=calculadora.siete;
    calculadora.tipo = 1;
    calculadora.clickboton();
    calculadora.valortemp = 7;
    calculadora.mostrardisplay();

}
calculadora.ocho.onclick = function() {
    calculadora.boton=calculadora.ocho;
    calculadora.tipo = 1;
    calculadora.clickboton();
    calculadora.valortemp = 8;
    calculadora.mostrardisplay();

}
calculadora.nueve.onclick = function() {
    calculadora.boton=calculadora.nueve;
    calculadora.tipo = 1;
    calculadora.clickboton();
    calculadora.valortemp = 9;
    calculadora.mostrardisplay();

}
calculadora.zero.onclick = function() {
    calculadora.boton=calculadora.zero;
    calculadora.tipo = 2;
    calculadora.clickboton();
    if(calculadora.valordisplay !== 0)
    {
        calculadora.valortemp = 0;
        calculadora.mostrardisplay();  
    }
    

}
/* fin de teclado*/




