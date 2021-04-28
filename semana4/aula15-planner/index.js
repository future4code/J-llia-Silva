

function criarTarefa() {
    const minhaTarefa = document.getElementById('tarefa')
    const diaEscolhido = document.getElementById("dias-semana")
    const horaDoDia = document.getElementById("hora")

    if (minhaTarefa.value !== "") {

        switch (diaEscolhido.value) {
            case "domingo":
                const listaDeDomingo = document.getElementById('domingo')
                listaDeDomingo.innerHTML += `<li >${horaDoDia.value + minhaTarefa.value}</li>`
                break
            case "segunda":
                const listaDeSegunda = document.getElementById('segunda')
                listaDeSegunda.innerHTML += `<li>${horaDoDia.value + minhaTarefa.value}</li>`
                break
            case "terca":
                const listaDeTerca = document.getElementById('terca')
                listaDeTerca.innerHTML += `<li>${horaDoDia.value + minhaTarefa.value}</li>`
                break
            case "quarta":
                const listaDeQuarta = document.getElementById('quarta')
                listaDeQuarta.innerHTML += `<li>${horaDoDia.value + minhaTarefa.value}</li>`
                break
            case "quinta":
                const listaDeQuinta = document.getElementById('quinta')
                listaDeQuinta.innerHTML += `<li>${horaDoDia.value + minhaTarefa.value}</li>`
                break
            case "sexta":
                const listaDeSexta = document.getElementById('sexta')
                listaDeSexta.innerHTML += `<li>${horaDoDia.value + minhaTarefa.value}</li>`
                break
            default:
                const listaDeSabado = document.getElementById('sabado')
                listaDeSabado.innerHTML += `<li>${horaDoDia.value + minhaTarefa.value}</li>`
                break
        }
        minhaTarefa.value = ""
    }

}
function riscar() {
    const feito = document.getElementsByTagName("li")
    //console.log(feito)//
    feito.style.textDecoration = "line-through"

}


function limparTudo() {
    const limpar = document.getElementsByTagName("ul")
    for (let i of limpar) {
        i.innerHTML = ""
    }

}
