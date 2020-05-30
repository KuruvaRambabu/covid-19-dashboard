import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom"
import { observer, inject } from "mobx-react"
import { COVID_19_SIGN_IN_PAGE_PATH } from "../../routes/RouteConstants"
import { getAccessToken } from "../../utils/StorageUtils";



export const ProtectedRoute = inject('authenticationStore')(observer(({ component: Component, authenticationStore, ...rest }) => {
   
    const accessToken = authenticationStore.accessToken;
   console.log("protected route",accessToken)
    return (
        <Route {...rest}
            render={props => {
                if (accessToken) { 
                    return (<Component />)
                }
                else {
                    return (<Redirect to={{pathname:COVID_19_SIGN_IN_PAGE_PATH}} />)
                }
            }}
        />
    )
}));