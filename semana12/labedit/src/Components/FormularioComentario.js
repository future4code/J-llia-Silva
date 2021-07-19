import useForm from '../Hooks/UseForm'
import { comentar } from '../Services/createRequest'
import { useParams } from "react-router-dom"
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import { FormContainer } from '../Styled/styledComponents'

const FormularioComentario = () => {
    const param = useParams()
    console.log("params", param)

    const [form, handleInputChange, clear] = useForm({ body: "" })

    const onSubmitForm = (event) => {
        comentar(param.id, clear, form)
        event.preventDefault()
        clear()
    }

    return (
        <FormContainer>
            <h3>Deixe aqui seu comentário:</h3>
            <form onSubmit={onSubmitForm}>
                <TextField
                    variant="outlined"
                    placeholder="comentário"
                    type="text"
                    margin={"normal"}
                    fullWidth
                    name="body"
                    value={form.body}
                    onChange={handleInputChange}>
                </TextField>

                <Button
                    variant="contained"
                    color="secondary"
                    type="submit">comentar
                </Button>
            </form>
        </FormContainer>
    )
}
export default FormularioComentario