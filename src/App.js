import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_PROFILE, ROUTE_TRANSACTION } from './utils/constants'
import Header from "./components/common/Header"
import Footer from './components/common/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Transaction from './pages/Transaction'

function App() {  

    return (
        <Router>
           <div className="App">
               <Header />
               <Switch>
                   <Route exact path={ROUTE_HOME} component={Home} />
                   <Route exact path={ROUTE_LOGIN} component={Login} />
                   <Route exact path={ROUTE_PROFILE} component={Profile} />                      
                    <Route exact path={ROUTE_TRANSACTION} component={Transaction} /> 
               </Switch>
            </div> 
            <Footer />
        </Router>
    )
}


export default App