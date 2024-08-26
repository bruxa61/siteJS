// Jogo de Adivinhação:
function verificarPalpite() {
    var palpiteUsuario = parseInt(document.getElementById("palpite").value);
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    if (palpiteUsuario === numeroAleatorio) {
        document.getElementById("resultado").innerHTML = "Parabéns, você acertou!";
    } else {
        document.getElementById("resultado").innerHTML = "Tente novamente! O número era " + numeroAleatorio + ".";
    }
}

// Verificador de Ano Bissexto:
function bissexto() {

    let ano = parseInt(document.getElementById('ano').value)
    
    if ( ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        document.getElementById('resposta').innerHTML = "Seu ano é Bissexto" 
    }
    else {    
        document.getElementById('resposta').innerHTML = "Seu ano não é Bissexto" 
    }
    }

// Calculadora de Média Escolar
function verificarMedia() {

    var pro1 = parseInt(document.getElementById("1pro").value);
    var pro2 = parseInt(document.getElementById("2pro").value);
    var pro3 = parseInt(document.getElementById("3pro").value);
    var pro4 = parseInt(document.getElementById("4pro").value);

    let med = parseInt(pro1 + pro2 + pro3 + pro4) / 4;

    if(med >= 7) {
        document.getElementById("resul").innerHTML = "Aprovado! Sua média é: " + med;
    } else if(5 <= med) {
        document.getElementById("resul").innerHTML = "Recuperação. Sua média é: " + med;
    } else if(med < 5) {
        document.getElementById("resul").innerHTML = "Reprovado. Sua média é: " + med;
    }
}

// Calculadora de Gorjeta
function gorjetinha() {
    let valor =parseInt( document.getElementById('valor').value);
let Gorjeta = document.getElementById('Gorjeta').value;


if (Gorjeta == "Bom") 
    { bompc = 10 * valor / 100 + valor
      gorjetola = 10 * valor / 100
    alert("o valor total é de : " + bompc + " reais")
    alert("a gorjeta é de : " + gorjetola + " reais") 

}
else if(Gorjeta == "Ótimo")
    { bompc = 15 * valor / 100 + valor
      gorjetola = 15 * valor / 100 
        alert("o valor total é de : " + bompc + " reais")
        alert("a gorjeta é de : " + gorjetola + " reais")
}
else if (Gorjeta == "Excelente")
    { bompc = 20 * valor / 100 + valor
      gorjetola = 20 * valor / 100 
    alert("o valor total é de : " + bompc + " reais")
    alert("a gorjeta é de : " + gorjetola + " reais")
}


}

// Saudação de Acordo com a Hora
function saudação(){
    const datahr = new Date().getHours()
    if(datahr<=12) {
        document.getElementById("saudação").innerHTML = "Bom Dia! :)";
    } else if(datahr>12 && datahr<18) {
        document.getElementById("saudação").innerHTML = "Boa Tarde! :)";
    } else {
        document.getElementById("saudação").innerHTML = "Boa Noite! :)";
    }
}