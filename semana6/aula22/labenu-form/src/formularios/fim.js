import { render } from "@testing-library/react"
import React from "react"
import styled from "styled-components"
import Styled from "styled-components"

const Alerta = styled.p`
color:red;
font-size:2em;
margin-top:5%;`

export default class Fim extends React.Component{
    render(){
        return(
            <div><Alerta>
                <p>ETAPA FINAL: O formulário acabou</p>
                <p>Obrigada por responder!</p></Alerta>
            </div>
        )}}