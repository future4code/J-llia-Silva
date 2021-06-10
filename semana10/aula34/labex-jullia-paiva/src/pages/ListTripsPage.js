import React from 'react'
import BotaoBack from '../Componentes/BotaoBack'
import Cards from '../Componentes/Card'
import { Titulo, Body, Main, CardContainer, Card } from '../Componentes/Styled'
import { useHistory } from 'react-router-dom'


const ListTripsPage = () => {

  /*  const history = useHistory()
    const goToForm = () => {
        history.push("/AplicationFormPages")
    }
*/
    return (
        <Body>
            <Titulo>
                <h1> ListTripsPage  </h1>
                <BotaoBack />
            </Titulo>

            <Cards/>

        </Body>
    )
}
export default ListTripsPage