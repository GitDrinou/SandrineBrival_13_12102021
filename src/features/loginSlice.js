import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LOGIN_API, secureKey, USER_API } from "../utils/constants"
import { clientPost, clientPostAuthentication } from "../api/client"

// initial state for login
const initialState = {
    userInfos:[],
    status: 'idle',
    error: null,
    userStatus: 'idle',
    token: null,
}


/**
 * @constant fetchLoginUser 
 * function createAsyncThunk (action type, async function returning a promise)
 * @returns the result of the query user
*/
export const fetchLoginUser = createAsyncThunk(
    'login/checkUser',
    async (userDatas) => {
        const response = await clientPost(LOGIN_API, userDatas)
        return response.data
    }    
)


/**
 * @constant fetchUser 
 * function createAsyncThunk (action type, async function returning a promise)
 * @returns the user infos like firstName and lastName
*/
export const fetchUser = createAsyncThunk(
    'login/fetchUser',
    async(userToken) => {
        const response = await clientPostAuthentication(USER_API, userToken)
        return response.data
    }
)


/**
 * @constant loginSlice
 * function createSlice is a function that accepts : initial state, slice name, reducers functions, 
 * which generate actions creators and actions types - Redux Toolkit
 * extraReducers is used with createAsyncThunk
 */
const loginSlice  = createSlice ({
    name: 'login',
    initialState,
    reducers: {
        logOut(state,action) {
            state.userInfos = []
            state.status = 'idle'
            state.userStatus = 'idle'
            state.token = null
            sessionStorage.removeItem(secureKey)
            sessionStorage.removeItem("isEdited")
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
                action.error.message === "Rejected" ? state.error = "Error : connection server" : state.error = action.error.message
                sessionStorage.removeItem(secureKey)
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

export const { logOut } = loginSlice.actions

export default loginSlice.reducer



