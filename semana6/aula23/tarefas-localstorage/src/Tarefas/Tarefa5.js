import React from 'react'
import { Botao } from './style';

export default class Tarefa5 extends React.Component {
    state = {
        concluida5: false
    }
    marcaComoConcluida5 = () => {
        this.setState({ concluida5: !this.state.concluida5 })
    };
    render() {
        return (
            <div>
                <li>{this.state.concluida5 ? <s>Mandar o FeedBack do dia ✅</s> : "Mandar o FeedBack do dia"}</li>
                <Botao onClick={this.marcaComoConcluida5}>
                    {this.state.concluida5 ? "desfazer" : "fazer"}
                </Botao>
            </div>
        )
    }
}