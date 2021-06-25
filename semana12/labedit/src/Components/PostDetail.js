import { useParams } from "react-router-dom"
import { URL_BASE } from '../Constants/URL_BASE'
import useRequestData from "../Hooks/UseRequestData"
import Button from '@material-ui/core/Button';
import { ThumbUpAlt, ThumbDownAlt, Block } from "@material-ui/icons";
import { createCommentsVote, changeCommentsVote, deleteCommentVote } from "../Services/votesRequest";
import { BalaoComentario, CardComentario, VotoContainer } from "../Styled/styledComponents";


const PostDetail = () => {
    const param = useParams()

    const details = useRequestData([], `${URL_BASE}/posts/${param.id}/comments`)
    const upAlt = (id) => {
        createCommentsVote(id)
    }
    const downAlt = (id) => {
        changeCommentsVote(id)
    }
    const blockvote = (id) => {
        deleteCommentVote(id)
    }
    const detailsMapedado = details.map((det) => {
        return <CardComentario key={det.id}>

            <h3>{det.username}</h3>
            <BalaoComentario>
                <p>{det.body}</p>
            </BalaoComentario>

            <VotoContainer>
                <div>
                    <Button onClick={() => upAlt(det.id)} startIcon={<ThumbUpAlt />}></Button>
                    <p>{det.voteSum}</p>
                    <Button onClick={() => downAlt(det.id)} startIcon={<ThumbDownAlt />}></Button>
                </div>
                <Button startIcon={<Block />} onClick={() => blockvote(det.id)}></Button>
            </VotoContainer>
        </CardComentario>
    })
    return (
        <div>

            {details.length > 0 ? detailsMapedado : "este post nao tem nenhum comentário"}

        </div>
    )
}
export default PostDetail