import React from "react"
import { Route } from "react-router-dom"
import { ProjectList } from "./project/ProjectList"
import { ItemList } from "./item/ItemList"
import { StepList } from "./step/StepList"


export const ApplicationViews = () => {

    return (
        <Route exact path="/">
         <ProjectList />
         <ItemList />
         <StepList />
        </Route>
    )
}