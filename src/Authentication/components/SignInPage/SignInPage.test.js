import React from "react"
import { render } from "@testing-library/react"
import SignInPage from "."
import strings from "../../i18n/strings.json"

describe("Test cases for SignInForm", () => {
    it("should test typed userName", () => {
        const userName = "test-user";
        const { getByPlaceholderText } = render(
            <SignInPage userName={userName} onChangeUserName={() => { }} />
        )
        const userNameField = getByPlaceholderText(strings.userNamePlaceholderText)
        expect(userNameField.value).toBe(userName)
    })


    it("should test typed password", () => {
        const password = "test-password";
        const { getByPlaceholderText } = render(
            <SignInPage password={password} onChangePassword={() => { }} />
        )
        const passwordField = getByPlaceholderText(strings.passwordPlaceholderText)
        expect(passwordField.value).toBe(password)
    })

    it("should render given username error message", () => {
        const { getByText } = render(
          <SignInPage userNameErrorMessage="Invalid username" />
        );
    
        getByText(/invalid username/i);
      });

      it("should render given password error message", () => {
        const { getByText } = render(
          <SignInPage passwordErrorMessage="Invalid password" />
        );
    
        getByText(/invalid password/i);
      });




})