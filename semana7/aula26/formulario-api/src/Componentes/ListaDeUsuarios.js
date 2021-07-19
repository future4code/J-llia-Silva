import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Detalhe from './DetalheUsuario'

const Lista = styled.li`
display:flex;
justify-content:space-around;
padding:2%;
margin:2%;
border: 2px solid #FF6C37;
width:30vw;
`
const Delete = styled.button`
    font-size: 12px;
    font-weight: bold;
    background-color: #FF6C37;
    color: rgb(255, 255, 255);
    border-color: transparent;
    border-radius: 5px;
`

const header = {
    headers: {
        Authorization: "jullia-izidorio-paiva"
    }
};

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"


export default class ListaDeUsuarios extends React.Component {
    state = {
        listaDeUsuario: [],
        pagDetalhes: true
    }

    componentDidMount() {
        this.buscaUsuarios();
    }
    //----------------API---------------//
    buscaUsuarios = () => {

        axios
            .get(url, header)

            .then((certo) => {
                this.setState({ listaDeUsuario: certo.data })
            })

            .catch((errado) => {
                alert('Usuário ja cadastrado!')
            });

    }
    deletarUsuario = (id) => {

        const urlDelet = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        axios
            .delete(urlDelet, header)
            .then((certo) => {
                alert("Usuarix deletadx com sucesso")
                this.buscaUsuarios()
            })
            .catch((errado) => {
                alert("Algo deu errado!")
            })
    }

    //--------------DESAFIOS-------------------//
    mostraDetalhes = () =>{
        this.setState({pagDetalhes: !this.state.pagDetalhes})
    }

    render() {

        const usuarios = this.state.listaDeUsuario.map((usu) => {
            return <Lista key={usu.id} >
                {usu.name}
                <button onClick={this.mostraDetalhes}>Mostrar Detalhes</button>
                <Delete onClick={() => this.deletarUsuario(usu.id)}>DEL</Delete>
            </Lista>
        })        


        //------------------JSX----------------//
        return (
            <div>
                
            <h2>{this.state.pagDetalhes?"Lista de Usuários":"Detalhes do Usuário"}</h2>
           
            {this.state.pagDetalhes? usuarios:<Detalhe/>
            }
                
            </div>
        );
    }
}