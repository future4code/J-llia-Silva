
/*passa acessar usamos o process.argv[índice] e depois rodamos no terminal : 
node 
NomeDoArquivo 
parametros que queremos utilizar
    [2]    [3]    [4]     [5]
*/
//====================================== 1º ===============================================//
/*
    A - 
const nome =  process.argv[2];
const idade = process.argv[3];
console.log(`Olá, ${nome}, Você tem ${idade} anos`)
    B - 
const nome =  process.argv[2];
const idade = Number(process.argv[3])
console.log(`Olá, ${nome}, Você tem ${idade} anos. Em sete anos você terá ${7+idade}`)
*/
//====================================== 2º ===============================================//
/*
Opção 1 - ex: 2*5
const operação = process.argv[3];
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);
console.log(`seu resultado é : ${num1}${operação}${num2}`)

Opção 2 - ex: *25 
const operação = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
console.log(`seu resultado é : ${num1}${operação}${num2}`)
*/
//====================================== 3º ===============================================//
/*const tarefas = []

tarefas.push(process.argv)

console.log("Tarefa Adicionada com Sucesso")
console.table(tarefas)*/
//====================================== 4º ===============================================//
