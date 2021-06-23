
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { vaiPraLogin } from '../Routes/cordination'

const Header = ()=>{
    const history= useHistory()

    const logout=()=>{
        if(history.location.pathname === "/cadastro"){
            vaiPraLogin(history)
    }else{
            localStorage.removeItem("token")
            vaiPraLogin(history)

    }
}
    return(
        <div>     
            <Button onClick={()=>logout(history)}
            >{history.location.pathname === "/cadastro"? "Login":"Logout"}
            </Button>
        </div>
    )
}

export default Header