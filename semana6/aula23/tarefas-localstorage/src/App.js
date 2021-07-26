import React from 'react';
import './App.css';
import { Botao, Layout } from './Tarefas/style';
import Tarefa1 from './Tarefas/Tarefa1';
import Tarefa2 from './Tarefas/Tarefa2';
import Tarefa3 from './Tarefas/Tarefa3';
import Tarefa4 from './Tarefas/Tarefa4';
import Tarefa5 from './Tarefas/Tarefa5';


export default class App extends React.Component {
    state = {
        mostrarTarefas: false,
        limparTarefas: false,
        tarefasConcluidas: []
    };

    mudaMostrar = () => {
        this.setState({ mostrarTarefas: !this.state.mostrarTarefas });
    };
    mudaLimpar = () => {
        this.setState({ limparTarefas: !this.state.limparTarefas });

    };
    componentDidMount() {
        console.log("Montou Mensagem");
    };

    componentDidUpdate() {
        console.log("Alterou Mensagem");
    };

    componentWillUnmount() {
        console.log("Vai sumir a mensagem");
    };

    render() {

        return (
            <div>
                <Layout>
                    <Botao onClick={this.mudaMostrar}>
                        {this.state.mostrarTarefas ? "Ocutar Tarefas" : "Mostrar Tarefas"}
                    </Botao>
                    {this.state.mostrarTarefas && (
                        <div>
                            <div>
                                <Tarefa1 />
                                <Tarefa2 />
                                <Tarefa3 />
                                <Tarefa4 />
                                <Tarefa5 />
                            </div>

                            <div>
                                <h1>Tarefas concluídas</h1>
                               
                            </div>



                            <hr></hr>
                            <button onClick={this.mudaLimpar}>limpar Tudo</button>
                            {this.state.limparTudo}


                        </div>
                    )}

                </Layout>

            </div>
        )
    }
}
