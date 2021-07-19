import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { vaiPraFeed, vaiPraLogin } from "../Routes/cordination"

export const UseProtectAcess=()=>{
    const history= useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            vaiPraLogin(history)
        }
    }, [history])
}
export const UseProtectLogin=()=>{
    const history= useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            vaiPraFeed(history)
        }
    }, [history])
}