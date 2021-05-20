import React from "react";
import axios from "axios";


export default class Exercicio3 extends React.Component {

    state = {
        listaPokemons: [],
        foto:""
    }
    componentDidMount() {
        this.pegaPokemons()
    }

    pegaFotos = async (event) => {
        const url = event.target.value;
        const response = await axios.get(`${url}`);
        this.setState({ foto: response.data.sprites.front_default})
    }

    pegaPokemons = async () => {
        const response = await axios.get
            ('https://pokeapi.co/api/v2/pokemon?limit=152&offset=0');
        this.setState({listaPokemons: response.data.results})
        console.log('pokemons', response.data.results)
    };
    render() {
        const pokeList = this.state.listaPokemons.map((poke)=>{
            return ( <option key = {poke.nome} value = {poke.url}>{poke.name}</option>
            )
        })

        return (
            <div>
                <h1>Pokemons</h1>
                <select onChange={this.pegaFotos}>{pokeList}</select>
                {this.state.foto&&(<img src={this.state.foto} alt= 'foto'></img>)}
                
            </div>
        )
    }
}