
import useForm from '../Hooks/UseForm'
import { comentar } from '../Services/viewsRequest'

const FormularioComentario = (id) => {

    const [form, handleInputChange, clear] = useForm({ body: "" })

    const onSubmitForm = (event) => {
        comentar(id, clear, form)
        event.preventDefault()
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input
                label="comentário"
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