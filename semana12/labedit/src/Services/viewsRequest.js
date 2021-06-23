import { URL_BASE } from '../Constants/URL_BASE'
import axios from 'axios'


export const comentar = (id, clear, body) => { 

    axios.post(`${URL_BASE}/${id}/commentsposts`, body,{
    headers: {
        Authorization: localStorage.getItem('token')}
      }) 
        .then((res) => {
            clear()           
            alert("Comentário enviado")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}