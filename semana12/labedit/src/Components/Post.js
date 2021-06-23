import { useHistory } from 'react-router-dom'
import { vaiPraDetalhes } from '../Routes/cordination'
import { CardPost } from '../Styled/styledComponentes'
import useRequestData from '../Hooks/UseRequestData'
import { URL_BASE } from '../Constants/URL_BASE'
import FormularioComentario from '../Components/FormularioComentario'




const Post = () => {
    const history = useHistory()
    const posts = useRequestData([], `${URL_BASE}/posts`)

    const onClickPost = (id) => {
        vaiPraDetalhes(history, id)   
    }

    const postsMapeados = posts.map((post) => {
        return <CardPost key={post.id}>
            <h3 onClick={() => onClickPost(post.id)} >{post.username}</h3>
            <p>{post.body}</p>
            <FormularioComentario id={post.id}/>

        </CardPost>
    })

    return (
        <div>
            {postsMapeados.length > 0 ? postsMapeados : "carregando, calma"}
        </div>
    )
}

export default Post