import { URL_BASE } from '../Constants/URL_BASE'
import axios from 'axios'

export const comentar = (id, clear, body, getPosts) => {   
console.log("o body que chega", body)
console.log("o id que chega", id)

    axios.post(`${URL_BASE}/posts/${id}/comments`, body,{
        headers: {
            Authorization: localStorage.getItem('token')}
          }) 
        .then((res) => {
            clear()           
            alert("Comentário enviado")
            getPosts()
        })
        .catch((err) => {
            console.log(err.response)
        })
}
//----------------------------------------------------------------//
export const postar = (body, clear, getPosts)=>{
 
    axios.post(`${URL_BASE}/posts`, body,{
        headers: {
            Authorization: localStorage.getItem('token')}
          }) 
    .then((res)=>{
        alert(res.data)
        clear()   
        getPosts()  

    })
    .catch((err)=>{
       alert(err.response.data.message)
    })
}