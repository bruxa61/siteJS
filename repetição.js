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

// PALÍNDROMO
function palindromo() {

    const palavra = document.getElementById('entrada').value;

    let palavraReversa = '';
    let i = palavra.length - 1;

    do{
        palavraReversa += palavra[i];
        i--;
    } while (i >= 0);

    const resul = (palavra.toLowerCase() === palavraReversa.toLowerCase()) ? palavra + ' é um palídromo!' :  palavra + ' não é um palídromo.';

    document.getElementById('resul').innerText = resul;

}

//PAR OU ÍMPAR
function verificarParOuImpar() {
    let numero;
    do {
        numero = parseInt(document.getElementById('numeroInput').value);

        if (numero % 2 === 0) {
            document.getElementById('resultado').textContent = "O número " + numero + " é par.";
        } else {
            document.getElementById('resultado').textContent = "O número " + numero + " é ímpar.";
        }

    } while (false);
}