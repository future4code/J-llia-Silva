
import React from "react";
import styled from 'styled-components';
import Exercicio2 from "./Exercicio2";
import Exercicio3 from "./Exercicio3";
import Exercicio1 from "./Exercicios1";

const Boby = styled.body`
display:flex;
justify-content:center;
background-color:grey;
padding:2%;
text-align:center;
max-width:100vw;
`


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Boby>
                    <Exercicio1/>
                    <hr/>
                    <Exercicio2/>
                    <hr/>
                    <Exercicio3/>

                </Boby>
            </div>
        )
    }
}
