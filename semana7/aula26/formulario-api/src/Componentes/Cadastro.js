import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Criar = styled.button`
    font-size: 12px;
    font-weight: bold;
    background-color: #FF6C37;
    color: rgb(255, 255, 255);
    border-color: transparent;
    border-radius: 5px;
`

export default class Cadastro extends React.Component {
    state = {
        inputName: "",
        inputEmail: "",
    }
    //--------------IMPUTS CONTROLADOS ----------------------//

    handleName = (event) => {
        this.setState({ inputName: event.target.value })
    }

    handleEmail = (event) => {
        this.setState({ inputEmail: event.target.value })
    }
    criar = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        const header = {
            headers: {
                Authorization: "jullia-izidorio-paiva"
            }
        };
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        };
        axios
            .post(url, body, header)
            .then(() => {
                alert("Usuárix cadastradx com sucesso!")
                this.buscaUsuarios();
                this.setState({ inputEmail: "", inputName: "" })
            })
            .catch((erro) => {
                alert("deu ruim!")
            })
    }
    render() {
        return (
            <div className="Cadatro">

                <h2>Criar Usuário</h2>

                <input placeholder={"nome"}
                    value={this.state.inputName}
                    onChange={this.handleName} />

                <input placeholder={"e-mail"}
                    value={this.state.inputEmail}
                    onChange={this.handleEmail} />

                <Criar onClick={this.criar} >Criar</Criar>

            </div>
        );
    }
}