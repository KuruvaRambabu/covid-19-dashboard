import React from "react"
import { render, fireEvent, waitFor } from "@testing-library/react"
import { withRouter, Route, Router } from "react-router-dom"
import {
    COVID_19_DASHBOARD_PATH,
    COVID_19_SIGN_IN_PAGE_PATH
} from "../../../Common/routes/RouteConstants"
import AuthenticationService from "../../services/AuthenticationService"
import AuthenticationStore from "../../stores/AuthenticationStore"


import getUserSignResponse from "../../fixtures/getUserSignInRepsonse.json"
import SignInRoute from "."
import strings from "../../i18n/strings.json"

import { createMemoryHistory } from "history"
import { Provider } from "mobx-react"


const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
));


describe("Test cases for Sign in Route", () => {
    let authAPI;
    let authStore;

    beforeEach(() => {
        authAPI = new AuthenticationService();
        authStore = new AuthenticationStore(authAPI);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it("should render username empty error message", () => {
        const { getByText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authenticationStore={authStore} />
            </Router>
        );
        const signInButton = getByRole("button", { name: strings.LoginButtonName });

        fireEvent.click(signInButton);
        getByText(/Please enter username/i);
    });


    it("should render password empty error message", () => {
        const { getByText, getByPlaceholderText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authenticationStore={authStore} />
            </Router>
        );
        const username = "test-user";
        const usernameField = getByPlaceholderText(strings.userNamePlaceholderText);
        const signInButton = getByRole("button", { name: strings.LoginButtonName });

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.click(signInButton);

        getByText(/Please enter password/i);
    });

    // it("should submit sign-in on press enter", () => {
    //     const { getByLabelText, getByPlaceholderText, getByRole } = render(
    //         <Router history={createMemoryHistory()}>
    //             <SignInRoute authenticationStore={authStore} />
    //         </Router>
    //     );
    //     const username = "test-user";
    //     const password = "test-password";

    //     const usernameField = getByPlaceholderText(strings.userNamePlaceholderText);
    //     const passwordField = getByPlaceholderText(strings.passwordPlaceholderText);
    //     const signInButton = getByRole("button", { name: strings.LoginButtonName });

    //     fireEvent.change(usernameField, { target: { value: username } });
    //     fireEvent.change(passwordField, { target: { value: password } });
    //     fireEvent.click(signInButton)
    //     waitFor(() => getByLabelText("audio-loading"));

    // });

    it("should render signInRoute success state", async () => {
        const history = createMemoryHistory();
        const route =COVID_19_SIGN_IN_PAGE_PATH;
        history.push(route);
    
        const {
          getByPlaceholderText,
          getByRole,
          queryByRole,
          queryByLabelText,
          getByTestId
        } = render(
          <Provider authenticationStore={authStore}>
            <Router history={history}>
              <Route path={COVID_19_SIGN_IN_PAGE_PATH}>
                <SignInRoute />
              </Route>
              <Route path={COVID_19_DASHBOARD_PATH}>
                <LocationDisplay />
              </Route>
            </Router>
          </Provider>
        );
    
        const username = "test-user";
        const password = "test-password";
    
        const usernameField = getByPlaceholderText(strings.userNamePlaceholderText);
        const passwordField = getByPlaceholderText(strings.passwordPlaceholderText);
        const signInButton = getByRole("button", { name: strings.LoginButtonName });
    
        const mockSuccessPromise = new Promise(function(resolve, reject) {
          resolve(getUserSignResponse);
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI = mockSignInAPI;
    
        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);
    
        await waitFor(() => {
          expect(
            queryByRole("button", { name: strings.LoginButtonName })
          ).not.toBeInTheDocument();
          expect(getByTestId("location-display")).toHaveTextContent(
            COVID_19_DASHBOARD_PATH
          );
        });
      });
    

})

