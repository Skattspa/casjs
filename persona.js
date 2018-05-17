function Dni  (numero1)
{
    this.numero = numero1;
}

Dni.prototype = 
{
    calcularLetra : function ()
    {
        var letra = '';
        var SECUENCIA_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

        letra = SECUENCIA_DNI.charAt(this.numero%23);

        return letra;
    } 
}

//defino un método estático
Dni.esValido = function (cadena)
{
    var valido = false;

        valido = !isNaN(cadena)&&(cadena>0);

    return valido;
}

var dni = new Dni (53130984);
console.log (dni.numero);
console.log ("proto dni");
console.log (dni.__proto__);
var letra = dni.calcularLetra();
console.log (letra);
console.log (Dni.esValido(98));
console.log (Dni.esValido(-9898));
console.log (Dni.esValido('cas'));


/*var micadena = new String ("vale");
var micadmayus = micadena.toUpperCase();
var micadena2 = new String ("jose");
var micadmayus2 = micadena2.toUpperCase();
console.log(micadmayus);
console.log(micadmayus2);
var n_aleatorio = Math.random();
console.log(n_aleatorio);*/