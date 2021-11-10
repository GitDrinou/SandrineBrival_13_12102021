import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { clientPutAuthentication, clientGet } from "../api/client"
import { USER_API, ACCOUNT_JSON } from "../utils/constants"

// initial state for accounts
const initialState = {
    status: 'idle',
    isEditMode: false,
    firstName:null,
    lastName:null,
    accounts:[],
    error: null
}

/**
 * @constant fetchAccounts 
 * function createAsyncThunk (action type, async function returning a promise)
 * @returns accounts fetched
*/
export const fetchAccounts = createAsyncThunk(
    'account/fetchAccounts',
    async(userToken) => {
        const response = await clientGet(ACCOUNT_JSON)
        console.log(response.data)
        return response.data
    }
)

/**
 * @constant userDatasUpdated 
 * function createAsyncThunk (action type, async function returning a promise) - Redux Toolkit
 * @returns user profile firstName and lastName to be updated
*/
export const userDatasUpdated = createAsyncThunk(
    'accounts/userDatasUpdated',
    async(userDatas) => {
        const firstName = userDatas.firstName
        const lastName = userDatas.lastName
        const body = {"firstName": firstName, "lastName": lastName }
        const token = userDatas.keyPass
        const response = await clientPutAuthentication(USER_API, body, token)
        return response.data
    }
)

/**
 * @constant accountSlice
 * function createSlice is a function that accepts : initial state, slice name, reducers functions, 
 * which generate actions creators and actions types - Redux Toolkit
 * extraReducers is used with createAsyncThunk
 */
const accountSlice  = createSlice ({
    name: 'accounts',
    initialState,
    reducers: {
        userDataEdited(state, action) {
            state.isEditMode = "true"
        },
        userDataCancelled(state, action) {
            state.isEditMode = "false"
        },
    },
    extraReducers(builder){
        builder
            .addCase(fetchAccounts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchAccounts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.accounts = state.accounts.concat(action.payload)
            })
            .addCase(fetchAccounts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(userDatasUpdated.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(userDatasUpdated.fulfilled, (state, action) => {
                state.status= 'succeeded'
                if(state.error !== null) state.error = null
                state.isEditMode = false             
                state.firstName = action.payload.body.firstName
                state.lastName = action.payload.body.lastName    
            })
            .addCase(userDatasUpdated.rejected, (state,action) => {
                state.status = 'failed'
                action.error.message === "Rejected" ? state.error = "Error : connection server" : state.error = action.error.message
            })

    }
})

export const { userDataEdited, userDataCancelled } = accountSlice.actions

export default accountSlice.reducer