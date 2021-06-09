import React from 'react'
import BotaoBack from '../Componentes/BotaoBack'
import Cards from '../Componentes/Card'
import { Titulo, Body, Main, CardContainer } from '../Componentes/Styled'
import { useHistory } from 'react-router-dom'


const ListTripsPage = () => {

    const history = useHistory()
    const goToForm = () => {
        history.push("/AplicationFormPages")
    }

    return (
        <Body>
            <Titulo>
                <h1> ListTripsPage  </h1>
                <BotaoBack />
            </Titulo>

            <Main>
                <CardContainer>
                    <Cards />
                    <button onClick={goToForm}>Eu Quero!</button>
                </CardContainer>

                <CardContainer>
                    <Cards />
                    <button onClick={goToForm}>Eu Quero!</button>
                </CardContainer>

                <CardContainer>
                    <Cards />
                    <button onClick={goToForm}>Eu Quero!</button>
                </CardContainer>

                <CardContainer>
                    <Cards />
                    <button onClick={goToForm}>Eu Quero!</button>
                </CardContainer>
            </Main>


        </Body>
    )
}
export default ListTripsPage