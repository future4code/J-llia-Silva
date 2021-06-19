import React, { useState } from 'react'
import BotaoBack from '../Componentes/BotaoBack'
import { useHistory } from 'react-router-dom'
import { Titulo, Body, Forms, Input } from '../Componentes/Styled'
import { BASE_URL } from '../constantes/url'
import axios from 'axios'

const LoginPage = () => {
    const [form, setForm] = useState({ email: "", password: "" })

    const onChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const history = useHistory()
    const gotoHome=()=>{
        history.push("/")
    }

    const Login = (event) => {
        event.preventDefault()


        axios
            .post(`${BASE_URL}/login`, form)
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
                <button onClick={gotoHome}>
                    Voltar
                </button>
            </Titulo>


            <form onSubmit={Login}>
                <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Email"
                    type="email"
                    required>

                </input>

                <input
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    type="password"
                    placeholder="Senha"
                    pattern={"^.{6,}"}
                    title={"Sua senha tem que ter 6 caracteres"}
                    required>

                </input>

                <button variant="contained" color="secundary" >Entrar</button>

            </form>



        </Body>
    )
}
export default LoginPage