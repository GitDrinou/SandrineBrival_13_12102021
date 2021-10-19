import '../sass/login.scss'
import LoginForm from '../components/LoginForm'


function Login() {
    return (
        <div className="mainLogin bg-dark">
            <div className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <LoginForm />                
            </div>
        </div>
    )
}

export default Login