import React from 'react'
import { Botao, Layout } from './style';

export default class Tarefa3 extends React.Component {
    state = {
        concluida3: false
    }
    marcaComoConcluida3 = () => {
        this.setState({ concluida3: !this.state.concluida3 })
    };
    render() {
        return (
            <div>
                <li>{this.state.concluida3 ? <s>Assistir a aula ✅</s> : "Assistir a aula"}</li>
                <Botao onClick={this.marcaComoConcluida3}>
                    {this.state.concluida3 ? "desfazer" : "fazer"}
                </Botao>
                
            </div>
        )
    }
}