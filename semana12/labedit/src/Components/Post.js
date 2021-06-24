
import React, { useContext } from "react";
import { useHistory } from 'react-router-dom'
import { vaiPraDetalhes } from '../Routes/cordination'
import { CardPost } from '../Styled/styledComponentes'
import { ContextPost } from "../Global/GlobalContext";

const Post = () => {
    const history = useHistory()
    const { posts, getPosts } = useContext(ContextPost)

    const onClickPost = (id) => {
        vaiPraDetalhes(history, id)
    }

    const postsMapeados = posts.map((post) => {
        return <CardPost onClick={() => onClickPost(post.id)} key={post.id}>
            <h3>{post.username}</h3>
            <h5>{post.title}</h5>
            <p>{post.body}</p>


        </CardPost>
    })

    return (
        <div>
            {postsMapeados.length > 0 ? postsMapeados : "carregando, calma"}
        </div>
    )
}

export default Post