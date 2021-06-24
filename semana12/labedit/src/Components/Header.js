
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { vaiPraLogin } from '../Routes/cordination'
import { Head } from '../Styled/styledComponentes'

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
        <Head>     
            <Button onClick={()=>logout(history)}
            >{history.location.pathname === "/cadastro"? "Login":"Logout"}
            </Button>
        </Head>
    )
}

export default Header