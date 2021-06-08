import React from "react"
import styled from 'styled-components'

const Main = styled.div`
display:grid;
grid-template-rows:1fr 1fr;
height:15vh;
position:absolute;
align-items:center;
justify-content:center;
;
width:100%;
margin:auto;
`
const Head = styled.div`
display: flex;
gap:10%;
align-items:center;
h1{
    color:#FF4D67;
}`
const Icones = styled.div`
display: flex;
justify-content:space-around;
align-items:center;
`

const Header = (props) => {
    console.log(props)
    return (
        <Main>
            <Icones>

            </Icones>
            <Head>
                <h1>Astromatch</h1>
                <button onClick={props.trocaPagina}>👨‍❤️‍👨</button>
            </Head>
        </Main>
    )
}
export default Header