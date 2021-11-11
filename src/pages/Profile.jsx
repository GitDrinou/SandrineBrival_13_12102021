import { useEffect } from "react"
import { useSelector } from "react-redux"
import { TITLE_PAGE_PROFILE, secureKey} from "../utils/constants"
import Accounts from "../components/Accounts"
import { useDispatch } from "react-redux"
import { fetchUser } from "../features/loginSlice"


/**
 * COMPONENT FUNCTION
 * @returns DOM Elements for the user's profile page
 */
function Profile() {

    const dispatch = useDispatch()
    const keyLogin = useSelector(state => state.login.token)
    const sessionKey = sessionStorage.getItem(secureKey)
    
    if (keyLogin)  {
        sessionStorage.setItem("tokenArgentBank", keyLogin)        
    }  
   
    const keyPass = (keyLogin) ? keyLogin : sessionKey

    // React hook use for display the profile title page
    // and to dispatch the fetchUser action function
    useEffect(() => {
        document.title = TITLE_PAGE_PROFILE
        dispatch(fetchUser(keyPass))    
    }, [dispatch, keyPass])
    
    const firstName = useSelector(state => state.login.userInfos.firstName) // select the firstName value from the store
    const lastName = useSelector(state => state.login.userInfos.lastName)   // select the lastName value from the store
    const emailUser = useSelector(state => state.login.userInfos.email)

    return (
        <div>
            <Accounts firstName={firstName} lastName={lastName} emailUser={emailUser} />
        </div>        
    )
}

export default Profile