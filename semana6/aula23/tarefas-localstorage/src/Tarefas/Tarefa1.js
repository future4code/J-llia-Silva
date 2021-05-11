import React from 'react'
import { Botao } from './style';

export default class Tarefa1 extends React.Component {
    state = {
        concluida1: false,

    }
    marcaComoConcluida1 = () => {
        this.setState({ concluida1: !this.state.concluida1 })
    };

    render() {
        return (
            <div>

                <li>{this.state.concluida1 ? <s>Acordar ✅</s> : "Acordar"}</li>
                <Botao onClick={this.marcaComoConcluida1}>
                    {this.state.concluida1 ? "desfazer" : "fazer"}
                </Botao>

                {this.state.concluida1 && (
                    <h3>Acordar</h3>
                )}




            </div>
        )
    }
}