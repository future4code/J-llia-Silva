import BotaoBack from '../Componentes/BotaoBack'
import { Titulo, Body, Main, Detail, ListDetail, MiniCard, Aprovados } from '../Componentes/Styled'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constantes/url";
import { Header } from '../constantes/header';
import useControlPages from '../hooks/useControlPages'
import { useParams } from 'react-router';

const TripDetailsPage = () => {

    useControlPages();

    const params = useParams()

    const [details, setDetails] = useState({});
    const [body, setBody] = useState({ "approve": false });

    useEffect(() => {
        getTripDetails()
    }, [params])

    const setTrue = () => {
        setBody(true)
    }
    const setFalse = () => {
        setBody(false)
    }
    const onClickT= (id)=>{
        decideCan(id)
        setTrue()
        alert("Esta pessoa foi Aprovada")
    }
    const onClickF= (id)=>{
        decideCan(id)
        setTrue()
        alert("Esta pessoa foi Reprovada")
    }
    const decideCan = (id) => {

        axios.put(`${BASE_URL}/trips/${params.id}/candidates/${id}/decide`, body, Header)
            .then((res) => {
                getTripDetails()
                
            })
            .catch((err) => {
                
            })
        console.log("id", id)
    }

 

    const getTripDetails = (id) => {

        axios.get(`${BASE_URL}/trip/${params.id}`, Header)
            .then((res) => {
                setDetails(res.data)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })

    }

    const candidatos = details && details.trip && details.trip.candidates.map((cand) => {
        return (<MiniCard key={cand.id}>
            <div><img src="https://img.icons8.com/ios/452/user--v1.png" /><h4>{cand.name}</h4> <h6>{cand.age}</h6></div>
            <p>Porquê devo ir?{cand.applicationText}</p>
            <p>Profissão:{cand.profession}</p>
            <p>País:{cand.country}</p>
            <div>
                <button onClick={() => onClickT(cand.id)}>aprovar</button>
                <button onClick={() => onClickF(cand.id)}>Reprovar</button>
            </div>

        </MiniCard>
        )
    })
    const aprovados = details && details.trip && details.trip.approved.map((apr) => {
        return (<Aprovados>
            <div><img src="https://img.icons8.com/ios/452/user--v1.png" /><h4>{apr.name}</h4><h6>{apr.age}</h6></div>
            <p>{apr.country}</p>
        </Aprovados>
        )
    })

    return (
        <Body>
            <Titulo>
                <h1>TripDetailsPage</h1>
                <BotaoBack />
            </Titulo>
            <Main>
                <Detail>
                    {details.trip && details.trip.name && (<h1>{details.trip.name}</h1>)}
                    {details.trip && details.trip.description && (<h3>{details.trip.description}</h3>)}
                    {details.trip && details.trip.durationInDays && (<h3>Duração: {details.trip.durationInDays}</h3>)}
                    {details.trip && details.trip.planet && (<h3>Planeta: {details.trip.planet}</h3>)}
                    {details.trip && details.trip.date && (<h3>Data: {details.trip.date}</h3>)}
                    {console.log("details", details)}
                    <h1>Integrantes:</h1>
                    {aprovados}
                </Detail>
                <ListDetail>
                    <h1> Pendentes: </h1> {candidatos}

                </ListDetail>


            </Main>
        </Body>
    )
}
export default TripDetailsPage