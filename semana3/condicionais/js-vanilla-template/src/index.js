/* o cógido pede um número ao usúario e depois testa se esse número 
é par ou ímpar, sendo par a mensagem é "Passou no teste", sendo ímpar: 
"Não passou no teste"*/

//================================2º===================================//
//A//
/*O código serve para analisar varias opções e executar um comando 
diferente de acordo com a opção escolhida*/
//B//
//o valor será 2.25//
//C//
/* O código continuaia a ser execultado e a mensagem seria "
""O preço da fruta pera é R$ 5"

/*================================3º===================================
A)
A primeira abre uma caixa de pergunta e transforma o seu resultado em numero*/

/*================================4º===================================

let idadeDoUsuario = Number(prompt("Qual a sua idade?"))

if (idadeDoUsuario >= 18){
     console.log ("Você Pode Dirigir")
}else {
     console.log ("Você Não Pode Dirigir!")
}*/

/*================================5º===================================

let turnoDoAluno = prompt("Em qual turno você estuda? Utilize M (matutino) ou V (Vespertino) ou N (Noturno).")

if ( turnoDoAluno == "M" ){
    console.log ("Bom dia")
}else if ( turnoDoAluno == "V"){
    console.log ("Boa tarde")
}else {
    console.log ("Boa Noite")
}*/

/*================================6º===================================
let turnoDoAluno = prompt("Em qual turno você estuda? Utilize M (matutino) ou V (Vespertino) ou N (Noturno).")
switch (turnoDoAluno){
    case "M":
    console.log ("Bom Dia")
    break
    case "V":
    console.log ("Boa Tarde")
    break
    case "N":
    console.log ("Boa Noite")
    break
    default :
    console.log ("Não conheço esse turno :/ Tente digitar em maiúsculo.")
}*/
/*================================7º===================================

let generoDoFilme = prompt("Qual genero de filme você vai assistir")
let precoDoIngresso = Number(prompt("Qual o preço do ingresso?"))

const condicaoGenero = (generoDoFilme === "fantasia")
const condicaoPreco = (precoDoIngresso <= 15)

if (condicaoGenero && condicaoPreco){
    console.log ("Bom Filme")
}else { 
    console.log ("Escolha outro filme")
}*/
//==========================DESAFIO!!!!!==============================

/*1
let generoDoFilme = prompt("Qual genero de filme você vai assistir")
let precoDoIngresso = Number(prompt("Qual o preço do ingresso?"))
let snack = prompt("Qual snack ele vai comprar (pipoca, chocolate, doces, etc?")

const condicaoGenero = (generoDoFilme === "fantasia")
const condicaoPreco = (precoDoIngresso <= 15)

if (condicaoGenero && condicaoPreco){
    console.log ("Bom Filme! e ... com " + snack)
}else { 
    console.log ("Escolha outro filme")
}*/
//2//

/*let nomeCompleto = prompt("Digite seu nome completo");
let tipoDeJogo = prompt("Digite 'IN' se quiser comprar partidas internacionais ou 'DO' para partidas domésticas")
let etapaDoJogo = prompt ("Qual etapa do jogo você quer ver? Digite SF para semi-final; DT para decisão de terceiro lugar; e FI para final ")
let categoriaDoJogo = prompt("Qual a categoria: 1, 2, 3 ou 4?")
let quantidadeDeIngessos= prompt("Quantos ingressos você deseja comprar?")

console.log ("---- Dados da Compra----\n" + 
" Nome do cliente : " + nomeCompleto)

if ( tipoDeJogo === "IN"){
    console.log ("tipo do jogo : internacional")
}else {
    console.lod ("tipo do jogo : doméstico")
}

if (etapaDoJogo === "FI"){
    console.log ("Etapa do jogo : final")
}else if (etapaDoJogo === "DT"){
    console.log ( "Etapa do jogo : decisão 3º lugar")
}else {
    console.log ("Etapa do jogo : Semi-finais")
} 

console.log ("categoria : " + categoriaDoJogo + "\nquantidade de ingressos : " + quantidadeDeIngessos + "\n----VALORES----")*/




