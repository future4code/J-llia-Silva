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

export default class DadosGerais extends React.Component{
    render(){
        
        return(
            <form>
                <h2> ETAPA 1: Dados gerais</h2>
                <Display>
                <div>
                    <Pergunta>
                    <label for="name">1. Qual o seu nome?</label>
                    </Pergunta>
                    <input type="text" id="name" />                    
                </div>

                <div>
                    <Pergunta>
                    <label for="number">2.Qual sua idade?</label>
                    </Pergunta>
                    <input type="number" id="idade" />
                </div>

                <div>
                    <Pergunta>
                    <label for="mail">3.Qual seu email?</label>
                    </Pergunta>
                    <input type="email" id="mail" />
                </div>
                </Display>
                <div>
                <p>4. Qual a sua escolaridade?</p> 
                <select>
                    
                    <option value = "emc">Ensino Médio Completo</option>
                    <option value = "emi">Ensino Médio Incompleto</option>
                    <option value = "esc">Ensino Superior Completo</option>
                    <option value = "esi">Ensino Superior Incompleto</option>

                </select>
                </div>     
                <div>
                    <Botao>
                    <button onClick= {this.props.trocaDePagina}>Próxima Etapa</button>
                    </Botao>               
                </div>          
                
            </form>
        )
    
    }
       
    

}