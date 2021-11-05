import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { clientGetAuthentication } from "../api/client"
import { TRANSACTION_API } from "../utils/constants"


const initialState = {
    status: 'idle',
    transactions:[],
    error: null
}


export const fetchTransactions = createAsyncThunk(
    'account/fetchTransactions',
    async(userToken) => {
        const response = await clientGetAuthentication(TRANSACTION_API, userToken)
        return response.data
    }
)

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
                state.transactions = state.transactions.concat(action.payload.body)
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })        
    }
})


export default transactionSlice.reducer