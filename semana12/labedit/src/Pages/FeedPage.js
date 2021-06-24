
import FormularioPost from '../Components/FormularioPost'
import Header from '../Components/Header'
import Post from '../Components/Post'
import { UseProtectAcess } from '../Hooks/UseProtectPage'
import { BodyCenter, Main } from '../Styled/styledPages'

const FeedPage = ()=>{
    UseProtectAcess()

    return(
        <BodyCenter>
            <Header/>  
            <Main> 
                <FormularioPost/>     
            <Post/>
            </Main>
        </BodyCenter>
    )
}

export default FeedPage