import react from 'react'
import { useHistory } from 'react-router-dom'
import { vaiPraCadastro, vaiPraFeed } from '../Routes/cordination'

const FormularioLogin = () => {
    const history = useHistory()

    return (
        <div>
            <form onSubmit>

                <input
                    placeholder="email"
                    required
                    type="email"
                ></input>

                <input
                    placeholder="senha"
                    required
                    type="password"
                ></input>

                <button onClick={() => vaiPraFeed(history)}>Entrar</button>

            </form>

            <button onClick={() => vaiPraCadastro(history)}>Cadastre-se</button>
        </div>
    )
}

export default FormularioLogin