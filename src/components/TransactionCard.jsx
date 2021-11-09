import '../sass/transaction.scss'
import ChevronDown from '../assets/chevronDown.png'

/**
 * @constant { function } TransactionCard
 * @param {*} props transactions datas
 * @returns DOM element diplaying transaction's card
 */
const TransactionCard = (props) => {

    const formatAmount =  new Intl.NumberFormat('en-US', { style: 'currency', currency: props.currency })
    const amount = formatAmount.format(props.amount)

    
    return (
        <li className="transction-content-body-wrapper">
            <div className="transaction-content-body-content ">
                <span><img src={ChevronDown} alt="toggleUp" className="transaction-content-chevron" /></span>
                <span>{props.date}</span>
                <span>{props.description}</span>
                <span>{amount}</span>
                <span>${props.balance}</span>
            </div>        
        </li>
    )
}

export default TransactionCard