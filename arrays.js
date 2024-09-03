let palavraSecreta = "";
let tamanhoPalavra;
let letrasJaChutadas = "";
let letrasErradas = "";
let letrasAcertadas = "";
let tentativas = 0;
const maxTentativas = 6;
const hangmanImages = [
    'img/corpo0.jpeg', 
    'img/corpo1.jpeg',
    'img/corpo2.jpeg',
    'img/corpo3.jpeg',
    'img/corpo4.jpeg',
    'img/corpo5.jpeg',
    'img/corpo6.jpeg'
];

    function iniciarJogo() {
        while (!/^[A-Z]+$/.test(palavraSecreta)) {
        palavraSecreta = prompt("Digite a palavra secreta:").toUpperCase();}
        tamanhoPalavra = palavraSecreta.length;
        letrasJaChutadas = "";
        letrasErradas = "";
        letrasAcertadas = "";
        tentativas = 0;

        for (let i = 0; i < tamanhoPalavra; i++) {
            letrasAcertadas += "_";
        }

        //troca o "_" pela letra acertada
        document.getElementById('palavra').textContent = letrasAcertadas;
        //mostra as letras já chutadas pelo jogador
        document.getElementById('letrasChutadas').textContent = letrasJaChutadas;
        // Inicia com a imagem do bonequinho vazio
        document.getElementById('hangmanImage').src = hangmanImages[0]; 
        }

        function chutarLetra() {
        //converte a letra chutada do jogador para maiúscula
        let letraChutada = document.getElementById('chute').value.toUpperCase();
        //limpa o campo de entrada após o chute
        document.getElementById('chute').value = '';
            
        //para o usuário digitar apenas uma letra, e se ela esta ente a-z
        if (letraChutada.length !== 1 || !letraChutada.match(/[A-Z]/i)) {
            alert("Por favor, digite algo válido.");
            return;
        }

        if (letrasJaChutadas.includes(letraChutada) ||
            letrasAcertadas.includes(letraChutada)) {
            alert("Você já chutou essa letra! Tente outra.");
            return;
            }

            //adiciona as letras chutadas à letras já chutadas
            letrasJaChutadas += letraChutada;
            document.getElementById('letrasChutadas').textContent = letrasJaChutadas;

        if (palavraSecreta.includes(letraChutada)) {
            //analisa a palvra secreta do início ao fim e substitui cada "_" pela letraChutada se ela for estritamente igual(===) a palavraSecreta
            for (let i = 0; i < tamanhoPalavra; i++) {
                if (palavraSecreta[i] === letraChutada) {
                    letrasAcertadas = letrasAcertadas.substr(0, i) + letraChutada + letrasAcertadas.substr(i + 1);
                }
            }
            //atualiza o HTML com a nova letraAcertada
            document.getElementById('palavra').textContent = letrasAcertadas;

            if (letrasAcertadas === palavraSecreta) {
                //inícia o jogo novamente
                setTimeout(function() {
                alert('Parabéns! Você acertou a palavra secreta "' + palavraSecreta + '" com ' + (tentativas) + ' tentativas.');
                iniciarJogo();
                }, 100);
                }
            } else {
            //adiciona a letraChutada a letrasErradas
            letrasErradas += letraChutada + " ";
            //aumenta o número de tentativas
            tentativas++;
            document.getElementById('hangmanImage').src = hangmanImages[tentativas];

            //o jogo acaba se o máximo de tentativas for atingido e começa novamente
            if (tentativas === maxTentativas) {
                setTimeout(function() {
                alert('Game Over! A palavra secreta era "' + palavraSecreta + '".');
                iniciarJogo();
                }, 100);
                }
            }
        }

        //inícia o jogo quando a página for atualizada
        iniciarJogo();

        ///////////////////////////////////////////////////////////////////////////////////////////////
// Inicia o jogo quando a página for carregada
// window.onload = iniciarJogo;