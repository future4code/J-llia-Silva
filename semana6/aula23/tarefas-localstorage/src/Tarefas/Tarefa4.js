import React from 'react'
import { Botao } from './style';

export default class Tarefa4 extends React.Component {
    state = {
        concluida4: false
    }
    marcaComoConcluida4 = () => {
        this.setState({ concluida4: !this.state.concluida4 })
    };
    render() {
        return (
            <div>

                <li>{this.state.concluida4 ? <s>Fazer os exercicios ✅</s> : "Fazer os exercicios"}</li>
                <Botao onClick={this.marcaComoConcluida4}>
                    {this.state.concluida4 ? "desfazer" : "fazer"}
                </Botao>


            </div>
        )
    }
}