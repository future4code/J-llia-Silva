import React from 'react'
import BotaoBack from '../Componentes/BotaoBack'
import { useHistory } from 'react-router-dom'
import { Titulo, Body, CardContainer, Main } from '../Componentes/Styled'
import Cards from '../Componentes/Card'

const AdminHomePage = () => {
    const history = useHistory()
    const goTonew = () => {
        history.push("/CreateTripPages")
    }
    const goToDetails = () => {
        history.push("/TripDetailsPage")
    }
    return (
        <Body>
            <Titulo>
                <h1>AdminHomePage</h1>
                <BotaoBack />
            </Titulo>
            <Main>

                <CardContainer>
                    <Cards />
                    <button onClick={goToDetails}>Detalhes</button>
                </CardContainer>

                <CardContainer>
                    <Cards />
                    <button onClick={goToDetails}>Detalhes</button>
                </CardContainer>

                <CardContainer>
                    <Cards />
                    <button onClick={goToDetails}>Detalhes</button>
                </CardContainer>
                
                <CardContainer>
                    <Cards />
                    <button onClick={goToDetails}>Detalhes</button>
                </CardContainer>

            </Main >

            <button onClick={goTonew}>Criar Nova</button>


        </Body >
    )
}
export default AdminHomePage