import BotaoBack from '../Componentes/BotaoBack'
import { Titulo, Body } from '../Componentes/Styled'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constantes/url";
import { Header } from '../constantes/header';
import useControlPages from '../hooks/useControlPages'
import { useParams } from 'react-router';

const TripDetailsPage = () => {

    useControlPages();

    const params = useParams()
    console.log(params)

    const [details, setDetails] = useState({});

    const getTripDetails = (id) => {

        axios.get(`${BASE_URL}/trip/${params.id}`, Header)
            .then((res) => {
                setDetails(res.data)
                console.log("do set", res.data)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
            console.log("details", details)
    }
    useEffect(() => {
        getTripDetails()
    }, [])

    /*const detailMap = details.map((det) => {
        return <div>{det.name}</div>
    })*/

    return (
        <Body>
            <Titulo>
                <h1>TripDetailsPage</h1>
                <BotaoBack />
            </Titulo>
            
        </Body>
    )
}
export default TripDetailsPage