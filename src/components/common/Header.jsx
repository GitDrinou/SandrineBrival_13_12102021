import { Link } from 'react-router-dom'
import { ROUTE_HOME, ROUTE_LOGIN } from '../../utils/constants'
import LogoIllustration from '../../assets/argentBankLogo.png'
import '../../sass/header.scss'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    font-weight: bold;
    color: #2c3e50;
`

function Header() {
    return ( 
        <div className="main-nav">
            <StyledLink to={ROUTE_HOME} className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={LogoIllustration}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </StyledLink>
            <div>
                <StyledLink to={ROUTE_LOGIN} className="main-nav-item">
                    <i className="fa fa-user-circle header-sign"></i>
                    Sign In
                </StyledLink>
            </div>
        </div>
    )
}

export default Header