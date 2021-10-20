import { createStore, combineReducers } from "redux"
import { LOGIN_API, LOGIN_ACT } from './constants'

const userReducer =  (state = [], action) => {

    let newState

    switch(action.type) {
        case LOGIN_ACT:
            console.log(LOGIN_ACT)
            const postData = async () => {
                const response = await fetch(LOGIN_API,{
                    method: "POST",
                    body: JSON.stringify(action.payload),
                    headers: {
                        "accept": "application/json",
                        "content-type": "application/json"
                    }
                })
                console.log([state, action.payload] )
                switch(response.status) {
                    case 200:  
                        action.payload.logged = true
                        newState = [...state, action.payload]
                        return newState  
                    case 400:
                    case 500:
                        action.payload.errorText = response.statusText
                        newState = [...state, action.payload]
                        return newState  
                    default: 
                        return
                }                       
            }
            return postData()     
        default: 
            return state
    }
}


export const store = createStore(combineReducers({login: userReducer}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
