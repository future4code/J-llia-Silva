
import { URL_BASE } from '../Constants/URL_BASE'
import axios from 'axios'
import { vaiPraFeed } from '../Routes/cordination'


export const login = (body, clear, history) => {

    axios.post(`${URL_BASE}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            vaiPraFeed(history)
            alert("Bem-Vindx")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const cadastrar = (body, clear, history) => {

    axios.post(`${URL_BASE}/users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        vaiPraFeed(history)
        alert("Bem-Vindx")
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}