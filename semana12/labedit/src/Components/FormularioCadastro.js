import react from 'react'
import { useHistory } from 'react-router-dom'
import { vaiPraCadastro, vaiPraLogin } from '../Routes/cordination'

const FormularioCadastro = () => {
    const history = useHistory()

    return (
        <div>
            <form onSubmit>
                <input
                    placeholder="nome"
                    name="nome"
                    required
                    type="name"
                ></input>

                <input
                    placeholder="email"
                    name="email"
                    required
                    type="email"
                ></input>

                <input
                    placeholder="senha"
                    name="senha"
                    required
                    type="password"
                ></input>

                <button>Entrar</button>

            </form>
            <button onClick={() => vaiPraLogin(history)}>Login</button>
        </div>
    )
}

export default FormularioCadastro