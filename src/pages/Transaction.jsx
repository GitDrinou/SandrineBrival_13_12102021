import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import AccountCard from "../components/AccountCard"
import { fetchUser } from "../features/loginSlice"
import { fetchAccounts } from "../features/accountSlice"
import { fetchTransactions } from "../features/transactionSlice"
import { TITLE_PAGE_TRANSACTION, secureKey } from "../utils/constants"
import TransactionsList from "../components/TransactionsList"

/**
 * COMPONENT Transaction
 * @param { * } match - matching params (transaction ID)
 * @returns the account's amount selected and transaction's list
 */
const Transaction = ({ match }) => {

    const dispatch = useDispatch()
    const keyLogin = useSelector(state => state.login.token)
    const sessionKey = sessionStorage.getItem(secureKey)
    
    if (keyLogin)  {
        sessionStorage.setItem("tokenArgentBank", keyLogin)        
    }  
   
    const keyPass = (keyLogin) ? keyLogin : sessionKey

    // Change the title of the web page
    // launch the fetchUser action only if session data is not null ( user is still connected )
    useEffect(() => {
        document.title = TITLE_PAGE_TRANSACTION        
        dispatch(fetchUser(keyPass))          
        dispatch(fetchAccounts(keyPass))
        dispatch(fetchTransactions(keyPass))        
    }, [dispatch, keyPass])

    const accountId = match.params.accountId    // get the Route param idTransaction
        
    const userAccounts = useSelector(state => state.account.accounts)
    const selectAccount = userAccounts.find( elt => elt.accountId === accountId)
    
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
                    accountId = {accountId}
                />
                <TransactionsList accountId={selectAccount.accountId} />
            </div>            
        </div>
    )
}

export default Transaction