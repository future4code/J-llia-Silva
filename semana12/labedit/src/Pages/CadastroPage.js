import Header from '../Components/Header/Header'
import FormularioCadastro from '../Components/FormularioCadastro'
import { MainRight } from '../Styled/styledPages'

const CadastroPage = () => {
    return (
        <div>
            <Header/>
            <MainRight>
                 <FormularioCadastro /> 
            </MainRight>
          
        </div>
    )
}

export default CadastroPage