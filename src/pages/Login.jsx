import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { ROUTE_USER } from '../utils/constants'
import '../sass/login.scss'
import '../sass/form.scss'

const StyledButton = styled(Link)`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    border: none;
`

function Login() {
    return (
        <div className="mainLogin bg-dark">
            <div className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </div>
                    {/* PLACEHOLDER DUE TO STATIC SITE */}
                    <StyledButton to={ROUTE_USER}>Sign In</StyledButton>
                    {/* SHOULD BE THE BUTTON BELOW
                    <StyledButton>Sign In</StyledButton> */}
                </form>
            </div>
        </div>
    )
}

export default Login