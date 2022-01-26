import React, { useState } from "react"
import { useHistory } from "react-router-dom";

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
            <form id= "form" className="form" className="topBefore" onSubmit={handleRegister}>
                <fieldset>
                    <label htmlFor="firstName"></label>
                    <input type="text" 
                    name="firstName" 
                    id="firstName" 
                    className="firstName" 
                    placeholder="First name" 
                    required autoFocus value={registerUser.firstName} 
                    onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"></label>
                    <input type="email" 
                    name="email" 
                    id="email" className="email" 
                    placeholder="Email address" 
                    required value={registerUser.email} 
                    onChange={handleInputChange} />
                </fieldset>
                <div className="registerButtons">
                <fieldset>
                    <div className="registerbutton">
                    <button className="buttonSubmitRegister" type="submit"> Sign in </button>
                    </div>
                    <button className="buttonCancelRegister" onClick={handleCancel}> Cancel </button>
                    
                </fieldset>
                </div>
                
            </form>
        </section>
    </main>
)

}