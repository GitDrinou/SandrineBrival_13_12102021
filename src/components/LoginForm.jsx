import '../sass/form.scss'

const LoginForm = (props) => {

    const handleSubmitSignIn = (event) => {
        event.preventDefault()
        let login = {
            'email': event.target.username.value,
            'password': event.target.password.value
        }
        props.checkLogin(login)
    }

    return (
        <div>
            <form  onSubmit={handleSubmitSignIn}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="btn-signIn">Sign In</button>
                </form>
        </div>
    )
}

export default LoginForm