import { useSelector } from "react-redux"
import Login from './Login'
import User from './User'


const Profile = () => {

    const loginStatus = useSelector(state => state.login.status)

    if (loginStatus === 'succeeded') {        
        return <User />
    }
    else {
        return <Login />
    }    
}

export default Profile