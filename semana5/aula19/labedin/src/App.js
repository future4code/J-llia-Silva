import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Idiomas from './components/Idiomas/Idiomas';
import styled from 'styled-components';

const CardGrandeContainer = styled.div `
   box-shadow: 10px 5px 10px  rgb(76, 72, 72);
    display: flex;
    margin: auto;
    align-items: center;
    padding: 2% ;
    margin-bottom: 10px;
    width: 80%;
    height: auto;`

  const CardPequenoContainer = styled.div `
  text-align: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  margin: auto;
  height: auto;
  width : 40%; `

const BackGround = styled.body `
 background-color: #ffc58b;
 `
const Footer = styled.footer `
background-color:#8daa90;
text-align: center;
height: 20vh;

`
const BotaoVerMais = styled.body `
margin: auto;
box-shadow: 10px 5px 10px  rgb(76, 72, 72);
text-align: center;
border-radius: 50px;
width: 20%;
justify-content: center;
background-color:#e56222;`

const Titulos = styled.h4`display: flex;
margin: 10%;
color : #e56222;`


const FotoPerfil = styled.img `
display: flex;
justify-content: center;
box-shadow: 10px 5px 10px  rgb(76, 72, 72);
`

const Header = styled.header`
line-height : 20%;
font-size: 2em;
width: 100%;
height: 20%;
background-color :#8daa90; `

function App() {
    
  return (
    <div className="App">
      <BackGround>
      <div className="page-section-container">
      <Header>
        <Titulos>
        <h2>Júllia Izidorio</h2>
        </Titulos>
        </Header>
      
        <img  className = "perfil" src = "https://media-exp1.licdn.com/dms/image/C4E03AQEPxgwEBeAfVQ/profile-displayphoto-shrink_200_200/0/1617191328014?e=1625702400&v=beta&t=EZTRJuHKdAr4TxpN43p-1yPSFFEG8xfA3QpdSG8xb1I"/>
        
        <CardGrandeContainer>
        <CardGrande
          nome="Dados Pessoais"
          descricao="Ajudo organizações a implementar e melhorar processos.

          Estudante de Administração de 2012 a 2019, conquistei o diploma de técnica administrativa aos 17 anos e de bacharel em Administração de Empresas aos 22 (UFPB). Trabalhei na área por 2a 6m na área privada e 10m na área pública, hoje em transição de carreira para Desenvolvedora Web curso na Labenu o Web Full Stack: em tempo integral."
        />
        </CardGrandeContainer>
      <BotaoVerMais>
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
        </BotaoVerMais>
      </div>
      <div className = "page-section-container">
        <CardPequenoContainer>
      <CardPequeno
        imagem="https://image.flaticon.com/icons/png/512/60/60543.png"
        descricao="Email: contato.julliaizidorio@gmail.com"
      />
      </CardPequenoContainer>
      <CardPequenoContainer>

      <CardPequeno
        imagem="https://image.flaticon.com/icons/png/512/17/17589.png"
        descricao="Endereço: João Pessoa - Pb"
      />
      </CardPequenoContainer>
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrandeContainer>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQF5eKRjDvpD7A/company-logo_200_200/0/1603365094877?e=1628121600&v=beta&t=JUihNU_ZQZTb30l-c-G9_8Hhwobfh_Rk12L2wNAh064"
          nome="A.D. MAIA"
          descricao="Cargo: Gerente administrativo
          Tempo integral
          Período do empregojul. de 2020 – fev. de 2021
          Duração 8 meses
         
          Cargo: Gerente comercial
          Tempo integral
          Período do empregofev. de 2020 – jun. de 2020
          Duração 5 meses
          
          Cargo: Assistente administrativo
          Tempo integral
          Período do empregojul. de 2019 – fev. de 2020
          Duração 8 meses
          
          Cargo: Estagiária
          Meio período
          Período do empregomar. de 2019 – jun. de 2019
          Duração 4 meses"

        />
        </CardGrandeContainer>
        <CardGrandeContainer>
        <CardGrande
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWEoaIJDGxxaij9wl52aPDW9JaEIrxA-Xhug25QLFTSVrZJ-E5jh2v3YteqSiDwtLlA0&usqp=CAU"
          nome="UFPB"
          descricao="Monitoria - CIDADES INTELIGENTES - pesquisa e produção acadêmica
          mar. de 2018 – out. de 2019
          
          Descrição do projetoPesquisa na área como de tec. da informação, IA, BIG DATA e de ferramentas com vistas ao auxilio de micro e pequenos empresários. Projeto com efeitos direto na comunidade local produzindo resultados práticos e efetivos. + de 100 sites produzidos gratuitamente para micro e pequenos empreendedores desde a capital até cidades circunvizinhas."
        />
        </CardGrandeContainer>
        
      </div>
      <CardGrandeContainer>
      <div className = "idioma-geral">

      <h4>Idiomas</h4>
      <div className = "idomas-conatiner">
      
      <Idiomas
        lingua = "Espanhol"
        nivel = "Fluente"
      />
      </div>
      <div className = "idomas-conatiner">
       <Idiomas
        lingua = "Ingles"
        nivel = "Intermediário"
      />
      </div>
      </div>
      </CardGrandeContainer>
      </BackGround>

      <Footer>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/174/174857.png"
          texto="LIKEDIN"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/25/25231.png"
          texto="GitHub"
        />
      </div>
      </Footer>
      
    </div>
  );
}

export default App;
