import React from 'react'
import BotaoBack from '../Componentes/BotaoBack'
import { useHistory } from 'react-router-dom'
import { Titulo, Body, Forms, Input } from '../Componentes/Styled'
import { BASE_URL } from '../constantes/url'
import axios from 'axios'
import useInput from '../hooks/useInput'

const LoginPage = () => {

    const [email, handleEmail] = useInput("");
    const [password, handlePassword] = useInput("");

    const history = useHistory()

    const Login = () => {
        const body = { email, password };

        axios
            .post(`${BASE_URL}/login`, body)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                history.push("/AdminHomePage");
            })
            .catch((err) => alert(err.response.data.message));
    };

    return (
        <Body>
            <Titulo>
                <h1>Login</h1>
                <BotaoBack />
            </Titulo>

            <Forms>
                <Input
                    value={email}
                    onChange={handleEmail}
                    placeholder="Email">

                </Input>

                <Input
                    value={password}
                    onChange={handlePassword}
                    placeholder="Senha">

                </Input>
            </Forms>

            <button onClick={Login}>Entrar</button>
        </Body>
    )
}
export default LoginPage