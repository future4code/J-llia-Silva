
import FormularioPost from '../Components/FormularioPost'
import Header from '../Components/Header/Header'
import Post from '../Components/Post'
import { UseProtectAcess } from '../Hooks/UseProtectPage'

import { MainCenter } from '../Styled/styledPages';


const FeedPage = () => {
    UseProtectAcess()

    return (
        <div>
            <Header />
            <MainCenter>
                    <FormularioPost />        
                <Post />
            </MainCenter>
        </div>
    )
}

export default FeedPage