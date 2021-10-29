import { useEffect } from 'react'
import { TITLE_PAGE_PROFILE } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../features/loginSlice'
import Dashboard from '../components/Dashboard'
import '../sass/user.scss'

function User() {

    useEffect(() => {
        document.title = TITLE_PAGE_PROFILE
    }, [])
    
    const dispatch = useDispatch()
    const secureKey = useSelector(state => state.login.token)

    useEffect(() => {
        dispatch(fetchUser(secureKey))
    }, [dispatch, secureKey])
    
    const userStatus = useSelector(state => state.login.userStatus)
    
    let content
    const firstName = useSelector(state => state.login.userInfos.firstName)
    const lastName = useSelector(state => state.login.userInfos.lastName)
    const idUser = useSelector(state => state.login.userInfos.id)

    if (userStatus === 'succeeded') {

        content = <Dashboard firstName={firstName} lastName={lastName} idUser={idUser} />
    }

    return (
        <div>
            {content}   
        </div>
        
    )
}

export default User