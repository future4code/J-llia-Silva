import react from 'react'
import { useHistory } from 'react-router-dom'
import { vaiPraLogin } from '../Routes/cordination'

const Header = ()=>{
    const history= useHistory()
    return(
        <div>     
            <button onClick={()=>vaiPraLogin(history)}>Home</button>
        </div>
    )
}

export default Header