import { capitalizeString } from "../utils/functions"
import { useSelector } from "react-redux"

const AccountCard = (props) => {

    let btnTransactionStyle

    const formatAmount =  new Intl.NumberFormat('en-US', { style: 'currency', currency: props.currency })
    const amount = formatAmount.format(props.amount)

    const isEditMode = useSelector(state => state.account.isEditMode)

    isEditMode ? btnTransactionStyle = "transaction-button-blue" : btnTransactionStyle = "transaction-button-green"

    return (
        <div>
            <div className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank {props.type} ({props.accountId})</h3>
                    <p className="account-amount">{amount}</p>
                    <p className="account-amount-description">{capitalizeString(props.status)} Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className={btnTransactionStyle}>View transactions</button>
                </div>
            </div>
        </div>
    )
}

export default AccountCard
