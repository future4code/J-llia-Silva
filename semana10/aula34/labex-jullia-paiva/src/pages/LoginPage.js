import React from 'react'
import BotaoBack from '../Componentes/BotaoBack'
import { useHistory } from 'react-router-dom'
import { Titulo, Body,Form, Input } from '../Componentes/Styled'

const LoginPage = () => {

    const history = useHistory()
    const goToAdm = () => {
        history.push("/AdminHomePage")
    }
    return (
        <Body>
            <Titulo>
                <h1>Login</h1>
                <BotaoBack />
            </Titulo>

            <Form>
                <Input placeholder="Nome"></Input>
                <Input placeholder="Senha"></Input>
            </Form>

            <button onClick={goToAdm}>Entrar</button>
        </Body>
    )
}
export default LoginPage