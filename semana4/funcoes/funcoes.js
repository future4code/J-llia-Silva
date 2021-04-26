
/*=====================1º============================
// A- vai ser impresso 10 (2*5) e depois 50 (10*5)//
// B- Os valores seriam armazenados mas nao seriam impressos no console.*/

/*=====================2º============================
A - as saidas vao ser "darvas" e "caio", por que o cconsole
vai mostrar o array[i] até que i >2, ou seja
array [0] - darvas e
array [1] - caio;

//B - se mudar, sera impresso os dois nomes:
array [0] - amanda
array [1] - caio;*/
/*====================3º============================
o array vai ser lido e todo numero par que constar dentro dele será
multiplicado por si propio e incluido no array final.
sugestão de nome: multiplicaNumerosPares*/

/*====================4º============================
//A//
function descreveDadosPessoais(){
    console.log ( "Eu sou júllia, tenho 23 anos, moro em joao pessoa e sou estudante")
}
descreveDadosPessoais()

//B//

function descreveDadosPessoais(nome, idade, endereco, estudo){
    if (estudo = true){
        console.log("Eu sou "+ nome + " tenho "+ idade + " anos + moro em "+ endereco + "e sou estudante")
    }else {
        console.log("Eu sou "+ nome + " tenho " + idade + " anos + moro em " + endereco + "e não sou estudante")
    }
        return fraseCompleta
}

console.log(descreveDadosPessoais("jullia", 23, "João Pessoa ", true))*/

/*====================5º============================

 A// function somaDoisNumeros(num1, num2){
    let soma = (num1 + num2)
    return soma
  }

  const resultado = somaDoisNumeros(3,3)
  console.log (resultado)

B//
  function testaNumerosMaiorOuIgual(num1, num2){
      if (num1>=num2){
          console.log (true)
      }else {
          console.log (false)
      }
    }

    testaNumerosMaiorOuIgual(3,6)
C//
function recebeMensagem(mensagem){
    for(let i = 0; i <10 ; i++)
    console.log (mensagem)

}
recebeMensagem("Oi eu sou jullia")*/

/*============================6º============================

A------------------------------------------------------------
function tamanhoArray(){
    
}
const arrayTeste = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
const tamanho = tamanhoArray(arrayTeste)

console.log (arrayTeste)

B-----------------------------------------------------------

function recebeNumero(numero){
    if (numero%2 === 0){
        console.log (true)
    }else{
        console.log(false)
    }
}

recebeNumero(5)    


C------------------------------------------------------------
let novoArray = []
function incluiPar(arrayGeral) {
    for (let i = 0; i < arrayGeral.length; i++) {
        if (arrayGeral[i]%2 === 0) {
            novoArray.push(arrayGeral[i])
        }
    }
    return novoArray.length
}
incluiPar([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
console.log(novoArray)

D----------------------------------------------------------
????*/

/*============================DESAFIOS!========================
1-----------------------------------------------------------
let recebeParametro = (param1) => {
    console.log(param1)
    return param1
}

let recebeDoisParametros = (n1, n2) => {
    return n1 + n2
}
const soma = recebeDoisParametros(2,3)
recebeParametro(soma)

2---------------------------------------------------------
A--------------------------

let novoArray = []
function incluiPar(arrayGeral) {
    for (let i = 0; i < arrayGeral.length; i++) {
        if (arrayGeral[i]%2 === 0) {
            novoArray.push(arrayGeral[i]*2)
        }
    }
    return novoArray.length
}
incluiPar([0, 8, 23, 16, 10, 15, 41, 12, 13])
console.log(novoArray)

B--------------------------

let maiorNumero = 0

function achaMaior(arrayGeral) {

    for (let i = 0; i < arrayGeral.length; i++) {
        if (arrayGeral[i] > maiorNumero) {
            maiorNumero = arrayGeral[i]
        }
    }
}
    achaMaior([0, 8, 23, 16, 10, 15, 41, 12, 13])
    console.log(maiorNumero)
C---------------------------
???
D---------------------------
????
*/