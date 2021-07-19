
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { vaiPraLogin } from '../../Routes/cordination'
import { PowerSettingsNew } from "@material-ui/icons";
import { Head } from './styled';


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
            <h1>Labedit</h1>   
            <Button startIcon={<PowerSettingsNew/>}onClick={()=>logout(history)}
            >{history.location.pathname === "/cadastro"? "Login":"Logout"}
            </Button>
        </Head>
    )
}

export default Header