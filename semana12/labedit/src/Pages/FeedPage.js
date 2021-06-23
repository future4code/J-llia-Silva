
import Header from '../Components/Header'
import Post from '../Components/Post'
import { UseProtectAcess } from '../Hooks/UseProtectPage'

const FeedPage = ()=>{
    UseProtectAcess()

    return(
        <div>
            <Header/>        
            <Post/>
        </div>
    )
}

export default FeedPage