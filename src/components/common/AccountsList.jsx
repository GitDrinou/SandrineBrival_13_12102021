import AccountCard from "../AccountCard";

const AccountsList = (props) => {

    return (
        <div>
            <h2 className="sr-only">Accounts</h2>
            { 
                props.accounts && props.accounts.map((card, index) => (                        
                    <AccountCard 
                        key ={`${index}-${card.accountId}`}
                        type = {card.type}
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