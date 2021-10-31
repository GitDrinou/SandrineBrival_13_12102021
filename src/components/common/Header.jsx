import { Link } from 'react-router-dom'
import { ROUTE_HOME, ROUTE_PROFILE } from '../../utils/constants'
import LogoIllustration from '../../assets/argentBankLogo.png'
import '../../sass/header.scss'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { logOut } from '../../features/loginSlice'
import { useSelector } from 'react-redux'

const StyledLink = styled(Link)`
    font-weight: bold;
    color: #2c3e50;
`
function Header() {

    const dispatch = useDispatch()
    
    const userName = useSelector(state => state.login.userInfos.firstName)

    const handleSignOut = () => {
        dispatch(logOut())
    }
    
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
                { 
                    userName === undefined ? (
                        <Link to={ROUTE_PROFILE} className="main-nav-item">
                            <i className="fa fa-user-circle header-signIn"></i>
                            Sign In
                        </Link>
                    ) :
                    (
                        <div className="main-nav-item-group">
                            <Link to={ROUTE_PROFILE} className="main-nav-item">
                                <i className="fa fa-user-circle header-signIn"></i>
                                <span className="main-nav-item-text">{userName}</span>
                            </Link>
                            <Link to={ROUTE_HOME} className="main-nav-item" onClick={handleSignOut}>
                                <i className="fa fa-sign-out header-signOut"></i>
                                <span className="main-nav-item-text">Sign out</span>
                            </Link>
                        </div>
                    )
                }                               
            </div>
        </div>
    )
}

export default Header