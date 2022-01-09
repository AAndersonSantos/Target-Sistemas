/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/

function calcularValor(value) {
    return value > 0.0;
}

var faturamento = [22174.1664, 24537.6698, 26139.6134, 0.0, 0.0, 26742.6612, 0.0, 42889.2258, 46251.174,
    11191.4722, 0.0, 3847.4823, 373.7838, 2659.7563, 48924.2448, 18419.2614, 0.0, 0.0, 35240.1826, 43829.1667,
    18235.6852, 4355.0662, 13327.1025, 0.0, 0.0, 25681.8318, 1718.1221, 13220.495, 8414.61];

var faturamentoMensal = 0;

// calculando o maior valor
function calcMaiorValor(){

    let maiorValor = faturamento.reduce(function(valor1, valor2) {
        return Math.max(valor1, valor2);
    });

    console.log('O maior valor de faturamento ocorrido em um dia do mês: ' + maiorValor);
    menorValor()

}

// calculando o menor valor
function menorValor(){

    var filtrandoValor = faturamento.filter(calcularValor);
    
    let menorValor = filtrandoValor.reduce(function(valor1, valor2) {
        return Math.min(valor1, valor2);
    });

    console.log('O menor valor de faturamento ocorrido em um dia do mês: ' + menorValor);
    calculoFaturamentoMensal()
}

// calculando faturamento Mensal
function calculoFaturamentoMensal(){

    for(var i = 0; i < faturamento.length; i++) {
        faturamentoMensal += faturamento[i];
    }
    
    var avg = faturamentoMensal / faturamento.length;
    console.log("Média mensal: " + avg)
    diasFaturamentoSuperiorMensal()
}

function diasFaturamentoSuperiorMensal(){

    var test = 0;

    for(var i = 0; i < faturamento.length; i++) {
        if(i > faturamentoMensal)
        test = test + 1
    }

    console.log("Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: " + test)
}

calcMaiorValor();



