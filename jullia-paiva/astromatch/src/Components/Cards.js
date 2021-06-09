import axios from "axios"
import React, { useEffect, useState} from "react"
import styled from "styled-components"
import Escolhas from "./Escolha"

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jullia/person"

const CardStyle= styled.div`
display:grid;
grid-template-rows: 5fr 2fr;
border-radius:32px;
background-color:white;
box-shadow:5px 5px 10px;
width:30vw;
height:90vh;
min-width:350px;
min-height:600px;
`
const Informacoes= styled.div`
padding-top:15%;
margin:2%;
display:grid;
justify-items:center;
align-items:center;
height:80%;
img{
    width:auto;
    border-radius:20px;
    max-width:25vw;
    min-width:220px;
    height: auto;
    max-height:420px;
}
p{
    padding:2%;
    color:black;
}

`

const Card = (props) =>{
    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState([])
    const [idade, setIdade] = useState()
    const [bio, setBio] = useState([""])
    const [id,setId] = useState('')

    const pegaPerfil = ()=>{
        axios.get(url)
        .then ((res)=>{
            setFoto(res.data.profile.photo)
            setNome(res.data.profile.name)
            setIdade(res.data.profile.age)
            setBio(res.data.profile.bio)
            setId(res.data.profile.id)
        })
        .catch((err)=>{
            console.log(err.data)
        })
    }
    useEffect(()=>{
        pegaPerfil();
    },[]);

    return (
        <CardStyle>
                                           
            <Informacoes>
            <img src={foto}/>
            <h2>{nome}, {idade}</h2>
            <p>{bio}</p>
            </Informacoes>

            <div>
                <Escolhas id={id} pegaPerfil={pegaPerfil}/>
            </div>         
        </CardStyle>
    )
}
export default Card