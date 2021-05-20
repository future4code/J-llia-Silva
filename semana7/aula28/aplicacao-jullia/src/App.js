import React from "react";
import Home from './Componentes/home';
import Aplicacao from "./Aplicação";



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
            <button onClick={this.renderizaPagina}>{this.state.pagina? "Ir para aplicação":"Voltar aos exercícios"}</button>
            <hr/>
           {this.state.pagina? <Home/>:<Aplicacao/>}
            
            
            </div>
        )
    }
}