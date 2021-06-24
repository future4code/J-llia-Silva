
import useForm from '../Hooks/UseForm'
import { postar } from "../Services/createRequest"
import { ContextPost } from "../Global/GlobalContext";
import React, { useContext } from "react";


const FormularioPost = () => {
    const [form, handleInputChange, clear] = useForm({ title: "", body: "" })
    const { getPosts } = useContext(ContextPost)

    const submit=(event)=>{
        event.preventDefault()
        postar(form, clear, getPosts )
        event.preventDefault()
        clear()
        
    }
    return (
        <div>
            <h3>Sobre o que você quer falar hoje?</h3>
            <form onSubmit={submit}>
            <input
                    name="title"
                    value={form.title}
                    onChange={handleInputChange}
                    placeholder = "titulo"
                >
                </input>
                <input
                    name="body"
                    value={form.body}
                    onChange={handleInputChange}
                    placeholder = "post"
                >
                </input>
                <button>Postar</button>
            </form>
        </div>
    )
}
export default FormularioPost