import React from "react";
import axios from "axios";


export default class Exercicio1 extends React.Component {
    state = {
        atividades: {}
    }
    buscarAtividade = () => {
        axios
            .get("https://www.boredapi.com/api/activity/")
            .then((bem) => {
                console.log(bem.data)
                this.setState({ atividades: bem.data})
            })
            .catch((mau) => {
                console.log(mau.data)
            });

    }
    render() {
        return (
            <div>
                <h4>Está intediado?</h4>
                <button onClick={this.buscarAtividade}>Clique Aqui</button>
            
                <h1>Atividades:</h1>
                <h3> Nome: {this.state.atividades.activity}</h3>
                <h3> Tipo: {this.state.atividades.type}</h3>
                <h3> Participantes: {this.state.atividades.participants}</h3>
                <h3> Preço: {this.state.atividades.price}</h3>

            </div>
        )
    }
}