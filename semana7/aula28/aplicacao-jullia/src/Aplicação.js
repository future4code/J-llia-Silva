import React from "react";
import axios from "axios";
import styled from 'styled-components';

const Tabela = styled.table`
display:flex;
width:100vw;
justify-content: space-around;
`
const Dias = styled.div`
display:grid;
text-align:center;
width: 12vw;
margin:auto;`

const Gerar = styled.button`
background-color:#894044;
color:white;`



export default class Aplicacao extends React.Component {
    state = {
        tarefas: "",
        agenda: [
            {
                Domingo: "",
                Segunda: "",
                terça: "",
                Quarta: "",
                Quinta: "",
                sexta: "",
                Sábado: ""
            }
        ]
    }

    pegaTarefa = () => {
        axios
            .get("https://www.boredapi.com/api/activity/")
            .then((bem) => {
                console.log(bem.data.activity)
                this.setState({ tarefas: bem.data.activity })
            })
            .catch((mau) => {
                console.log(mau.data)
            });
    }
    render() {
        return (
            <div>

                <Tabela>
                    <Dias>
                        <td>Domingo</td>
                        <Gerar onClick={this.pegaTarefa}>Gerar Tarefa</Gerar>
                        <h3>{this.state.tarefas}</h3>
                    </Dias>
                    <Dias>
                        <td>Segunda</td>
                        <Gerar onClick={this.pegaTarefa}>Gerar Tarefa</Gerar>
                        <h3>{this.state.tarefas}</h3>
                    </Dias>
                    <Dias>
                        <td>Terça</td>
                        <Gerar onClick={this.pegaTarefa}>Gerar Tarefa</Gerar>
                        <h3>{this.state.tarefas}</h3>
                    </Dias>
                    <Dias>
                        <td>Quarta</td>
                        <Gerar onClick={this.pegaTarefa}>Gerar Tarefa</Gerar>
                        <h3>{this.state.tarefas}</h3>
                    </Dias>
                    <Dias>
                        <td>Quinta</td>
                        <Gerar onClick={this.pegaTarefa}>Gerar Tarefa</Gerar>
                        <h3>{this.state.tarefas}</h3>
                    </Dias>
                    <Dias>
                        <td>Sexta</td>
                        <Gerar onClick={this.pegaTarefa}>Gerar Tarefa</Gerar>
                        <h3>{this.state.tarefas}</h3>
                    </Dias>
                    <Dias>
                        <td>Sábado</td>
                        <Gerar onClick={this.pegaTarefa}>Gerar Tarefa</Gerar>
                        <h3>{this.state.tarefas}</h3>
                    </Dias>

                </Tabela>

            </div >
        )
    }
}