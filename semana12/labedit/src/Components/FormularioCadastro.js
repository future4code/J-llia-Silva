import react from 'react'
import useForm from '../Hooks/UseForm'
import { useHistory } from 'react-router-dom'
import { vaiPraLogin } from '../Routes/cordination'
import axios from 'axios'
import { URL_BASE } from '../Constants/URL_BASE'
import { Main, Body } from '../Styled/styledPages'

import TextField from '@material-ui/core/TextField'

const FormularioCadastro = () => {

    const history = useHistory()
    const [form, handleInputChange, clear] = useForm({ username: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
    }
    const cadastrar = () => {
        axios.post(`URL_BASE/jullia-paiva/signup`, form)
    }
    console.log(form)
    return (
        <Body>
       <Main>
       <h1>CADASTRO</h1>
            <form onSubmit={onSubmitForm}>
                <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="nome"
                    name="username"
                    value={form.username}
                    onChange={handleInputChange}
                    required
                    type="name"
                ></TextField>

                <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                    type="email"
                ></TextField>

                <TextField
                    placeholder="senha"
                    fullWidth
                    name="senha"
                    value={form.password}
                    onChange={handleInputChange}
                    required
                    type="password"
                ></TextField>

                <button>Entrar</button>

            </form>
            <button onClick={() => vaiPraLogin(history)}>Login</button>
            </Main>
        </Body>
    )
}

export default FormularioCadastro