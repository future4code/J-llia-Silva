import './App.css';
import React from 'react'
import Cadastro from './Componentes/Cadastro';
import ListaDeUsuarios from './Componentes/ListaDeUsuarios';
import styled from 'styled-components'

const Head = styled.div`
background-color:#FF6C37;
display:flex;
justify-content:space-around;
align-items:center;`

const Botao = styled.button`
color: black;
background-color:transparent;
border-color: white;
height:5vh;
border-radius:2px 5px;`

const Body = styled.body`
display:flex;
justify-content:center;
text-align:center;`

export default class App extends React.Component {
    state = {
        pagina: true
    }
    trocaDePaginas = () => {
        this.setState({ pagina: !this.state.pagina })
    }

    render() {

        return (
            <div>
                <Head>
                    <h1>Labenusers</h1>
                    <Botao onClick={this.trocaDePaginas}>
                        {this.state.pagina ? 'Ir para lista' : 'Voltar ao Cadastro'}
                    </Botao>
                </Head>
                <hr></hr>
                <Body>
                {this.state.pagina ? <Cadastro /> : <ListaDeUsuarios />}
                </Body>
            </div>
        );
    }
}




