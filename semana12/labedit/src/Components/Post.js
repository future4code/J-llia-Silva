
import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { vaiPraDetalhes } from '../Routes/cordination';
import { ContextPost } from "../Global/GlobalContext";
import Button from '@material-ui/core/Button';
import { ThumbUpAlt, ThumbDownAlt, QuestionAnswer, Block } from "@material-ui/icons";
import { createPostVote, changePostVote, deletePostVote } from "../Services/votesRequest";
import Loading from "../Pages/LoadingPage";
import { Balao, CardPost, VotoContainer, ComentarioContainer } from "../Styled/styledComponents";


const Post = () => {
    const history = useHistory()
    const { posts, getPosts } = useContext(ContextPost)

    const upAlt = (id) => {
        createPostVote(id, getPosts)
    }
    const downAlt = (id) => {
        changePostVote(id, getPosts)
    }
    const blockvote = (id) => {
        deletePostVote(id, getPosts)
    }

    const onClickPost = (id) => {
        vaiPraDetalhes(history, id)
    }

    const postsMapeados = posts.map((post) => {
        return <CardPost key={post.id}>
            <div onClick={() => onClickPost(post.id)}>
                <h2>{post.username}</h2>
                <Balao>
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                </Balao>
            </div>
            <VotoContainer>
           
                    <Button onClick={() => upAlt(post.id)} startIcon={<ThumbUpAlt />}></Button>
                    <p>{post.voteSum}</p>
                    <Button onClick={() => downAlt(post.id)} startIcon={<ThumbDownAlt />}></Button>
        
                <Button startIcon={<Block />} onClick={() => blockvote(post.id)}></Button>
            </VotoContainer>
            <ComentarioContainer onClick={() => onClickPost(post.id)}>
                <Button startIcon={<QuestionAnswer />}></Button>
                <p>{post.commentCount ? post.commentCount : " Seja o Primeiro a Comentar"}</p>
            </ComentarioContainer>
        </CardPost>
    })

    return (
        <div>
            {postsMapeados.length > 0 ? postsMapeados : <Loading />}
        </div>
    )
}

export default Post