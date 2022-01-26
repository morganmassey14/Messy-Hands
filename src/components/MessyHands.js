import React, {useState} from "react"
import { ApplicationViews } from "./ApplicationViews"

export const MessyHands = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("mh_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("mh_user", user.id)
        setIsAuthenticated(sessionStorage.getItem("mh_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("moodmoons_user") !== null)
      }

    return (
        <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} clearUser={clearUser} />
    )
}