import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import lrbanner from "../../images/lrbanner.png"
import logo from "../../images/logo.png"

export const Login = ({setAuthUser}) => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history =useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser [event.target.id] = event.target.value
        setLoginUser(newUser)
}

    const existingUserCheck = () => {
        return fetch(`http://localhost:2022/users?email=${loginUser.email}`)
        .then(res => res.json())
        .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
        .then(exists => {
            if (exists) {
                setAuthUser(exists)
                history.push("/")
            } else {
                setExistDialog(true)
            }
        })
    }

return (
    <main className="login">
        <dialog className="dialog__auth" open={existDialog}>
            <div>user does not exist</div>
            <button className="button__close" onClick={e => setExistDialog(false)}>Close</button>
        </dialog>
        <section className="main">
        <img className="lr__banner" src={lrbanner} alt="" />
        <img className="lr__logo" src={logo} alt="" />
            <form id="form" className="topBefore" onSubmit={handleLogin}>
                <fieldset>
                    <label htmlFor="input__email">Email</label>
                    <input type="email"
                    id="email"
                    className="email"
                    required autoFocus
                    value={loginUser.email}
                    onChange={handleInputChange} />
                </fieldset>
                <button className="login__button" type="submit">
                    LOG-IN
                </button>
                <div className="register">
                    <p> No account?</p>
                <Link to="/register">Sign up</Link>
                </div>
            </form>
        </section>
    </main>
)

}

{/* <Router>
 <Link to='https://google.com/'><button>GO GOOGLE</button></Link>
</Router> */}