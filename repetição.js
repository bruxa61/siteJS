// JOGO DE ADIVINHÇÃO
function adivinhar(){
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let palpite;
let tentativas = 0;

console.log(numeroAleatorio)
while (palpite !== numeroAleatorio){
    palpite = parseInt(prompt("Adivinhe o número de 1 à 100: "));
    tentativas ++;

    if (palpite > 100 || palpite < 1){
    alert("Número inválido")
    }
    else if(palpite === numeroAleatorio){
        alert("Parabéns! Você acertou o número!")
    break;
    } else if(palpite > numeroAleatorio){
        alert("Você errou, o número é menor")
    } else if (palpite < numeroAleatorio){
    alert("Você errou, o número é maior")
}
}
}