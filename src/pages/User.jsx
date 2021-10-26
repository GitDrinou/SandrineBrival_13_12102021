import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../features/loginSlice'
import Dashboard from '../components/Dashboard'
import '../sass/user.scss'

function User() {
    
    const dispatch = useDispatch()
    const secureKey = useSelector(state => state.login.token)

    useEffect(() => {
        dispatch(fetchUser(secureKey))
    }, [dispatch, secureKey])
    
    const userStatus = useSelector(state => state.login.userStatus)
    
    let content

    if (userStatus === 'succeeded') {
        content = <Dashboard />
    }

    return (
        <div>
            {content}   
        </div>
        
    )
}

export default User