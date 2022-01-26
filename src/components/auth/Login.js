import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

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
            <form id="form" className="topBefore" onSubmit={handleLogin}>
                <fieldset>
                    <label htmlFor="input__email"></label>
                    <input type="email"
                    id="email"
                    className="email"
                    placeholder="email address"
                    required autoFocus
                    value={loginUser.email}
                    onChange={handleInputChange} />
                </fieldset>
                <button className="login__button" type="submit">
                    Sign In
                </button>
                <button className="register__button" type="register">
                <Link to="/register" style={{ color: '#55628F' }}>Register</Link>
                </button>
            </form>
        </section>
    </main>
)

}