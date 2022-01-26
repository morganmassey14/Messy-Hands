import React from "react"
import { Route } from "react-router-dom"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import { ProjectList } from "./project/ProjectList"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { GallaryList } from "./gallary/GallaryList"
import { GallaryEditForm } from "./gallary/GallaryEdit"


export const ApplicationViews = ({setAuthUser, isAuthenticated}) => {

    return (
        <>
        <Route exact path="/">
         {isAuthenticated ? <ProjectList /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/login">
            <Login setAuthUser={setAuthUser} />
        </Route>

        <Route path="/register">
            <Register setAuthUser={setAuthUser} />
        </Route>

        <Route exact path="/gallary">
            <GallaryList />
        </Route>

        <Route path="/:gallaryId(\d+)/edit">
            <GallaryEditForm />
        </Route>
        </>
    )
}