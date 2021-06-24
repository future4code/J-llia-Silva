import useForm from '../Hooks/UseForm'
import { comentar } from '../Services/createRequest'
import { useParams } from "react-router-dom"

const FormularioComentario = () => {
    const param = useParams()
    console.log("params",param)     

    const [form, handleInputChange, clear] = useForm({ body: "" })  
    
    const onSubmitForm = (event) => {
        comentar(param.id, clear, form)
        event.preventDefault()
        clear()
    }    

    return (
        <form onSubmit={onSubmitForm}>
            <input
                placeholder="comentário"
                type="text"
                name="body"
                value={form.body}
                onChange={handleInputChange}>
            </input>
            <button>comentar</button>
        </form>
    )
}
export default FormularioComentario