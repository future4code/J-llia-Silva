import { useHistory } from 'react-router-dom'
import { volta } from '../Routes/cordination'
import Header from '../Components/Header'
import { UseProtectAcess } from '../Hooks/UseProtectPage'
import PostDetail from '../Components/PostDetail'



const DetalhesPage = () => {
    UseProtectAcess()

    const history = useHistory()
    return (
        <div>
            <Header />
        
            <button onClick={() => volta(history)}>Voltar</button>
            <PostDetail />
         
        </div>

    )
}

export default DetalhesPage