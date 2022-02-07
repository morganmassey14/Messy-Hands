import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import lrbanner from "../../images/lrbanner.png"
import logo from "../../images/logo.png"
import { Link } from "react-router-dom"

export const Register = ({ setAuthUser }) => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", email: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

    const history = useHistory()


    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
    return fetch(`http://localhost:2022/users?email=${registerUser.email}`)
        .then(res => res.json())
        .then(user => !!user.length)
}

const handleCancel = () => {
    history.push("/login")
}
const handleRegister = (e) => {
    e.preventDefault()

    existingUserCheck()
        .then((userExists) => {
            if (!userExists) {
               
                fetch("http://localhost:2022/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: registerUser.email,
                        name: registerUser.firstName
                    })
                })
                    .then(res => res.json())
                    .then(createdUser => {
                        if (createdUser.hasOwnProperty("id")) {
                           
                            setAuthUser(createdUser)
                            history.push("/")
                        }
                    })
            }
            else {
                setConflictDialog(true)
            }
        })

}

return (
    <main className="container--register" style={{ textAlign: "center" }}>
        <dialog className="dialog dialog--password" open={conflictDialog}>
            <div>Account with that email address already exists</div>
            <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
        </dialog>
        <section className="register">
        <img className="lr__banner" src={lrbanner} alt="" />
        <img className="lr__logo" src={logo} alt="" />
        <div className="register__form">
            <form id= "form" className="topBefore" onSubmit={handleRegister}>
                <fieldset>
                    <div className="name__input">
                    <label htmlFor="firstName">Name</label>
                    </div>
                    <input type="text" 
                    name="firstName" 
                    id="firstName" 
                    className="firstName" 
                    required autoFocus value={registerUser.firstName} 
                    onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <div className="email__input">
                    <label htmlFor="inputEmail">Email</label>
                    </div>
                    <input type="email" 
                    name="email" 
                    id="email" className="email"  
                    required value={registerUser.email} 
                    onChange={handleInputChange} />
                </fieldset>
                <div className="registerButtons">
                <fieldset>
                    <div className="registerbutton">
                    <button className="buttonSubmitRegister" type="submit">CREATE ACCOUNT</button>
                    </div>
                    <div className="signIn__redirect">
                        <p>Have an account? <Link to="/login">Log in</Link></p>
                        
                    </div>
                    
                </fieldset>
                </div>
                
            </form>
            </div>
        </section>
    </main>
)

}