import React from 'react'

export default class ListaDeUsuarios extends React.Component {
    render() {
        return (
            <div className="ListaDeUsuarios">

               
                <h2>Lista de Usuários:</h2>
                <p>{this.props.usuario}</p>
                <button>Deletar</button>

            </div>
        );
    }
}