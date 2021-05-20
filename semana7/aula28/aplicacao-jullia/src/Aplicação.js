import React from "react";
import axios from "axios";
import styled from 'styled-components';

const Tabela = styled.table`
display:flex;
width:80vw;
justify-content: space-around;
`



export default class Aplicacao extends React.Component {
    status = {
        tarefas: ""
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
            console.log(this.tarefas)
    }
    
    render() {
        return (
            <div>
                <div>  
                    <button onClick={this.pegaTarefa}>Gerar Tarefa</button>
               </div>


                <Tabela>
                    <td>Domingo</td>
                    <td>Segunda</td>
                    <td>Terça</td>
                    <td>Quarta</td>
                    <td>Quinta</td>
                    <td>Sexta</td>
                    <td>Sábado</td>

                </Tabela>

            </div>
        )
    }
}