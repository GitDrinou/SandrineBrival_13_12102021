import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LOGIN_API, USER_API } from "../utils/constants"
import { clientPost, clientPostAuthentication } from "../api/client"


const initialState = {
    login:[],
    status: 'idle',
    error: null,
}

export const fetchLoginUser = createAsyncThunk(
    'user/checkUser',
    async (userDatas) => {
        const response = await clientPost(LOGIN_API, userDatas)
        return response.data
    }
)

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async(userToken) => {
        const response = await clientPostAuthentication(USER_API, userToken)
        return response.data
    }
)

const loginSlice  = createSlice ({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(fetchLoginUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchLoginUser.fulfilled, (state, action) => {
                state.status= 'succeeded'
                if(state.error !== null) state.error = null
                state.login.push(action.payload)
            })
            .addCase(fetchLoginUser.rejected, (state,action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.login.push(action.payload)
            })
    }
})

export default loginSlice.reducer



