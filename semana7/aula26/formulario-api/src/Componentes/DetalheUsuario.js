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
  `
const header = {
    headers: {
        Authorization: "jullia-izidorio-paiva"
    }
};

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"


export default class Detalhes extends React.Component {
    state = {
        listaDeUsuario: [],
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
   
    render() {

        const det = this.state.listaDeUsuario.map((detusu) => {
            return <Lista key={detusu.id}>
                {detusu.name}
                {detusu.email}
                <Delete onClick={() => this.deletarUsuario(detusu.id)}>DEL</Delete>
                <button>Voltar</button>
            </Lista>
        })        


        //------------------JSX----------------//
        return (
            <div>
              {det}
            </div>
        );
    }
}