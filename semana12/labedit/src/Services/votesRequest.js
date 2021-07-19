import { URL_BASE } from '../Constants/URL_BASE'
import axios from 'axios'

//------------------------POSITIVISTAS---------------------------------//

export const createPostVote = (id, getPosts) => {
    axios.post(`${URL_BASE}/posts/${id}/votes`,{direction:1}, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            alert("Voto Computado")
            getPosts()
            console.log(res)

        })
        .catch((err) => {
            alert(err.response)
        })
}

export const createCommentsVote = (id) => {
    axios.post(`${URL_BASE}/comments/${id}/votes`,{direction:1}, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            alert("Voto Computado")
            console.log(res)

        })
        .catch((err) => {
            alert(err.response)
        })
}

//--------------------------------NEGATIVISTAS--------------------------------//
export const changePostVote = (id, getPosts) => {
    axios.put(`${URL_BASE}/posts/${id}/votes`,{direction:-1}, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            alert("Voto Computado")
            getPosts()
            console.log(res)

        })
        .catch((err) => {
            alert(err.response)
        })
}

export const changeCommentsVote = (id) => {
    axios.put(`${URL_BASE}/comments/${id}/votes`,{direction:-1}, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            alert("Voto Computado")
            console.log(res)

        })
        .catch((err) => {
            alert(err.response)
        })
}
//-----------------------------NULL----------------------------------//
export const deletePostVote = (id, getPosts) => {
    axios.delete(`${URL_BASE}/posts/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            alert("Voto Anulado")
            getPosts()
            console.log(res)

        })
        .catch((err) => {
            alert(err.response)
        })
}

export const deleteCommentVote = (id) => {
    axios.delete(`${URL_BASE}/comments/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            alert("Voto Anulado")
            console.log(res)

        })
        .catch((err) => {
            alert(err.response)
        })
}