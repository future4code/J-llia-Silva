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
    return (
        <Body>
            <Titulo>
                <h1>AdminHomePage</h1>
                <BotaoBack />
            </Titulo>

            <Cards />
            
            <button onClick={goTonew}>Criar Nova</button>


        </Body >
    )
}
export default AdminHomePage