
import useForm from '../Hooks/UseForm'
import { postar } from "../Services/createRequest"
import { ContextPost } from "../Global/GlobalContext";
import React, { useContext } from "react";
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import { FormContainer } from '../Styled/styledComponents';


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
        <FormContainer>
            <h3>Sobre o que você quer falar hoje?</h3>
            <form onSubmit={submit}>
            <TextField
             variant="outlined"
                    name="title"
                    margin={"normal"}
                    value={form.title}
                    onChange={handleInputChange}
                    placeholder = "titulo"
                    fullWidth
                >
                </TextField>
                <TextField
                 variant="outlined"
                    name="body"
                    margin={"normal"}
                    value={form.body}
                    onChange={handleInputChange}
                    placeholder = "post"
                    fullWidth
                >
                </TextField>
                <Button
                variant="contained"
                color="secondary"
                type="submit">Postar</Button>
            </form>
        </FormContainer>
    )
}
export default FormularioPost