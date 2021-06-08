import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components'

const BotaoX = styled.button`
border-radius:100px;
width:20%;
background-color:transparent;
border:1px solid red;
box-shadow: 2px 3px 2px;
`
const Botaosuper = styled.button`
border-radius:100px;
background-color:transparent;
width:20%;
border:1px solid yellow;
box-shadow: 2px 3px 2px;
`
const Botaolove = styled.button`
border-radius:100px;
width:20%;
background-color:transparent;
border:1px solid green;
box-shadow: 2px 3px 2px;
`
const Botoes = styled.div`
display : flex;
height:30%;
padding:5%;
justify-content:space-around;
`
const Escolhas = (props) => {
    const [decisao, setDesicao] = useState()

    /*const naoQuer = () => {//recebe id//
        setDesicao(false)
    }

    const Quer = () => {//recebe id//
        setDesicao(true)
    }*/

    const enviarEscolha = (escolha) => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jullia/choose-person"
        const body = {
            id: props.id,
            choice: escolha
        }
        const header = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios.post(url, body, header)
            .then((res) => {
                props.pegaPerfil()
                console.log(props.pegarPerfil)
                console.log(res)
            })
            .catch((err) => { console.log(err) })
    }
    useEffect(() => {
        enviarEscolha();
    }, []);

    return (
        <Botoes>
            <BotaoX
                onClick={() => enviarEscolha(false)}
                variant="outlined"
                color="secondary"
               
            >😡</BotaoX>

            <Botaosuper
                onClick={() => enviarEscolha(true)}
                variant="outlined" 
                alert = "SUPER LIKE!"
            >⭐</Botaosuper>
            
            <Botaolove
                onClick={() => enviarEscolha(true)}
                variant="outlined"
                color="primary"
            >💚</Botaolove>
        </Botoes>
    )
}

export default Escolhas