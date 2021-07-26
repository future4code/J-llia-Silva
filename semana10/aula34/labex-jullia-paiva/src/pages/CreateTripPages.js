import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../constantes/url'
import { Header } from '../constantes/header'
import BotaoBack from '../Componentes/BotaoBack'
import { Titulo, Body, Forms, Input } from '../Componentes/Styled'
import useControlPages from '../hooks/useControlPages'

const CreateTripPages = () => {
    useControlPages();

    const [form, setform] = useState({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    const onChange=(e)=>{
        const  {name, value}=e.target
        setform({...form, [name]: value})
    }


    const creatNewTrip = () => {
        axios.post(`${BASE_URL}/trips`, form, Header)
            .then((res) => {
                alert("Viagem Criada com Sucesso!")

            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }
    return (
        <Body>
            <Titulo>
                <h1>CreateTripPages</h1>
                <BotaoBack />
            </Titulo>

            <form onSubmit={creatNewTrip}>
                <input
                    name="name"
                    placeholder="Nome"
                    value={form.name}
                    onChange={onChange}
                    required>
                </input>

                <input
                    name="planet"
                    placeholder="Planeta"
                    value={form.planet}
                    onChange={onChange}
                    required
                ></input>

                <input
                    name="date"
                    type="date"
                    placeholder="Data"
                    value={form.date}
                    onChange={onChange}
                    required
                ></input>

                <input
                    name="description"
                    placeholder="Descrição"
                    value={form.description}
                    onChange={onChange}
                    required
                ></input>

                <input
                    name="durationInDays"
                    placeholder="Duração"
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                ></input>
                <button variant="contained" color="primary">Cadastrar</button>
            </form>

        </Body>
    )
}
export default CreateTripPages