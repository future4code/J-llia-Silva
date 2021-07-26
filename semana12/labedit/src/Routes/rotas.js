
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage"
import FeedPage from "../Pages/FeedPage"
import DetalhesPage from "../Pages/DetalhesPage"
import ErrorPage from "../Pages/ErrorPage"
import CadastroPage from  "../Pages/CadastroPage"


const Rotas = ()=>{
    return(
        <BrowserRouter>
        <Switch>

            <Route exact path="/">
                <LoginPage/>
            </Route>

            <Route exact path="/cadastro">
                <CadastroPage/>
            </Route>

            <Route exact path="/feed">
                <FeedPage/>
            </Route>

            <Route exact path="/post/:id">
                <DetalhesPage/>
            </Route>

            <Route>
                <ErrorPage/>
            </Route>
            
        </Switch>
        </BrowserRouter>
    )
}
export default Rotas