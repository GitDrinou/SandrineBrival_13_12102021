import { useEffect } from "react"
import { useSelector } from "react-redux"
import { TITLE_PAGE_PROFILE, secureKey, userEmail01, userEmail02, userId } from "../utils/constants"
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
    //const idUser = useSelector(state => state.login.userInfos.id)           // select the id value frome the store


    // Temporary code to display accounts by Email (this data never change)
    const emailUser = useSelector(state => state.login.userInfos.email)
    switch (emailUser) {
        case userEmail01:
            sessionStorage.setItem(userId, JSON.stringify(userEmail01))
            break
        case userEmail02:
            sessionStorage.setItem(userId, JSON.stringify(userEmail02))
            break
        default: break
    }

    const idUser = JSON.parse(sessionStorage.getItem(userId))

    return (
        <div>
            <Accounts firstName={firstName} lastName={lastName} idUser={idUser} />
        </div>        
    )
}

export default Profile