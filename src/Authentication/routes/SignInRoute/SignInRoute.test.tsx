import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { withRouter, Route, Router } from 'react-router-dom'
import {
   COVID_19_DASHBOARD_PATH,
   COVID_19_SIGN_IN_PAGE_PATH
} from '../../../Common/routes/RouteConstants'
import AuthenticationService from '../../services/AuthenticationService/index.fixutes'
import AuthenticationStore from '../../stores/AuthenticationStore'

import getUserSignResponse from '../../fixtures/getUserSignInRepsonse.json'
import SignInRoute from '.'
import strings from '../../i18n/strings.json'

import { createMemoryHistory } from 'history'
import { Provider } from 'mobx-react'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('Test cases for Sign in Route', () => {
   let authAPI
   let authStore

   beforeEach(() => {
      authAPI = new AuthenticationService()
      authStore = new AuthenticationStore(authAPI)
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should render username empty error message', () => {
      const { getByText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute authenticationStore={authStore} />
         </Router>
      )
      const signInButton = getByRole('button', {
         name: strings.LoginButtonName
      })

      fireEvent.click(signInButton)
      getByText(/Please enter email/i)
   })

   it('should render password empty error message', () => {
      const { getByText, getByPlaceholderText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute authenticationStore={authStore} />
         </Router>
      )
      const username = 'test-user'
      const usernameField = getByPlaceholderText(
         strings.userNamePlaceholderText
      )
      const signInButton = getByRole('button', {
         name: strings.LoginButtonName
      })

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.click(signInButton)

      getByText(/Please enter password/i)
   })

   it('should submit sign-in on press enter', () => {
      const { getByLabelText, getByPlaceholderText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute authenticationStore={authStore} />
         </Router>
      )
      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByPlaceholderText(
         strings.userNamePlaceholderText
      )
      const passwordField = getByPlaceholderText(
         strings.passwordPlaceholderText
      )
      const signInButton = getByRole('button', {
         name: strings.LoginButtonName
      })

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(signInButton)
      waitFor(() => getByLabelText('audio-loading'))
   })

   it('should render signInRoute loading state', async () => {
      authStore.userSignOut()
      const mockLoadingPromise = new Promise(() => {})
      const mockFn = jest.fn()
      mockFn.mockReturnValue(mockLoadingPromise)
      authAPI.signInAPI = mockFn
      const history = createMemoryHistory()
      history.push(COVID_19_SIGN_IN_PAGE_PATH)
      const { getByLabelText, getByPlaceholderText, debug, getByRole } = render(
         <Router history={history}>
            <SignInRoute authenticationStore={authStore} />
         </Router>
      )
      const username = 'test-user'
      const password = 'test-password'
      const usernameField = getByPlaceholderText(
         strings.userNamePlaceholderText
      )
      const passwordField = getByPlaceholderText(
         strings.passwordPlaceholderText
      )
      const signInButton = getByRole('button', {
         name: strings.LoginButtonName
      })

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(signInButton)
      expect(mockFn).toBeCalled()

      getByLabelText('audio-loading')
      getByRole('button')
   })

   it('should render signInRoute failure state', async () => {
      const { getByText, getByPlaceholderText, getByRole, debug } = render(
         <Router history={createMemoryHistory()}>
            <SignInRoute authenticationStore={authStore} />
         </Router>
      )

      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByPlaceholderText(
         strings.userNamePlaceholderText
      )
      const passwordField = getByPlaceholderText(
         strings.passwordPlaceholderText
      )
      const signInButton = getByRole('button', {
         name: strings.LoginButtonName
      })

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      }).catch(() => {})

      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockFailurePromise)
      authStore.authAPIService.signInAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(signInButton)

      await waitFor(() => {
         const error = getUserDisplayableErrorMessage(
            authStore.getUserSignInAPIError
         )
         getByText(error)
      })
   })

   it('should render signInRoute success state', async () => {
      const history = createMemoryHistory()
      const route = COVID_19_SIGN_IN_PAGE_PATH
      history.push(route)

      const {
         getByPlaceholderText,
         getByRole,
         queryByRole,
         queryByLabelText,
         getByTestId,
         debug
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
      )

      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByPlaceholderText(
         strings.userNamePlaceholderText
      )
      const passwordField = getByPlaceholderText(
         strings.passwordPlaceholderText
      )
      const signInButton = getByRole('button', {
         name: strings.LoginButtonName
      })

      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getUserSignResponse)
      })

      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      authAPI.signInAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(signInButton)

      await waitFor(() => {
         expect(
            queryByRole('button', { name: strings.LoginButtonName })
         ).not.toBeInTheDocument()
         expect(getByTestId('location-display')).toHaveTextContent(
            COVID_19_DASHBOARD_PATH
         )
      })
   })
})
