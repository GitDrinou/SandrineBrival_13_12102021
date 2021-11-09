import { capitalizeString } from "../utils/functions"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { accountsSession, ROUTE_TRANSACTION } from "../utils/constants"

/**
 * @constant  { function } AccountCard
 * @param {*} props account datas
 * @returns DOM element of each user account
 */
const AccountCard = (props) => {

    let btnTransactionStyle, content

    const formatAmount =  new Intl.NumberFormat('en-US', { style: 'currency', currency: props.currency })
    const amount = formatAmount.format(props.amount)

    const isEditMode = useSelector(state => state.account.isEditMode)

    switch(isEditMode) {
        case "true":
            btnTransactionStyle = "transaction-button-blue"
            break
        default:
            btnTransactionStyle = "transaction-button-green"
            break
    }

    // set a session storage with account data clicked to display
    const handleSessionStoreAccount = () => {
        sessionStorage.removeItem(accountsSession)
        sessionStorage.setItem(accountsSession, JSON.stringify({
            accountId: props.accountId,
            currency: props.currency,
            accountNumber: props.accountNumber, 
            type: props.type,
            amount: props.amount,
            status: props.status
        }))
    }

    // change the render DOM if user clicked on Edit button or not
    if (props.isViewMode) {
        content = <div className="account-view">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank {props.type} ({props.accountNumber})</h3>
                        <p className="account-amount">{amount}</p>
                        <p className="account-amount-description">{capitalizeString(props.status)} Balance</p>
                    </div>
                </div>
    }
    else {
        content = <div className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank {props.type} ({props.accountNumber})</h3>
                        <p className="account-amount">{amount}</p>
                        <p className="account-amount-description">{capitalizeString(props.status)} Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <Link to={ROUTE_TRANSACTION} className={btnTransactionStyle}  onClick={handleSessionStoreAccount}>View transactions</Link>
                    </div>
                </div>
    }

    return (
        <div>
            { content }
        </div>
    )
}

export default AccountCard
