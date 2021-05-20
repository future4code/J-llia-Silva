import React from "react";
import Home from './Componentes/home';
import Aplicacao from "./Aplicação";
import styled from 'styled-components';


const Header = styled.header`
background-color: #894044;
height:10vh;
display:flex;
justify-content:space-around;
align-items:center;
`
const Botao = styled.button`
    box-shadow: 2px 2px ;
    font-size:1em;
    border-radius: 24px;
    color: white;
    background-color: transparent;
    padding:1%;

`



export default class App extends React.Component{
    state={
        pagina: true
    }
   renderizaPagina = () => {
       this.setState({pagina : !this.state.pagina})
   }
    
    render (){
        return(
            <div>  
                <Header>            
            <Botao onClick={this.renderizaPagina}>{this.state.pagina? "Ir para aplicação":"Voltar aos exercícios"}</Botao>
           </Header> <hr/>
           {this.state.pagina? <Home/>:<Aplicacao/>}
            
            
            </div>
        )
    }
}