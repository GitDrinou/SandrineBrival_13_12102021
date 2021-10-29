import { configureStore } from "@reduxjs/toolkit"

import loginReducer from '../features/loginSlice'
import accountReducer from '../features/accountSlice'

export const store = configureStore({
    reducer:{
        login: loginReducer,
        account: accountReducer,
    }
})