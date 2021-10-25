import { useState } from 'react'
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
    const loginToken = useSelector((state) => {
        if(loginStatus === 'succeeded') {
            return `Bearer${state.login.login[0].body.token}` 
        }
    })
    

    const onUserNameChanged = (e) => { setEmail(e.target.value)}
    const onPasswordChanged = (e) => { setPassword(e.target.value)}
    const onRememberCheckChanged = (e) => { setRememberCheck(e.target.value)}

    const canSave = [email, password].every(Boolean)

    const onSignInClicked = async () => {
        if(canSave) {
            try {
                await dispatch(fetchLoginUser({ email, password }))
                await dispatch(fetchUser(loginToken))
                if(!rememberCheck) {
                    setEmail('')
                    setPassword('')
                }
            } catch (err) {
                console.error('failed :', err)
            } 
        }
    }

    
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
                    <input type="checkbox" id="remember-me" value={rememberCheck} onChange={onRememberCheckChanged} />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="button" className="btn-signIn" onClick={onSignInClicked}>Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm