
import './App.css';
import DadosGerais from './formularios/dadosGerais';
import ComGraduacao from './formularios/comGraduacao';
import SemGraduacao from './formularios/semGrasuacao';
import React from 'react';



export default class App extends React.Component {
  state = {
    pagina : "primeiraPagina"
  };
  trocaDePagina= ()=>{
    if(this.state.pagina==="primeiraPagina"){
      this.setState({pagina: "DadosGerais"});
    }else if (this.state.pagina==="segundaPagina"){
      this.setState({pagina: "ComGraduacao"});
    }else if (this.state.pagina==="terceiraPagina"){
      this.setState({pagina: "SemGraduacao"});
    }
  }
  render(){  
    const renderizarPagina = ()=>{
      if(this.state.pagina==="primeiraPagina"){
       return<DadosGerais trocaDePagina={this.trocaDePagina}/>;
      }else if (this.state.pagina==="segundaPagina"){
        return<ComGraduacao trocaDePagina={this.trocaDePagina}/>;
      }else if (this.state.pagina==="terceiraPagina"){
        return<SemGraduacao trocaDePagina={this.trocaDePagina}/>;
      }
    } 

    return (
    <div className="App">
    {renderizarPagina()}
    </div>
  );
}}

