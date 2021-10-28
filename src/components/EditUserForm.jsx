import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchUser } from "../features/loginSlice"
import Header from "./common/Header"
import { fakeAccounts } from '../utils/constants'
import AccountsList from "./common/AccountsList"
import { useSelector } from "react-redux"
import '../sass/user.scss'

const EditUserForm = ({ match }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (sessionStorage.getItem("sKAB") !== null) dispatch(fetchUser(JSON.parse(sessionStorage.getItem("sKAB"))))
    }, [dispatch])

    const firstName = useSelector(state => state.login.userInfos.firstName)
    const lastName = useSelector(state => state.login.userInfos.lastName)

    const { userId } = match.params
    const userAccounts = fakeAccounts && fakeAccounts.filter(account => account.userId === userId)

    return (
        <div>
            <Header />
            <div className="mainUser bg-light">
                <div className="header-editForm">
                    <h1>Welcome back</h1>
                    <form className="frmEditUser">
                        <input type="text" placeholder={firstName} />
                        <input type="text" placeholder={lastName} />
                    </form> 
                </div>
                <AccountsList accounts={userAccounts} />  
            </div>
        </div>
    )
}

export default EditUserForm