
import {useHistory} from 'react-router-dom'
import {Back} from './Styled'

const BotaoBack = () => {
    const history=useHistory()
    const goToBack=()=>{
        history.goBack()
    }
    return(
        <div>
           <Back onClick={goToBack}>Voltar</Back> 
        </div>
    
    )
}
export default BotaoBack