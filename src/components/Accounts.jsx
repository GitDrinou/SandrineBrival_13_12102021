import AccountsList from "./AccountsList"
import { useDispatch, useSelector } from "react-redux"
import { fetchAccounts, userDataEdited } from "../features/accountSlice"
import AccountsHeader from "./AccountsHeader"
import AccountsHeaderEdit from "./AccountsHeaderEdit"
import { useEffect } from "react"

/**
 * @constant { function } Accounts
 * @param {*} props account datas
 * @returns DOM element diplaying user profile accounts
 */
const Accounts = (props) => {

    const dispatch = useDispatch()

    // React hook use for dispatch fetchAccounts function action
    useEffect(() =>{
        dispatch(fetchAccounts()) 
    }, [dispatch])

    const accounts = useSelector(state => state.account.accounts)
    const userAccounts = accounts.filter(elt => elt.userId === props.idUser)
       
    // function handle launched user data edition with dispatch userDataEdited function action
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