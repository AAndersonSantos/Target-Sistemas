/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada 
estado teve dentro do valor total mensal da distribuidora.*/

const sp =  67836.43
const rj =  36678.66
const mg =  29229.88
const es =  27165.48
const outros = 19849.53

var total = sp + rj + mg + es + outros;

var porcentagemSp = (sp / total) * 100
var porcentagemRj = (rj / total) * 100
var porcentagemMg = (mg / total) * 100
var porcentagemEs = (es / total) * 100
var porcentagemOutros = (outros / total) * 100

const valorFormatado = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(total)

console.log("Valor total mensal: " + valorFormatado)

console.log("SP " + Math.round(porcentagemSp) + "%")
console.log("RJ " + Math.round(porcentagemRj) + "%")
console.log("MG " + Math.round(porcentagemMg) + "%")
console.log("ES " + Math.round(porcentagemEs) + "%")
console.log("Outros " + Math.round(porcentagemOutros) + "%")

