import styled from "styled-components";

export const CardPost = styled.div`
display:grid;
margin:5%;
border-radius:10px;
justify-content:center;
justify-items: center;
background-color:#8C52FF;
width:80%;
min-width:275px;
h2{
    text-align:center;
}`
export const CardComentario = styled.div`
display:flex;
flex-direction:column;
padding:2%;
margin:auto;
margin-top:5%;
border-radius:10px;
justify-content:center;
justify-items: center;
border:1px solid #8C52FF;
width:80%;
min-width:250px;
`
export const CardLogin = styled.div`
display:flex;
flex-direction:column;
padding:2%;
margin:auto;
margin-top:5%;
width:auto;
height:auto;
min-width:300px;
h1{
    color:#8C52FF
}
button{
    margin-top: 2%;
}
`

export const BalaoComentario = styled.div`
display:grid;
justify-items:center;
padding:1%;
background-color:#8C52FF;
width:90%;
min-width: 200px;
border-radius:30px 30px 30px 0px;`

export const Balao = styled.div`
display:grid;
justify-items:center;
padding:1%;
background-color:#FAFAFA;
width:90%;
min-width: 200px;
border-radius:30px 30px 30px 0px;`

export const VotoContainer = styled.div`
display:flex;
justify-content:space-between;
`

export const ComentarioContainer = styled.div`
display:flex;
justify-content:center;
&:hover{
    transform:scale(1.2)
}`

export const FormContainer = styled.div`
display:flex;
margin:auto;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
`
