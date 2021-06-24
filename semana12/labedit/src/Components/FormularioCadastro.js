
import useForm from '../Hooks/UseForm'
import { useHistory } from 'react-router-dom'
import { vaiPraLogin } from '../Routes/cordination'
import { Main, Body } from '../Styled/styledPages'
import { cadastrar } from '../Services/acessRequest'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'

const FormularioCadastro = () => {

    const history = useHistory()
    const [form, handleInputChange, clear] = useForm({ username: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        cadastrar(form, clear, history)
        event.preventDefault()
    }

    return (
        <Body>
            <Main>
                <h1>CADASTRO</h1>
                <form onSubmit={onSubmitForm}>
                    <TextField
                         label="Nome"
                         type="name"
                         name="username"
                         value={form.username}
                         onChange={handleInputChange}
                         variant="outlined"
                         
                         fullWidth
                         required
                    ></TextField>

                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        variant="outlined"

                        fullWidth
                        required
                    ></TextField>

                    <TextField
                       label="Senha"
                       type="password"
                       name="password"
                       value={form.password}
                       onChange={handleInputChange}
                       variant="outlined"

                       fullWidth
                       required
                    ></TextField>

                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit">Entrar</Button>

                </form>

                <button onClick={() => vaiPraLogin(history)}>Login</button>
            </Main>
        </Body>
    )
}

export default FormularioCadastro