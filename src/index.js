import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_USER } from './utils/constants'
import './sass/main.scss'
import Header from './components/common/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'
import Footer from './components/common/Footer'
import { Provider } from 'react-redux'
import { store } from './utils/store'



ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path={ROUTE_HOME} component={Home} />
          <Route path={ROUTE_LOGIN} component={Login} />
          <Route path={ROUTE_USER} component={User} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
