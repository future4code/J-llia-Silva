import { useHistory } from 'react-router-dom'
import { volta } from '../Routes/cordination'
import Header from '../Components/Header'
import { UseProtectAcess } from '../Hooks/UseProtectPage'
import PostDetail from '../Components/PostDetail'
import FormularioComentario from '../Components/FormularioComentario'
import { BodyCenter, Main } from '../Styled/styledPages'



const DetalhesPage = () => {
    UseProtectAcess()

    const history = useHistory()
    return (

        <BodyCenter>
            <Header />
            <Main>
                <FormularioComentario />
                <button onClick={() => volta(history)}>Voltar</button>
                <PostDetail />
            </Main>
        </BodyCenter>


    )
}

export default DetalhesPage