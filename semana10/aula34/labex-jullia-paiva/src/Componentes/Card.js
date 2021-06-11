import { Card, CardContainer, Main } from './Styled'
import axios from 'axios'
import { BASE_URL } from '../constantes/url'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Header } from '../constantes/header'


const Cards = () => {
    const history = useHistory()

    const goTo = (loc) => {

        if (history.location.pathname === "/ListTripsPage") {
            history.push("/AplicationFormPages")

        } else {
            history.push("/TripDetailsPage")
        }

    }
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
        const deleteTrip = (id) => {
            console.log("id", id)
            axios.delete(`${BASE_URL}/trips/${id}`, Header)
                .then((res) => {
                    alert("Esta viagem foi deletada com sucesso!")
                    getTrips()
                })
                .catch((err) => {
                    alert(err.response.data.message)
                })
        }
        useEffect(() => {
            getTrips()
        }, [])

        const tripMapeada = trip.map((infoCard) => {
            return <CardContainer key={infoCard.id}>
                {history.location.pathname === "/AdminHomePage"&&(<button onClick={()=>deleteTrip(infoCard.id)}>Delete</button>)}
                <Card>
                    <img src="https://picsum.photos/50/50" alt="foto" />
                    <h4>{infoCard.name}</h4>
                    <p>{infoCard.description}</p>
                </Card>
                <button onClick = { ()=>goTo()}> {history.location.pathname === "/ListTripsPage"? "Inscreva-se":"Ver Detalhes"}</button >

            </CardContainer>
        })

        return (
            <Main>
                {tripMapeada}
            </Main>


        )
    }
    export default Cards