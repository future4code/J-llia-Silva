import React from 'react'

export default class Cadastro extends React.Component {
    render() {
        return (
            <div className="Cadatro">

                <h2>Criar Usuário</h2>

                <input placeholder= "nome"
                value = {this.props.inputName}
                onChange = {this.props.handleName}/>

                <input placeholder= "e-mail"
                value = {this.props.inputEmail}
                onChange = {this.props.handleEmail}/>

                <button onClick ={this.props.novoUsuario}>Criar</button>

            </div>
        );
    }
}