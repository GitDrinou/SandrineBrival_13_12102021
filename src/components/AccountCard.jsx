import { capitalizeString } from "../utils/functions"

const AccountCard = (props) => {

    const formatAmount =  new Intl.NumberFormat('en-US', { style: 'currency', currency: props.currency })
    const amount = formatAmount.format(props.amount)

    return (
        <div>
            <div className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank {props.type} ({props.accountId})</h3>
                    <p className="account-amount">{amount}</p>
                    <p className="account-amount-description">{capitalizeString(props.status)} Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </div>
        </div>
    )
}

export default AccountCard
