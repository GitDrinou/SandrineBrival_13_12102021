import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import AccountsList from "../components/common/AccountsList"
import Header from "./common/Header"
import { fakeAccounts } from '../utils/constants'

const Dashboard = () => {

    const userName = useSelector(state => state.login.userInfos.firstName)
    const idUser = useSelector(state => state.login.userInfos.id)
    const userAccounts = fakeAccounts && fakeAccounts.filter(account => account.userId === idUser)
    
    return (
        <div>
            <Header />
            <div className="mainUser bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{userName} !</h1>
                    <Link to={`/editUser/${idUser}`} className="edit-button">Edit Name</Link>
                </div>                
                <AccountsList accounts={userAccounts} />                
            </div>
        </div>
        
    )
}

export default Dashboard