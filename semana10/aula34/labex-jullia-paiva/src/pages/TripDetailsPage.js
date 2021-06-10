import BotaoBack from '../Componentes/BotaoBack'
import {Titulo, Body} from '../Componentes/Styled'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constantes/url";
import { Header } from '../constantes/header';

const TripDetailsPage = () =>{
    const [trip, setTrip] = useState({});

useEffect(()=>{
const getTripDetails=(id)=>{

    axios.get(`${BASE_URL}/trip${id}`,Header)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}
}, [])

    return (
        <Body>
            <Titulo>
                <h1>TripDetailsPage</h1>
                <BotaoBack/>
            </Titulo>
            
            
        </Body>
    )
}
export default TripDetailsPage