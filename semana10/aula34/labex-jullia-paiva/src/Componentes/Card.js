import { Card,CardContainer, Main } from './Styled'
import axios from 'axios'
import { BASE_URL } from '../constantes/url'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Header } from '../constantes/Header'


const Cards = () => {  
    const history = useHistory()

    const goTo = () => {
        history.push("/TripDetailsPage")
        history.push("/AplicationFormPages")
    }

    const [trip, setTrip]=useState([]) 
    
    const getTrips =()=>{
        axios.get(`${BASE_URL}/trips` )
        .then((res)=>{      
            console.log(res.data.trips)  
            setTrip(res.data.trips)            
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }
    const deleteTrip=(id)=>{
        console.log("id",id)
        axios.delete(`${BASE_URL}/trips/${id}`,Header)
        .then((res)=>{  
            console.log("ok",res)      
          getTrips()           
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }
    useEffect(() => {
       getTrips()
    }, [])

 const tripMapeada= trip.map((infoCard)=>{
     return <CardContainer key= {infoCard.id}>
         <button onClick={()=>deleteTrip(infoCard.id)}>Del</button>
         <Card>
         <h4>{infoCard.name}</h4>
         <p>{infoCard.description}</p>
         </Card>
         <button onClick={()=>goTo()}>Detalhes</button>
     </CardContainer>
 })

    return (
           <Main>
               {tripMapeada}
               {console.log("histoy", history)}
           </Main>
                 
        
    )
}
export default Cards