import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { clientPutAuthentication } from "../api/client"
import { USER_API } from "../utils/constants"

const initialState = {
    status: 'idle',
    isEditMode: false,
    firstName:null,
    lastName:null,
    error: null
}


export const userDatasUpdated = createAsyncThunk(
    'accounts/userDatasUpdated',
    async(userDatas) => {
        const firstName = userDatas.firstName
        const lastName = userDatas.lastName
        const body = {"firstName": firstName, "lastName": lastName }
        const token = userDatas.secureKey
        const response = await clientPutAuthentication(USER_API, body, token)
        return response.data
    }
)

const accountSlice  = createSlice ({
    name: 'accounts',
    initialState,
    reducers: {
        userDataEdited(state, action) {
            state.isEditMode = "true"
        },
        userDataCancelled(state, action) {
            state.isEditMode = "false"
        }
    },
    extraReducers(builder){
        builder
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