import React from "react";
import axios from "axios";


export default class Exercicio2 extends React.Component {
    state = {
        missoes: []
    }

    buscarMissoes = () => {
        axios
            .get("https://api.spacexdata.com/v3/missions")
            .then((certo) => {
                console.log(certo.data)
                this.setState({ missoes: certo.data })
            })
            .catch((errado) => {
                console.log(errado.data)
            })
    }
    render() {
        const renderizaMissao = this.state.missoes.map((mis) => {
            return <div key={mis.mission_id} >
                <h3> Nome:{mis.mission_name} </h3>
                <h3> Fabricantes:{mis.manufacturers.map((fab) => {
                    return <p>{fab}</p>
                })}
                    </h3>
                <h3><a href={mis.wikipedia}>Link Winkipedia</a></h3>
                <hr />
            </div>
        })
        return (
            <div>
                <h1>Missões</h1>
                <button onClick={this.buscarMissoes}>Buscar Missões</button>
                {renderizaMissao}
            </div>
        )
    }
}