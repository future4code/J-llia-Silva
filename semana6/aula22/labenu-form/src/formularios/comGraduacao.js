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

export default class ComGraduacao extends React.Component{
    render(){
        return(
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <div><Pergunta>
                  <label for="text">5.Qual Curso?</label>
                  </Pergunta>
                  <input id=" curso"></input> 
                </div>
            

                <div><Pergunta>
                    <label for="text">6.Qual Instituição de Ensino?</label>
                    </Pergunta>
                    <input id=" escola"></input> 
                </div>
                <div><Botao>
                    <button onClick= {this.props.trocaDePagina}>Próxima Etapa</button>
                    </Botao>
                </div>  
            
            </div>
        )
    }
}