import react from 'react'
import { useHistory } from 'react-router-dom'
import { volta } from '../Routes/cordination'

const DetalhesPage = ()=>{
    const history= useHistory()
    return(
        <div>
            
            <h1>oi eu sou o Detalhes</h1>
            <button onClick={()=>volta(history)}>Voltar</button>
        </div>
    )
}

export default DetalhesPage