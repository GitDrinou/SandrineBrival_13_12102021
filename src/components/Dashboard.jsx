import AccountsList from "../components/common/AccountsList"
import Header from "./common/Header"
import { fakeAccounts } from '../utils/constants'
import { useDispatch, useSelector } from "react-redux"
import { userDataEdited } from "../features/accountSlice"
import AccountsHeader from "./AccountsHeader"
import AccountsHeaderEdit from "./AccountsHeaderEdit"

const Dashboard = (props) => {

    const dispatch = useDispatch()

    const userAccounts = fakeAccounts && fakeAccounts.filter(account => account.userId === props.idUser)
 
    const handleEditUserData = () => {
        dispatch(userDataEdited())
    }

    const isEditMode = useSelector(state => state.account.isEditMode)

    let content, wrapperStyle

    console.log("Dash : ", isEditMode)

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
            <Header />
            <div className={wrapperStyle}>
                {content}       
                <AccountsList accounts={userAccounts} />                
            </div>
        </div>
        
    )
}

export default Dashboard