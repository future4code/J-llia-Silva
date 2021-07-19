import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

//------------ Stylos----------//

const Heade = styled.header`
display:grid;
justify-content:center;
padding:5%;
background-color:#F4936F;
`
const Body = styled.body`
display:flex;
justify-content:center;
padding:5%;
`
const Del = styled.button`
background-color:transparent;
color:red;
border-radius:15px;
border:1px solid red;
`
const Acess = styled.button`
background-color:transparent;
color:green;
border-radius:15px;
border:1px solid green;
`
const Listas = styled.li`
display:flex;
justify-content:space-between;
width:50vw;
box-shadow: 2px 2px 5px;
padding:2%;
margin:2%;
`
//--------Fim dos Stylos-------//

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const header = {
    headers: {
        Authorization: "jullia-izidorio-paiva"
    }
};

export default class APP extends React.Component {
    state = {
        inputPlayList: "",
        playLists: [],
        acessPlayList: []
    }

    componentDidMount() { this.allPlayList() }



    handlePlayList = (event) => {
        this.setState({ inputPlayList: event.target.value })
    }
    //---------------------AXIOS----------------------//
    allPlayList = () => {
        axios
            .get(url, header)
            .then((certo) => {
                this.setState({ playLists: certo.data.result.list })
                console.log(this.state.playLists)
            })
            .catch((errado) => {
                console.log(errado)
            })
    }
    criaPlayList = () => {
        const body = { name: this.state.inputPlayList };
        axios
            .post(url, body, header)
            .then((certo) => {
                alert("Playlist adicionada com sucesso");
                this.allPlayList()
                console.log(certo.data)
            })
            .catch((errado) => {
                alert("Deu Ruim!")
                console.log(errado.data)
            });
    }
    deletPlayLista = (id) => {
        const urlDel = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios
            .delete(urlDel, header)
            .then((certo) => {
                alert("Essa PlayList Foi Deletada");
                this.allPlayList()
                console.log(certo.data)
            })
            .catch((errado) => {
                alert("Deu Ruim")
                console.log(errado.data)
            })
    }
    mostraPlayList = (id) => {
        const urlAcs = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks `
        axios
            .get(urlAcs, header)
            .then((certo) => {
                this.setState({ acessPlayList: certo.data })
                console.log(certo.data)

            })
            .catch((errado) => {
                console.log(errado)
            })
    }
    //------------------FIM DO AXIOS ------------------//
    render() {
        const imprimePlayList = this.state.playLists.map((lista) => {
            return <Listas key={lista.id}>{lista.name}
                <div>
                    <Acess onClick={() => this.mostraPlayList(lista.id)}>Acessar PlayList</Acess>
                    <Del onClick={() => this.deletPlayLista(lista.id)}>DEL</Del>
                </div>
            </Listas>
        })
        const acessaPlayList = this.state.acessPlayList.map((aces) => {
            return <div key={aces.nome}>
                Nome da Música:{aces.id}
                Artista:{aces.artist}
                Url: {aces.url}
            </div>
        })

        return (
            <div>
                <Heade>
                    <h1>Crie a sua PlayList:</h1>
                    <input placeholder="Nome"
                        onChange={this.handlePlayList}
                        value={this.state.inputPlayList} />
                    <button onClick={this.criaPlayList}>Criar</button>
                </Heade>
                <hr />
                <Body>
                    <h1>Playlist:</h1>
                    <h3> {imprimePlayList} </h3>
                    {this.state.acessPlayList && (
                    <div>{acessaPlayList}</div>
                    )}
                    
                </Body>
            </div>
        )
    }
}