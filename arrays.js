//converte a string para maiúsculas
let palavraSecreta = prompt("Digite a palavra secreta:").toUpperCase();
//armazena o tamanho da palavra secreta em uma variável
let tamanhoPalavra = palavraSecreta.length;
let letrasJaChutadas = "";
let letrasErradas = "";
let letrasAcertadas = "";

//muda cada letra da palavra por _
for (let i = 0; i < tamanhoPalavra; i++){
    letrasAcertadas += "_";
}

//inicializa a quantidae de tentativas feitas pelo usuário
let tentativas = 0;
//número máximo de tentativas permitidas
const maxTentativas = 6;

while(tentativas < maxTentativas){
    let letraChutada = prompt('Palavra: ${letrasAcertadas}\nTentativas: ${tentativas}\nLetras já chutadas: ${letrasJaChutadas}\nLetras erradas: ${letrasErradas}\nDigite uma letra:').toUpperCase();
    
    if(letrasJaChutadas.includes(letraChutada) ||
    letrasAcertadas.includes(letraChutada) ||
    letrasErradas.includes(letraChutada)) {
        alert("Você já chutou essa letra! Tente outra.");
        continue;
    }

    if(palavraSecreta.includes(letraChutada)){
        for(let i = 0; i < tamanhoPalavra; i++){
            if(palavraSecreta[i] === letraChutada){
                letrasAcertadas = letrasAcertadas.substr(0, i) + letraChutada + letrasAcertadas.substr(i + 1);
            }
        }
    if(letrasAcertadas === palavraSecreta){
        alert('Parabéns! Você acertou a palavra secreta "')
    }
    }
}