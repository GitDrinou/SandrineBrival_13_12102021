import { secureKey } from "../utils/constants"
import AccountsList from "./AccountsList"
import { useDispatch, useSelector } from "react-redux"
import { fetchAccounts, userDataEdited } from "../features/accountSlice"
import AccountsHeader from "./AccountsHeader"
import AccountsHeaderEdit from "./AccountsHeaderEdit"
import { useEffect } from "react"

const Accounts = (props) => {

    const dispatch = useDispatch()

    const loginKey = useSelector(state => state.login.token)
    const sessionKey = sessionStorage.getItem(secureKey)

    const keyPass = loginKey ? loginKey : sessionKey

    useEffect(() =>{
        dispatch(fetchAccounts(keyPass)) 
    }, [dispatch, keyPass])

    const userAccounts = useSelector(state => state.account.accounts)
      
 
    const handleEditUserData = () => {
        dispatch(userDataEdited())
    }

    const isEditMode = useSelector(state => state.account.isEditMode)

    let content, wrapperStyle

    switch(isEditMode) {
        case "true":
            content = <AccountsHeaderEdit firstName={props.firstName} lastName={props.lastName} idUser={props.idUser} />
            wrapperStyle = "mainUser bg-light"
            break  
        default:
            content = <AccountsHeader firstName={props.firstName} handleClicked={handleEditUserData} /> 
            wrapperStyle = "mainUser bg-dark"
            break
    } 
     
    return (
        <div>
            <div className={wrapperStyle}>
                {content}       
                <AccountsList accounts={userAccounts} />
            </div>
        </div>
        
    )
}

export default Accounts