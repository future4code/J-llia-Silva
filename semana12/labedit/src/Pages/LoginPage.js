
import FormularioLogin from '../Components/FormularioLogin'
import { UseProtectLogin } from '../Hooks/UseProtectPage'
import { MainRight } from '../Styled/styledPages'

const LoginPage = ()=>{
    UseProtectLogin()
    return(
        <MainRight>         
            <FormularioLogin/>
        </MainRight>
    )
}

export default LoginPage