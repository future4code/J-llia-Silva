import React, { useState } from "react"
import styled from 'styled-components'
import Header from "./Components/Header";
import PagHome from "./pages/paghome";
import PagMatch from "./pages/pagmacth";


const Body = styled.body`
display:grid;
justify-content:center;
align-items:center;
background-color:#FF4D67;
height:100vh;`



const APP = () => {
    const [pagina, setPagina] = useState("true")

    const trocaPagina = () => {
        setPagina(!pagina)
    }
    //AQUI TENTEI FAZER pagina={this.trocaPagina()} MAS DÁ LOOPING INFINITO ver props no header//

    return (
        <Body>
            <Header trocaPagina={trocaPagina} />
            {pagina ? <PagHome /> : <PagMatch />}
        </Body>
    )
}
export default APP