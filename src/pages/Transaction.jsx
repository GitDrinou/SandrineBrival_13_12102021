import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import AccountCard from "../components/AccountCard"
import { fetchTransactions } from "../features/transactionSlice"
import { TITLE_PAGE_TRANSACTION, secureKey, accountsSession, currentMonth } from "../utils/constants"
import TransactionsList from "../components/TransactionsList"
import { fetchUser } from "../features/loginSlice"

/**
 * COMPONENT FUNCTION
 * @returns DOM elements for the user's transactions for a selected account
 */
function Transaction() {

    const dispatch = useDispatch()
    const keyLogin = useSelector(state => state.login.token)
    const sessionKey = sessionStorage.getItem(secureKey)
    
    if (keyLogin)  {
        sessionStorage.setItem(secureKey, keyLogin)      
    }  
   
    const keyPass = (keyLogin) ? keyLogin : sessionKey
    
    // React hook use to display page title
    // launch the fetchUser function to verify if user is still connected
    // launch the fetchTransaction function to display transactions
    useEffect(() => {
        document.title = TITLE_PAGE_TRANSACTION 
        dispatch(fetchUser(keyPass))       
        dispatch(fetchTransactions(keyPass))        
    }, [dispatch, keyPass])
   
    const selectAccount = JSON.parse(sessionStorage.getItem(accountsSession))

    const userTransactions = useSelector(state => state.transaction.transactions)

    // ordering transactions
    const orderedTransaction = userTransactions
            .slice()
            .sort((a, b) => b.transactionId-a.transactionId)

    // filtering transaction of the selected account 
    // This filter is temporary use before PHASE 2
    const selectTransactions = orderedTransaction.filter((e) => 
        e.accountId === selectAccount.accountId && e.month === currentMonth.toString()
    )
     
    return (
        <div>
            <div className='mainUser bg-light'>
                <AccountCard 
                    type = {selectAccount.type}
                    accountNumber = {selectAccount.accountNumber}
                    amount = {selectAccount.amount}
                    currency = {selectAccount.currency}
                    status = {selectAccount.status}
                    idTransaction = {selectAccount.id}
                    isViewMode = {true}
                    accountId = {selectAccount.accountId}
                /> 
                <TransactionsList selectTransactions = {selectTransactions} />                
            </div>            
        </div>
    )
}

export default Transaction