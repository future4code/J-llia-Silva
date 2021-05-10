import { render } from "@testing-library/react"
import React from "react"

export default class ComGraduacao extends React.Component{
    render(){
        return(
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <div>
                  <label for="text">5.Qual Curso?</label>
                  <input id=" curso"></input> 
                </div>
            

                <div>
                    <label for="text">6.Qual Instituição de Ensino?</label>
                    <input id=" escola"></input> 
                </div>
                <div>
                    <button onClick= {this.props.trocaDePagina}>Próxima Etapa</button>
                </div>  
            
            </div>
        )
    }
}