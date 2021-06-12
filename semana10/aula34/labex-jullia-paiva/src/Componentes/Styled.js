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
min-height:100vh;
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

export const Forms = styled.form`
display:grid;
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
export const Detail = styled.div`
display:grid;
justify-items:center;
background-color:#E22C8C;
box-shadow:5px 5px 5px;
padding:5%;
width:40%;
img{
    height:20px;
}
`
export const ListDetail = styled.div`
display:grid;
grid-template-columns: 1fr, 1fr;
background-color:transparent;
border:2px solid #E22C8C;
box-shadow:5px 5px 5px;
padding:5%;
width:20%;
`

export const MiniCard = styled.div`
display: grid;
height:auto;
grid-column:;
border-radius: 18px;
padding :5%;
height:75%;
background-color:white;
box-shadow:5px 5px 5px;
div{
    display:flex;
    justify-content:space-around;
}
p{
    line-height:0
}
img{
    border-radius:50%;
    height:30px;
}
`
export const Aprovados = styled.div`
background-color:white;
text-align:center;
width:30vw;
border-radius: 10%;
box-shadow:2px 5px 2px;
div{
    display:flex;
    align-items:center;
    justify-content:space-around;
}
`