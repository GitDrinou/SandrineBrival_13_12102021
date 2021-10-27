import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../features/loginSlice"
import Login from './Login'
import User from './User'


const Profile = () => {
    
    const dispatch = useDispatch()

    const loginStatus = useSelector(state => state.login.status)
    const userStatus = useSelector(state => state.login.userStatus)

    useEffect(() => {
        if (sessionStorage.getItem("sKAB") !== null) dispatch(fetchUser(JSON.parse(sessionStorage.getItem("sKAB"))))
    }, [dispatch])
    

    if ((loginStatus === 'succeeded') || (userStatus === 'succeeded')) {        
        return <User />
    }
    else {
        return <Login />
    }    
}

export default Profile