import AccountCard from "./AccountCard";

/**
 * @constant { function } AccountsList
 * @param {*} props account datas
 * @returns DOM element diplaying user profile accounts's list
 */
const AccountsList = (props) => {


    return (
        <div>
            <h2 className="sr-only">Accounts</h2>
            { 
                props.accounts && props.accounts.map((card, index) => (                        
                    <AccountCard 
                        key ={`${index}-${card.accountId}`}
                        type = {card.type}
                        accountNumber = {card.accountNumber}
                        accountId = {card.accountId}
                        amount = {card.amount}
                        currency = {card.currency}
                        status = {card.status}
                    />
                ))
            }
        </div>
        
    )
}

export default AccountsList