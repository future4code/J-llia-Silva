import react from 'react'
import { useHistory } from 'react-router-dom'
import { vaiPraDetalhes } from '../Routes/cordination'
import {CardPost  } from '../Styled/styledComponentes'

const Post = () => {
    const history = useHistory()
    return (
        <CardPost onClick={() => vaiPraDetalhes(history)}>
            <div>
                <img src="" alt="foto-perfil" />
                <h1>nome</h1>
            </div>
            <p>post</p>
            <div>
                <img src="" alt="icone-curtida" />
                <p>comentários</p>
            </div>
        </CardPost>
    )
}

export default Post