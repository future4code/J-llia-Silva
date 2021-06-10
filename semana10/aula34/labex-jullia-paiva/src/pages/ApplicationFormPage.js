import React from 'react'
import BotaoBack from '../Componentes/BotaoBack'
import Formulario from '../Componentes/Form'
import { Titulo, Body, Forms } from '../Componentes/Styled'

const AplicationFormPages = () => {
    return (
        <Body>
            
            <Titulo >
                <h1>Inscreva-se para uma Viagem </h1>
                <BotaoBack />
            </Titulo>

            <Formulario />

        </Body>
    )
}
export default AplicationFormPages