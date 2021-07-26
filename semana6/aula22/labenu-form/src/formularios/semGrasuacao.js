import { render } from "@testing-library/react"
import React from "react"
import styled from "styled-components"

const Display = styled.div`
display: block;`

const Pergunta = styled.p`
display: block;
`
const Botao = styled.button`
margin-top: 2%;
`

export default class SemGraduacao extends React.Component{
    render(){
        return(
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <div><Pergunta>
                 <label for="text">7. Por que você não terminou um curso de graduação?</label>
                 </Pergunta>
                <input id=" justificativa"></input>    
                </div>
                <div>
                <p>8. Você fez algum curso complementar?</p> 
                <select>                    
                    <option value = "ct">Curso Técnico</option>
                    <option value = "ci">Curso de Inglês</option>
                    <option value = "nan">Não fiz curso complementar</option>
                    

                </select>
                </div>     
                <div><Botao>
                    <button onClick= {this.props.trocaDePagina}>Próxima Etapa</button>
                    </Botao>
                </div>  
            
            </div>
        )
    }

}