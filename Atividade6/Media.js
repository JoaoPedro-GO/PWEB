var nome = prompt("Digite seu nome: ");
 var nota1 = parseFloat(prompt("Nota 1: "));
var nota2 = parseFloat(prompt("Nota 2: "));
var nota3 = parseFloat(prompt("Nota 3: "));
var nota4 = parseFloat(prompt("Nota 4: "));

var media = ((nota1 + nota2 + nota3 + nota4) / 4)

alert("Media = " + media.toFixed(2));
let resposta = confirm("Você tem certeza de que deseja continuar?");


if (resposta) {
    alert("Você escolheu 'OK'");
} else {
    alert("Você escolheu 'Cancelar'");
}