/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/

function inverterString(str) {
    var nome = '';
    for (var i = str.length - 1; i >= 0; i--) {
        nome = nome + str[i];
    }
    return nome;
}

console.log(inverterString("target sistemas"));