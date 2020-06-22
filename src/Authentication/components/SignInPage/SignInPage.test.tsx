import React from 'react'
import { render } from '@testing-library/react'
import SignInPage from '.'
import strings from "../../i18n/strings.json"

describe('Test cases for SignInForm', () => {
   it('should test typed userName', () => {
      const userName = 'test-user'
      const { getByPlaceholderText } = render(
         <SignInPage
            email={userName}
            onChangeUserName={() => { }}
            password={""}
            onChangePassword={() => { }}
            onClickSignIn={() => { }}
            errorMessage={""}
            getUserSignInAPIStatus={200}
            passwordErrorMessage={""}
            emailErrorMessage={""}

         />
      )
      const userNameField:any = getByPlaceholderText(
         strings.userNamePlaceholderText
      )
      expect(userNameField.value).toBe(userName)
   })

   it('should test typed password', () => {
      const password = 'test-password'
      const { getByPlaceholderText } = render(
         <SignInPage
            onChangeUserName={() => { }}
            email={""}
            onChangePassword={() => { }}
            onClickSignIn={() => { }}
            errorMessage={""}
            getUserSignInAPIStatus={200}
            passwordErrorMessage={""}
            emailErrorMessage={""}
            password={password} />
      )
      const passwordField:any = getByPlaceholderText(
         strings.passwordPlaceholderText
      )
      expect(passwordField.value).toBe(password)
   })

   it('should render given username error message', () => {
      const { getByText } = render(
         <SignInPage
            onChangeUserName={() => { }}
            email={""}
            onChangePassword={() => { }}
            onClickSignIn={() => { }}
            errorMessage={""}
            getUserSignInAPIStatus={200}
            passwordErrorMessage={""}
            password={""}

            emailErrorMessage='Invalid username' />
      )

      getByText(/invalid username/i)
   })

   it('should render given password error message', () => {
      const { getByText } = render(
         <SignInPage
            onChangeUserName={() => { }}
            email={""}
            onChangePassword={() => { }}
            onClickSignIn={() => { }}
            errorMessage={""}
            getUserSignInAPIStatus={200}
            emailErrorMessage={""}
            password={""}
            passwordErrorMessage='Invalid password' />
      )

      getByText(/invalid password/i)
   })
})
