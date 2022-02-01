import React from "react"
import { Route } from "react-router-dom"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import { ProjectList } from "./project/ProjectList"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { GallaryList } from "./gallary/GallaryList"
import { GallaryEditForm } from "./gallary/GallaryEdit"
import { NavBar } from "./nav/NavBar"
import { MHCarousel } from "./MHCarousel"

export const ApplicationViews = ({setAuthUser, isAuthenticated, clearUser}) => {

    return (
        <>
        <Route path="/">
            {isAuthenticated ? <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} /> : null}
        </Route>

        <Route exact path="/login">
            <Login setAuthUser={setAuthUser} />
        </Route>

        <Route exact path="/">
         {isAuthenticated ? <ProjectList /> : <Redirect to="/login" />}
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

        <Route exact path="/carousel/:projectId">
            <MHCarousel />
        </Route>
        </>
    )
}