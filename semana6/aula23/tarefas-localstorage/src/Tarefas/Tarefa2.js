import React from 'react'
import { Botao, Layout } from './style'

export default class Tarefa2 extends React.Component {
    state = {
        concluida2: false
    }
    marcaComoConcluida2 = () => {
        this.setState({ concluida2: !this.state.concluida2 })
    };
    render() {
        return (
            <div> 
                <li>{this.state.concluida2 ? <s>Tomar Café ✅</s> : "Tomar Café"}</li>
                <Botao onClick={this.marcaComoConcluida2}>
                    {this.state.concluida2 ? "desfazer" : "fazer"}
                </Botao>


            </div>
        )
    }
}