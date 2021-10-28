import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ROUTE_HOME, ROUTE_PROFILE, ROUTE_EDITUSER } from './utils/constants'
import './sass/main.scss'
import Home from './pages/Home'
import Profile from './pages/Profile'
import EditUserForm from './components/EditUserForm'
import Footer from './components/common/Footer'
import { Provider } from 'react-redux'
import { store } from './utils/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router>        
        <Switch>
          <Route exact path={ROUTE_HOME} component={Home} />
          <Route exact path={ROUTE_PROFILE} component={Profile} />    
          <Route exact path={ROUTE_EDITUSER} component={EditUserForm} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
