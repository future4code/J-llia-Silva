import axios from 'axios'
import react from 'react'
import { useHistory } from 'react-router-dom'
import { URL_BASE } from '../Constants/URL_BASE'
import useForm from '../Hooks/UseForm'
import { vaiPraCadastro} from '../Routes/cordination'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import { Main, Body } from '../Styled/styledPages'

const FormularioLogin = () => {
    const history = useHistory()
    const [form, handleInputChange, clear] = useForm({ email: "", password: "" })
    const onSubmitForm = (event) => {
        event.preventDefault()
        logar()
    }
    console.log(form)

    const logar = () => {
        axios.post(`URL_BASE/jullia-paiva/login`, form)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <Body>
            <Main>
            <h1>LOGIN</h1>
            <form onSubmit={onSubmitForm}>

                <TextField
                    variant="outlined"
                    color="primary"
                    fullWidth
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    label="email"
                    type="email"
                    required
                ></TextField>

                <TextField
                    variant="outlined"
                    color="primary"
                    fullWidth
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                    label="senha"
                    type="password"
                    required
                ></TextField>

                <Button
                variant="contained"
                color="secondary"
                    type="submit">Entrar</Button>

            </form>

            <Button
            variant="outlined" 
            color="default"
            onClick={() => vaiPraCadastro(history)}>Cadastre-se</Button>
        </Main>
        </Body>
    )
}

export default FormularioLogin