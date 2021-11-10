import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { clientGet } from "../api/client"
import { TRANSACTION_JSON } from "../utils/constants"

// initial state for transaction
const initialState = {
    status: 'idle',
    transactions:[],
    error: null
}


/**
 * @constant fetchTransactions 
 * function createAsyncThunk (action type, async function returning a promise)
 * @returns transactions fetched
*/
export const fetchTransactions = createAsyncThunk(
    'account/fetchTransactions',
    async(userToken) => {
        const response = await clientGet(TRANSACTION_JSON)
        return response.data
    }
)


/**
 * @constant transactionSlice
 * function createSlice is a function that accepts : initial state, slice name, reducers functions, 
 * which generate actions creators and actions types - Redux Toolkit
 * extraReducers is used with createAsyncThunk
 */
const transactionSlice  = createSlice ({
    name: 'transactions',
    initialState,
    reducers: {},
    extraReducers(builder){ 
        builder
            .addCase(fetchTransactions.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.transactions = action.payload
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })        
    }
})


export default transactionSlice.reducer