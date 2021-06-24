import { useParams } from "react-router-dom"
import { URL_BASE } from '../Constants/URL_BASE'
import useRequestData from "../Hooks/UseRequestData"

const PostDetail=()=>{
    const param = useParams()
    
    const details= useRequestData([], `${URL_BASE}/posts/${param.id}/comments`)

    const detailsMapedado= details.map((det)=>{
        return<div key={det.id}>
            <h3>{det.username}</h3>
            <p>{det.body}</p>
        </div>
    })
    return(
        <div>
               
            {details.length>0 ? detailsMapedado: "este post nao tem nenhum comentário"}
         
        </div>
    )
}
export default PostDetail