import React from 'react'
import ReactDOM from 'react-dom'
import './sass/main.scss'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './utils/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
      {/* <Router>        
        <Switch>
          <Route exact path={ROUTE_HOME} component={Home} />
          <Route exact path={ROUTE_PROFILE} component={Profile} />   
          <Route exact path={ROUTE_TRANSACTION} component={Transaction} /> 
        </Switch>
        <Footer />
      </Router> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
