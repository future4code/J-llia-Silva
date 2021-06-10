import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../constantes/url'
import { Header } from '../constantes/header'
import BotaoBack from '../Componentes/BotaoBack'
import { Titulo, Body, Forms, Input } from '../Componentes/Styled'
import useInput from '../hooks/useInput'

const CreateTripPages = () => {

    const [name, setNome] = useInput("");
    const [planet, setplaneta] = useInput("");
    const [date, setData] = useInput();
    const [description, setDescriao] = useInput("");
    const [durationInDays, setDuracao] = useInput();

    const creatNewTrip = () => {
        const body = { name, planet, date, description, durationInDays }
        axios.post(`${BASE_URL}/trips`, body, Header)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err.response.data.message)
            })
    }
    return (
        <Body>
            <Titulo>
                <h1>CreateTripPages</h1>
                <BotaoBack />
            </Titulo>

            <Forms>
                <Input
                    placeholder="Nome"
                    value={name}
                    onChange={setNome}>
                </Input>

                <Input placeholder="Planeta"
                    value={planet}
                    onChange={setplaneta}
                ></Input>

                <Input placeholder="Data"
                    value={date}
                    onChange={setData}
                ></Input>

                <Input placeholder="Descrição"
                    value={description}
                    onChange={setDescriao}
                ></Input>

                <Input placeholder="Duração"
                    value={durationInDays}
                    onChange={setDuracao}
                ></Input>
            </Forms>

            <button onClick={creatNewTrip}>Cadastrar</button>

        </Body>
    )
}
export default CreateTripPages