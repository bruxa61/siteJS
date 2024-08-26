// Classificação de Filmes
function filmes() {
    const idade = document.getElementById('idade').value;
    const genero = document.getElementById('genero').value.toLowerCase();
    const resultado = document.getElementById('resultado');

    switch (true) {

        // CRIANÇAS
        case idade > 0 && idade <= 12:
            if (genero == 'animação'){
                resultado.textContent = 'Moranguinho';
            } else if (genero == 'aventura'){
                resultado.textContent = 'Doki'
            } else {
                resultado.textContent = 'Não temos recomendações para este gênero nesta faixa etária.';
            }
            break;

        // JOVENS
        case idade > 12 && idade < 18:
            if (genero == 'ação'){
                resultado.textContent = 'Hora de Aventura';
            } else if (genero == 'drama'){
                resultado.textContent = 'A Cinco Passos de Você';
            } else {
                resultado.textContent = 'Não temos recomendações para este gênero nesta faixa etária.';
            }
            break;

        // ADULTOS
        case idade > 17 && idade < 65:
            if (genero == 'comédia'){
                resultado.textContent = 'Gente Grande';
            } else if (genero == 'suspense'){
                resultado.textContent = 'O Oitavo Passageiro';
            } else {
                resultado.textContent = 'Não temos recomendações para este gênero nesta faixa etária.';
            }
            break;

        // IDOSOS
        case idade >= 65:
            if (genero == 'romance'){
                resultado.textContent = 'Como eu era antes de você';
            } else if (genero == 'documentário'){
                resultado.textContent = 'Senna';
            } else {
                resultado.textContent = 'Não temos recomendações para este gênero nesta faixa etária.';
            }
            break;

        default:
            resultado.textContent = 'Idade inválida.';
    }
}

// Recomendações de Roupas
function temperatura() {
    const graus = parseInt( document.getElementById('quentura').value);
    let temperatura = "" ;
    let roupa = ""
    switch (true) {
        
        case (graus < 15 ):
            temperatura = 'Frio';
            roupa = "casaco e luvas";
            break;

        case (graus < 25 ):
            temperatura = 'Ameno';
            roupa = "jaqueta e cachecol";
            break
        
        case (graus > 25 ):
            temperatura = 'Quente';
            roupa = "camisa e chapéu";
            break
    
    
        }
        document.getElementById("clima").textContent = "Está " + temperatura + "!! então você deverá usar " + roupa; 
}

// Calculadora de Frete
function calcularFrete() {
    const peso = parseFloat(document.getElementById("peso").value);
    const regiao = document.getElementById("regiao").value;
    let frete = 0;

    switch (regiao) {
        case "Norte":
            frete = (peso <= 5) ? 15 : 25;
            break;
        case "Sul":
            frete = (peso <= 5) ? 10 : 20;
            break;
        case "Centro-Oeste":
            frete = (peso <= 5) ? 12 : 22;
            break;
        default:
            frete = "Região inválida";
            break;
    }

    document.getElementById("resultado").textContent = "O valor do frete é: R$" + frete;
}

// Validação de Senha
function validarSenha() {
    const senha = document.getElementById("senha").value;
    let resultado = "";
    if (senha.length < 8 || senha.length > 16) {
        resultado = "A senha deve ter entre 8 e 16 caracteres.";
    }
    else if (!/[A-Z]/.test(senha)) {
        resultado = "A senha deve conter pelo menos uma letra maiúscula.";
    }
    else if (!/[0-9]/.test(senha)) {
        resultado = "A senha deve conter pelo menos um número.";
    }
    else if (!/[@#$%&*]/.test(senha)) {
        resultado = "A senha deve conter pelo menos um caractere especial (@, #, $, %, &, *).";
    } 
    else {
        resultado = "Senha válida. Seja Bem vindo!";
    }

    document.getElementById("resultado").textContent = resultado;
}

// Conversor de Moeda
function conversormoeda() {

    var valbr = parseFloat(document.getElementById("valor").value);
    var moeda = document.getElementById("moeda").value;

    switch (moeda) {
        
        case 'Dólar Americano': resultado = valbr / 5.0;
        break;
        
        case 'Euro': resultado = valbr / 5.5;
        break;
        
        case 'Libra Esterlina': resultado = valbr / 6.0;
        break;

        case 'Iene': resultado = valbr / 0.037;
        break;

        case 'Franco Suíço': resultado = valbr / 6.27;
        break;

        case 'Yuan Renminbi': resultado = valbr / 0.76;
        break;

        case 'Peso Argentino': resultado = valbr / 0.0057;
        break;

        case 'Lira Turca': resultado = valbr / 0.16;
        break;

        case 'Won': resultado = valbr / 0.0041;
        break;

        case 'Coroa Dinamarquesa': resultado = valbr / 0.80;
        break;

    }

    document.getElementById("resul").innerHTML = valbr + " BRL = " + resultado.toFixed(2) + " " + moeda;

}

// Calculadora de Pontuação de Jogo
function calcularNivel() {
    const score = parseInt(document.getElementById("score").value);
    let nivel = "";

    switch (true) {
        case (score >= 0 && score < 200):
            nivel = "Iniciante";
            break;
        case (score >= 200 && score < 500):
            nivel = "Intermediário";
            break;
        case (score >= 500 && score < 1000):
            nivel = "Avançado";
            break;
        case (score >= 1000):
            nivel = "Mestre";
            break;
        default:
            nivel = "Pontuação inválida";
    }

    document.getElementById("resultado").textContent = `Nível do jogador: ${nivel}`;
}