import react from 'react'
import { Form } from './Styled'
import axios from 'axios'
import { BASE_URL } from '../constantes/url'
import { info } from 'autoprefixer'
import {  useState } from 'react'

const Formulario =()=>{
    const [trip, setTrip] = useState([])


    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`)
            .then((res) => {
                setTrip(res.data.trips)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }
    const tripMapeada = trip.map((infoCard) => {
        return <li>{infoCard.name}</li>
    })
    return(
     <div>
        <select>Escolha uma Viagem
            <option>{tripMapeada}</option>
        </select>
        <input placeholder= "Nome"></input>
        <input placeholder= "Idade"></input>
        <input placeholder= "Texto de Candidatura"></input>
        <input placeholder= "Profissão"></input>
       
        <select></select>
      </div>
    )
}
export default Formulario