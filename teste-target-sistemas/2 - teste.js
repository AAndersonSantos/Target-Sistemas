/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a 
sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

var valor = 4; 
var count;
var Fibonacci = [0, 1];
var resultado;
var boolean = false;

function calculoFibonacci(){

    if (valor < 1) {
       resultado = 0;
    } else if (valor == 1){
        resultado = 1;
    }else if (valor <= 2){
        resultado = 1;
    } else{

        for (count = 2; count <= valor; count++) {
          Fibonacci[count] = Fibonacci[count - 1] + Fibonacci[count - 2];
    
    
          if (valor == Fibonacci[count]){
            boolean = true;
          } 
        
          resultado = Fibonacci[count];
        }
    }

    console.log("O cálculo da sequência fibonacci é: " + resultado);
    return test()
}

function test() {

    if (boolean == true){
        return (`O número ${valor} pertence ao cálculo da sequencia fibonacci`)
    } else if (boolean == false){
        return (`O número ${valor} não pertence ao cálculo da sequência fibonacci`)
    }

}

console.log(calculoFibonacci());
