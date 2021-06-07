import React from 'react';
import styled from 'styled-components'

const Body = styled.body`
 background-color:#E4C2BB;
 height:100vh;
 width:100vw;`

const Titulo = styled.div`
background-color:#E22C8C;
margin-top:5%;
display:flex;
width:80vw;
justify-content:space-around;
`
const Button = styled.button`
border-radius:80px;
box-shadow:5px 10px 5px;
height:30vh;
width:20vw;
`

const Home = () => {
    return (
        <Body>

            <Titulo><h1>Labex</h1></Titulo>

            <main>   
                <Button>Area Adm</Button>
                <Button>Lista de Viagens</Button>
            </main>
        </Body>)

}
export default Home