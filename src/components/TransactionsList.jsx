import '../sass/user.scss'
import '../sass/transaction.scss'
import TransactionCard from './TransactionCard'

/**
 * @constant { function } TransactionsList
 * @param {*} props transactions datas
 * @returns DOM element diplaying transactions list
 */
const TransactionsList = (props) => {
    
    const selectTransactions = props.selectTransactions
    
    return (
        <div className="transaction-list-wrapper">
            <ul className="transaction-content">
                <li className="transaction-content-header">
                    <span>&nbsp;</span>
                    <span>DATE</span>
                    <span>DESCRIPTION</span>
                    <span>AMOUNT</span>
                    <span>BALANCE</span>
                </li>
                { 
                    selectTransactions && selectTransactions.map((card, index) => (                        
                        <TransactionCard 
                            key={`${index}`} 
                            transactionId={card.transactionId}
                            description={card.description}
                            balance={card.balance}
                            notes={card.notes}
                            categoryId={card.categoryId}
                            amount={card.amount}
                            date={card.date}
                            currency={card.currency}
                            type={card.type}
                        />
                    ))
                }
            </ul>  
        </div>
    ) 
}

export default TransactionsList