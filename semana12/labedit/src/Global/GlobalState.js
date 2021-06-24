import { props } from "bluebird";
import { ContextPost } from "./GlobalContext";
import { URL_BASE } from '../Constants/URL_BASE'
import { useEffect, useState } from "react";
import axios from 'axios'

export const GlobalState=(props)=>{

    const [posts, setPosts] = useState([])

    const getPosts=()=> {
    axios.get(`${URL_BASE}/posts` , {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setPosts(response.data)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }

useEffect(()=>{
    getPosts()
}, [])

    return(
        <ContextPost.Provider value={{getPosts, posts}}>
            {props.children}
        </ContextPost.Provider>
    )
}