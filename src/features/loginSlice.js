import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LOGIN_API, USER_API } from "../utils/constants"
import { clientPost, clientPostAuthentication } from "../api/client"


const initialState = {
    userInfos:[],
    status: 'idle',
    error: null,
    isLogsSaved: false,
    logInfos:[],
    userStatus: 'idle',
    token: null,
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
    reducers: {
        logRemember(state, action) {
            console.log(action.payload)
            state.isLogsSaved = action.payload.rememberCheck
            state.logInfos = {
                email: action.payload.email,
                password: action.payload.password
            }
        },
        logOut(state,action) {
            state.userInfos = []
            state.status = 'idle'
            state.userStatus = 'idle'
            state.token = null
            if (state.isLogsSaved === false) state.logInfos = []
        }
    },
    extraReducers(builder){
        builder
            .addCase(fetchLoginUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchLoginUser.fulfilled, (state, action) => {
                state.status= 'succeeded'
                if(state.error !== null) state.error = null
                state.token = 'Bearer'.concat(action.payload.body.token)
            })
            .addCase(fetchLoginUser.rejected, (state,action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.userStatus= 'succeeded'
                if(state.error !== null) state.error = null
                state.userInfos = {
                    email: action.payload.body.email,
                    firstName: action.payload.body.firstName,
                    lastName: action.payload.body.lastName,
                    id: action.payload.body.id
                }
            })  
    }
})

export const { logRemember, logOut } = loginSlice.actions

export default loginSlice.reducer



