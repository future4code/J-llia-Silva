import React from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Titulo, Body, Main } from '../Componentes/Styled'

const ButtonAdm = styled.button`
border-radius:100px;
box-shadow:5px 10px 5px;
height:25vh;
width:20vw;
background-color:#E22C8C;
color:#4B3C41;
font-family:Impact,'Arial Narrow Bold', sans-serif;
font-size: 2em;
`
const ButtonUsu = styled.button`
border-radius:100px;
box-shadow:5px 10px 5px;
height:25vh;
width:20vw;
background-color:#B0BAA3;
color:#4B3C41;
font-family:Impact,'Arial Narrow Bold', sans-serif;
font-size: 2em;
`

const Home = () => {
    const history = useHistory()
    console.log(history)

    const goToListTrip = () => {
        history.push("/ListTripsPage")
    }
    const goToLogin = () => {
        history.push("/LoginPage")
    }
    return (
        <Body>

            <Titulo><h1>Labex</h1></Titulo>

            <Main>
                <ButtonAdm onClick={goToLogin}>Área Adm</ButtonAdm>
                <ButtonUsu onClick={goToListTrip}>Lista de Viagens</ButtonUsu>
            </Main>
        </Body>
    )

}
export default Home