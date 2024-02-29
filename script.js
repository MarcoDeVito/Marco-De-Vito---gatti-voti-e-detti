// Traccia 1
let gattiTotali = 42;
let gattiInFila = 6;

let fileGatti = Math.trunc(gattiTotali / gattiInFila);
let gattiMancanti = ((fileGatti + 1) * gattiInFila) - gattiTotali;
if (gattiMancanti === gattiInFila) {
    gattiMancanti=0;
} 

let gattiRimastiFuori = gattiTotali % gattiInFila;

console.log(`Ci sono ${fileGatti} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${gattiRimastiFuori}`);

// Traccia 2
let v = 18;
let giudizio;

if (v < 18) {
    giudizio = "insufficiente";
} else if (v >= 18 && v < 21) {
    giudizio = "sufficiente";
} else if (v >= 21 && v < 24) {
    giudizio = "buono";
} else if (v >= 24 && v < 27) {
    giudizio = "distinto";
} else if (v >= 27 && v <= 29) {
    giudizio = "ottimo";
} else if (v === 30) {
    giudizio = "eccellente";
}

console.log(giudizio);

switch (true) {
    case (v < 18):
        giudizio = "insufficiente";
        break;
    case (v >= 18 && v < 21):
        giudizio = "sufficiente";
        break;
    case (v >= 21 && v < 24):
        giudizio = "buono";
        break;
    case (v >= 24 && v < 27):
        giudizio = "distinto";
        break;
    case (v >= 27 && v <= 29):
        giudizio = "ottimo";
        break;
    case (v == 30):
        giudizio = "eccellente";
        break;

    default:
        break;
}

console.log(giudizio);

// Traccia 3 con if else
//let temperatura = parseFloat(prompt("Inserisci la temperatura:"));
let temperatura = 29; //<---questo l'ho messo come debug

if (temperatura < 20 && temperatura > 0) {
    console.log("Non ci sono più le mezze stagioni");
} else if (temperatura >= 30) {
    console.log("lu mare, lu sole, lu ientu");
} else if (temperatura < 30 && temperatura >= 20) {
    console.log("mi dia una peroni sudata");
} else if (temperatura < 0 && temperatura >= -10) {
    console.log("non e’ tanto il freddo quanto l'umidità");
} else if (temperatura < -10) {
    console.log("copriti…ancora ti raffreddi");
}

// Traccia 3 con switch case
switch (true) {
    case (temperatura < 20 && temperatura > 0):
        console.log("Non ci sono più le mezze stagioni");
        break;
    case (temperatura >= 30):
        console.log("lu mare, lu sole, lu ientu");
        break;
    case (temperatura < 30 && temperatura >= 20):
        console.log("mi dia una peroni sudata");
        break;
    case (temperatura < 0 && temperatura >= -10):
        console.log("non e’ tanto il freddo quanto l’umidità’");
        break;
    case (temperatura < -10):
        console.log("copriti…ancora ti raffreddi");
        break;
}
