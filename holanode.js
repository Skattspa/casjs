function palabraDadaVuelta(cadena) {

    var cad_reves = "";
    var indice;
    var letraActual;

    for (indice = cadena.length - 1; indice >= 0; indice--) {
        letraActual = cadena.charAt(indice);
        cad_reves = cad_reves + letraActual;
        console.log(" la palabra es....  " + cad_reves);
    }
    return cad_reves;
}

console.log("Este es mi primer node");
var cadreves = palabraDadaVuelta ("JUANITO");
console.log ("JUANITO al revés es " + cadreves);