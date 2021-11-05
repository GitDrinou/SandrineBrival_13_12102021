import { configureStore } from "@reduxjs/toolkit"

import loginReducer from '../features/loginSlice'
import accountReducer from '../features/accountSlice'
import transactionReducer from '../features/transactionSlice'


/**
 * @constant { function } configureStore
 * Redux Toolkit function for store configuration. Declare reducers
*/
export const store = configureStore({
    reducer:{
        login: loginReducer,
        account: accountReducer,
        transaction: transactionReducer,
    }
})