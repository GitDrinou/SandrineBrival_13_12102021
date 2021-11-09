import { useEffect } from 'react'
import { TITLE_PAGE_SIGNIN,} from '../utils/constants'
import '../sass/login.scss'
import LoginForm from '../components/LoginForm'

/**
 * COMPONENT FUNCTION
 * @returns DOM Elements for the login page
 */
function Login() {
    
    // React hook use to display the page title
    useEffect(() => {
        document.title = TITLE_PAGE_SIGNIN
    }, [])
    

    return (
        <div>
            <div className="mainLogin bg-dark">
                <div className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <LoginForm />                
                </div>
            </div>
        </div>
    )
}

export default Login
