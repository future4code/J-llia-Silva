
import axios from 'axios'
import { BASE_URL } from '../constantes/url'
import {  useState } from 'react'
import { Header } from '../constantes/header'

const Formulario =()=>{
    const [trip, setTrip] = useState([])
    const [form, setForm]=useState({name:"", age:"", applicationText:"",profession:"",country:""  })

    const onChange=(e)=>{
        const{name, value}=e.target
        setForm({...form, [name]:value})
    }
    const applyToTrip=(e)=>{
        e.preventDefault()
        const id = "CXRdYh9IVCViFDpLTLyE"
        axios.post(`${BASE_URL}/trips/${id}/apply`, form, Header)
        .then((res) => {
            alert("Inscrição efetuada com sucesso")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })

    }    
  
    return(
     <div>
        
        <form onSubmit={applyToTrip}>
        <input placeholder= "Nome"
       name="name"
        value={form.name}
        onChange={onChange}
        required
        ></input>
        
        <input placeholder= "Idade"
        type="number"
        name="age"
        value={form.age}
        onChange={onChange}
        ></input>

        <input placeholder= "Texto de Candidatura"
        name="applicationText"
        value={form.applicationText}
        onChange={onChange}
        ></input>

        <input placeholder= "Profissão"
        name="profession"
        value={form.profession}
        onChange={onChange}
        ></input>

        <input placeholder= "País"
        name="country"
        value={form.pcountry}
        onChange={onChange}
        ></input>
          
        <button>Increver-se</button>
        </form>
      </div>
    )
}
export default Formulario