import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { Button } from "@material-ui/core"

const CardMatches = styled.div`
display:grid;
grid-template-rows:1fr 5fr 2fr;
border-radius:32px;
background-color:white;
box-shadow:5px 5px 10px;
width:30vw;
height:90vh;
min-width:350px;
min-height:600px;`

const Lista = styled.div`
display:flex;
padding:5%;
gap:3%;
img{
    width:20%;
    height:auto;
    border-radius:50px;
    max-height:100px;
}`
const Clear = styled.div `
display:flex;
height:20%;
align-items:flex-end;
justify-content:center;`



const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jullia/matches"
const header = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const Match = () => {
    const [matches, setMaches] = useState([])

    const pegaMatches = () => {
        axios.get(url)
            .then((res) => {
                setMaches(res.data.matches)
                console.log(res.data.matches)
            })
            .catch((err) => {
                console.log(err.data)
            })
    }

    useEffect(() => {
        pegaMatches();
    }, []);
    const listaMatches = matches.map((match) => {
        return <Lista key={match.id}>
            <img src={match.photo} />
            <h4> {match.name}</h4>
        </Lista>
    })
    const apagaTudo = () => {

        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jullia/clear", header)
            .then((res) => {
                pegaMatches()
                alert("Matches apagados com Sucesso!")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <CardMatches>
            <div>
                
            </div>
            <div>
                {listaMatches}
            </div>
            <Clear>
                <Button onClick={apagaTudo} variant="contained" color="secondary">
                    Desfazer Todos os Macthes</Button>
            </Clear>


        </CardMatches>
    )
}
export default Match