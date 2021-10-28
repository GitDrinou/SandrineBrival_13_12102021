import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLoginUser, fetchUser } from '../features/loginSlice'

import '../sass/form.scss'

const LoginForm = () => {

    let errorMsg

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberCheck, setRememberCheck] = useState(false)

    const dispatch = useDispatch()
    
    const loginStatus = useSelector(state => state.login.status)
    const loginError = useSelector(state => state.login.error)

    const onUserNameChanged = (e) => { 
        if (localStorage.getItem("logsAB") !== null) localStorage.removeItem("logsAB")
        setEmail(e.target.value) 
    }
    const onPasswordChanged = (e) => { setPassword(e.target.value) }
    
    const canSave = [email, password].every(Boolean)

   const onRememberCheckChanged = (e) => { 
        let valCheck = e.target.checked
        
        if (valCheck === true) {
            setRememberCheck(true)
            localStorage.setItem("logsAB",JSON.stringify({ email, password, valCheck }))
        }
        else if (valCheck === false) {
            setRememberCheck(false)
            localStorage.removeItem("logsAB")
        }               
    }
    
    const onSignInClicked = () => {
        if(canSave) {
            dispatch(fetchLoginUser({ email, password }))                
            if(!rememberCheck) {
                setEmail('')
                setPassword('')
            }             
        }                   
    }
  
    const secureKey = useSelector(state => state.login.token)

    useEffect(() => {
        if (loginStatus === 'succeeded') {
            dispatch(fetchUser(secureKey))          
        }     
        if (localStorage.getItem("logsAB") !=null) {  
            let userLogs = JSON.parse(localStorage.getItem("logsAB"))       
            setEmail(userLogs.email)
            setPassword(userLogs.password)
            setRememberCheck(userLogs.valCheck)
        }
    }, [loginStatus, dispatch, secureKey,email])
    
    if (loginStatus === 'failed') {
        errorMsg = <span className="error-message"> {loginError} </span>
    }

    return (
        <div>
            <form>                
                {errorMsg}
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={email} onChange={onUserNameChanged} placeholder="Enter your email" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={onPasswordChanged} placeholder="Enter your password" required />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" checked={rememberCheck ? true : false} onChange={onRememberCheckChanged} />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="button" className="btn-signIn" onClick={onSignInClicked}>Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm