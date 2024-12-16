var amigos = 6;
var totalCena = 120;
var bebidas = 18;

// Calcula o valor da cena descontando las bebidas

var cenaSinBebidas = totalCena - bebidas ;
console.log("cena sin bebidas = " + cenaSinBebidas);

// Calcula cuánto tendría que pagar cada comensal para dividir los costos de manera equitativa.

var valorPorAmigo = cenaSinBebidas / amigos;
console.log("valor por comensal = " + valorPorAmigo);
