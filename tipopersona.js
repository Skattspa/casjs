function Persona(altura, peso)
{
    this.altura = altura;
    this.peso = peso;
}

Persona.prototype =
{
    calcularIMCNumero : function () {

        return this.peso / Math.pow(this.altura, 2);

    },
    calcularIMCTexto : function () {

        var resultado = "";

        var IMC = parseInt(this.calcularIMCNumero(this.altura, this.peso));
        //console.log(IMC);
        
        switch(true) {
            case (IMC < 16):
                resultado = "desnutrido";
                break;
            case (IMC < 18):
                resultado = "delgado";
                break;
            case (IMC < 25):
                resultado = "ideal";
                break;
            case (IMC < 31):
                resultado = "sobrepeso";
                break;
            case (IMC >= 31):
                resultado = "obeso";
                break;
            default:
                resultado = "Nunca deberías haber llegado aquí";
                break;
        }

        return resultado;

    } 
}
/*
var unaPersona = new Persona (1.80, 80);

console.log(unaPersona.calcularIMCNumero());
console.log(unaPersona.calcularIMCTexto());*/