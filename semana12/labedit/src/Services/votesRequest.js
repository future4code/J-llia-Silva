import { URL_BASE } from '../Constants/URL_BASE'
import axios from 'axios'

//-------------------------------------------------------------------//

export const apagarPost = (id, getPosts) => {
    axios.delete(`${URL_BASE}/posts/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            alert("Post Apagado")
            getPosts()
            console.log(res)

        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

//----------------------------------------------------------------//

export const apagarComentario = (id) => {
    axios.delete(`${URL_BASE}/comment/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            alert("Comentario Apagado")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}
