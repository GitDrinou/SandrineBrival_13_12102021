import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ROUTE_HOME, ROUTE_PROFILE, ROUTE_TRANSACTION } from './utils/constants'
import './sass/main.scss'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Transaction from './pages/Transaction'
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
          <Route exact path={ROUTE_TRANSACTION} component={Transaction} /> 
        </Switch>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
