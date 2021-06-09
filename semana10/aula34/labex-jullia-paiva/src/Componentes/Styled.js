import styled from 'styled-components'

export const Titulo = styled.div`
background-color:#Ffe9e3;
color:#4B3C41;
margin-top:5%;
display:flex;
width:80vw;
height:20%;
justify-content:space-around;
align-items:center;
`
export const Body = styled.body`
 background-color:#E4C2BB;
 display:grid;
 height:100vh;
 width:100vw;
 `
export const Main = styled.main`
 display:flex;
 justify-content:space-around;
 width:100vw;
 `
export const Back = styled.button`
background-color:transparent;
border-radius:10px;
border:2px solid #E22C8C ;
color:#E22C8C;
font-size: x-large;
width:200%;
`
export const Card = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color:#B0BAA3;
width:20vw;
height:30vh;
box-shadow: 5px 5px 5px;
border-radius:20px;
img{
    max-width:25vw;
    width:auto;
    max-height: 18vh;
    height:auto;
    box-shadow: 2px 2px 2px;
    margin-top:5%;
}
`
export const CardContainer = styled.div`
display:grid;
justify-content:center;
align-items:center;
width:25vw;
height:40vh;`

export const Form = styled.form`
display:grid;
gap:5%;
margin:auto;
`
export const Input = styled.input`
display :flex;
justify-content:center;
background-color:transparent;
border:2px solid #E22C8C;
width:50vw;
height:10vh;
border-radius:20px;
`
