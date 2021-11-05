import { useEffect } from "react"
import { useSelector } from "react-redux"
import { TITLE_PAGE_PROFILE, secureKey } from "../utils/constants"
import Accounts from "../components/Accounts"
import { useDispatch } from "react-redux"
import { fetchUser } from "../features/loginSlice"
/**
 * COMPONENT PAGE Profile
 * @returns the login component if the user is not connected and user component if user is connected successfully
 */
const Profile = () => {

    const dispatch = useDispatch()
    const keyLogin = useSelector(state => state.login.token)
    const sessionKey = sessionStorage.getItem(secureKey)
    
    if (keyLogin)  {
        sessionStorage.setItem("tokenArgentBank", keyLogin)        
    }  
   
    const keyPass = (keyLogin) ? keyLogin : sessionKey

    // Change the title page
    useEffect(() => {
        document.title = TITLE_PAGE_PROFILE
        dispatch(fetchUser(keyPass))          
    }, [dispatch, keyPass])
    
    const firstName = useSelector(state => state.login.userInfos.firstName) // select the firstName value from the store
    const lastName = useSelector(state => state.login.userInfos.lastName)   // select the lastName value from the store
    const idUser = useSelector(state => state.login.userInfos.id)           // select the id value frome the store

    // console.log(sessionStorage.getItem(secureKey))
    // console.log(isConnected) 

    return (
        <div>
            <Accounts firstName={firstName} lastName={lastName} idUser={idUser} />
        </div>        
    )
}

export default Profile