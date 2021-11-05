import { capitalizeString } from "../utils/functions"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const AccountCard = (props) => {

    let btnTransactionStyle, content

    console.log(props.currency)

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
                        <Link to={`/transaction/${props.accountId}`} className={btnTransactionStyle}>View transactions</Link>
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
