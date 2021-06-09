import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AplicationFormPages from '../pages/ApplicationFormPage'
import CreateTripPages from '../pages/CreateTripPages'
import ListTripsPage from '../pages/ListTripsPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'
import Home from '../pages/HomePage'
import Error from '../pages/Error'
import AdminHomePage from '../pages/AdminHomePage'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/AplicationFormPages">
                    <AplicationFormPages />
                </Route>

                <Route exact path="/CreateTripPages">
                    <CreateTripPages />
                </Route>

                <Route exact path="/ListTripsPage">
                    <ListTripsPage />
                </Route>

                <Route exact path="/LoginPage">
                    <LoginPage />
                </Route>

                <Route exact path="/TripDetailsPage">
                    <TripDetailsPage />
                </Route>

                <Route exact path="/AdminHomePage">
                    <AdminHomePage />
                </Route>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route>
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Rotas
