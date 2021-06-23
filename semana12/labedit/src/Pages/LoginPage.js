
import FormularioLogin from '../Components/FormularioLogin'
import { UseProtectLogin } from '../Hooks/UseProtectPage'

const LoginPage = ()=>{
    UseProtectLogin()
    return(
        <div>         
            <FormularioLogin/>
        </div>
    )
}

export default LoginPage