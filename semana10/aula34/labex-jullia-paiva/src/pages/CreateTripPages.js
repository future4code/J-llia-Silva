import React from 'react'
import BotaoBack from '../Componentes/BotaoBack'
import { Titulo, Body, Form, Input } from '../Componentes/Styled'

const CreateTripPages = () => {
    return (
        <Body>
            <Titulo>
                <h1>CreateTripPages</h1>
                <BotaoBack />
            </Titulo>

            <img scr="" alt ="carregar foto"/>
            <Form>
                <Input placeholder="Destino"></Input>
                <Input placeholder="Descrição"></Input>
            </Form>
            <button>Cadastrar</button>

        </Body>
    )
}
export default CreateTripPages