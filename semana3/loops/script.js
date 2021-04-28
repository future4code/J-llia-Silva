/*===================EXERCICIO 1========================
Está somando 1 a variavel valor , que por sua vez armazena o valor do ultimo i 
até que a variavel i alcance 4, dessa forma, quando i = 0 | valor = 1, quando i = 2|
valor = 3, quando i = 3 | valor = =6, quando i = 4| valor = 10 e o loop se encerra.*/

/* ===================EXERCICIO 2========================
A => será impresso todos os números que forem maiores que 18
B=> SIM, basta retirar o IF  e o console mostrara todos os itens do array.*/


//===================DESAFIO1========================//
/*SE A ENTRADA DO PROMPOT FOSSE 4, O RESULTADO SERIA 4 LINHAS
E CADA LINHA TERIA UM "0" A MAIS QUE A DE CIMA*/


/*===================EXERCICIO 3========================

let arrayOriginal = [50, 30, 130, 40, 60, 21]
let maiorNumero = 0
let menorNumero = 100

for (let i of arrayOriginal){
    if (i > maiorNumero){
        maiorNumero = i
    }
    if (i < menorNumero){
        menorNumero = i
    }
}
console.log (maiorNumero)
console.log (menorNumero)*/

/*===================DESAFIO1.1========================

let arrayTentativas = []
let numeroSecreto = Number(prompt("Digite um número"))
console.log ("Vamos jogar!")
let tentativa

while (tentativa !== numeroSecreto){
    tentativa = Number(prompt("Chute"))
    arrayTentativas.push(tentativa)
    
 if (tentativa > numeroSecreto){
    console.log ("O número chutado foi " + tentativa + "\nErrou ! O número secreto é menor")
}else if (tentativa < numeroSecreto){
    
    console.log ("O número chutado foi " + tentativa + "\nErrou ! O número secreto é maior")
}else {
   console.log ("Acertou!!\n O número de tentativas foi :",  arrayTentativas.length-1)

}
}*/
//===================DESAFIO 2 ========================//

/*let arrayTentativas = []
let numeroSecreto = Math.floor((Math.random() * 100) + 1);
console.log ("Vamos jogar!")
let tentativa

while (tentativa !== numeroSecreto){
    tentativa = Number(prompt("Chute"))
    arrayTentativas.push(tentativa)
    
 if (tentativa > numeroSecreto){
    console.log ("O número chutado foi " + tentativa + "\nErrou ! O número secreto é menor")
}else if (tentativa < numeroSecreto){
    
    console.log ("O número chutado foi " + tentativa + "\nErrou ! O número secreto é maior")
}else {
   console.log ("Acertou!!\n O número de tentativas foi :",  arrayTentativas.length-1)

}
}*/
