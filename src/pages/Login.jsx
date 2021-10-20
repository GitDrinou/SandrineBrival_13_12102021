import '../sass/login.scss'
import LoginForm from '../components/LoginForm'
import { LOGIN_ACT } from '../utils/constants'
import { connect } from 'react-redux'


const Login = (props) => {
    return (
        <div className="mainLogin bg-dark">
            <div className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <LoginForm checkLogin={props.checkLogin} />                
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        login: state.login
    }
  }
  
  const checkLogin = (login) => {
    return {
      type: LOGIN_ACT,
      payload: login
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        checkLogin: (login) => {
        dispatch(checkLogin(login))       
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login)