
import './App.css';
import axios from 'axios'
import Styled from 'styled-components'
import React from 'react'
import ListaDeUsuario from './Componentes/ListaDeUsuarios'
import Cadastro from './Componentes/Cadastro';

const header = {
    headers:{ Authorization: "jullia-izidorio-paiva"}   
   
};

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
            //https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users//



export default class App extends React.Component {
    state = {
        listaDeUsuarios: [],
        inputName: "",
        inputEmail: "",
        pagina: true
    }
    trocaDePaginas = () => {
        this.setState({ pagina: !this.state.pagina })
    }
    componentDidMount(){
        this.buscaUsuarios();
    }
    //--------------IMPUTS CONTROLADOS ----------------------//

    handleName = (event) => {
        this.setState({ inputName: event.target.value })

    }
    handleEmail = (event) => {
        this.setState({ inputEmail: event.target.value })
    }
    
    //----------------------API------------------------------//

    buscaUsuarios = () => {
        axios
            .get(url, header)
            .then((certo) => {
                this.setState({ listaDeUsuarios: certo.data})
                alert("deu certo amg!!!!!")
            })
            .catch((errado) => {
               alert("deu ruim!")
            })

    }
    novoUsuario = () => {

        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        };

        axios
            .post(url, body, header)
            .then(() => {
                alert("Usuário cadastrado com sucesso!")
                this.buscaUsuarios();
            })
            .catch(() => {
                alert("Oop´s! Algo deu errado :'(")
            })

    }

    //-------------------------FIM DO API-----------------------//

    render() {
        const novoUsuario = this.state.listaDeUsuarios.map((novo) => {
                return <ListaDeUsuario usuario={novo.name}/>
           });
        console.log(this.state.listaDeUsuarios)

        return (
            <div className="App">
                <h1>Labenusers</h1>
                <button onClick={this.trocaDePaginas}>Trocar Página</button>

                {this.state.pagina ? <Cadastro /> : {novoUsuario}}

            </div>
        );
    }
}




