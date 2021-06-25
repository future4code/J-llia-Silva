import { useHistory } from 'react-router-dom'
import { volta } from '../Routes/cordination'
import Header from '../Components/Header/Header'
import { UseProtectAcess } from '../Hooks/UseProtectPage'
import PostDetail from '../Components/PostDetail'
import FormularioComentario from '../Components/FormularioComentario'
import { Button } from '@material-ui/core'
import { MainCenter } from '../Styled/styledPages'

const DetalhesPage = () => {
    UseProtectAcess()

    const history = useHistory()
    return (

        <div>
            <Header />
            <MainCenter>
                <FormularioComentario />
                <Button
                variant="contained"
                color="default"
                type="submit"onClick={() => volta(history)}>Voltar</Button>
                <h3>Comentários Anteriores:</h3>
                <PostDetail />
            </MainCenter>
        </div>


    )
}

export default DetalhesPage