import React from "react"
import { observer } from "mobx-react"
import InputField from "../InputField/index"
import strings from "../../i18n/strings.json"


import {
    SignInPageMainContainer,
    SignInCardContanier,
    Form,
    CompanyLogo,
    Heading,
    ImageContainer,
    PrimarySignInButton,
    ErrorMessage
} from "./StyledComponents"
import imageUrls from "../../../Common/ImageUrls/ImageUrls.json"
import { Typo12SteelHKGrotesk } from "../../../StyleGuide/Typos"


@observer
class SignInPage extends React.Component {

    render() {
        const { userName,
            password,
            errorMessage,
            onChangePassword,
            onChangeUserName,
            onClickSignIn,
            token,
            apiStatus,
            passwordErrorMessage,
            userNameErrorMessage
        } = this.props

        return (
            <SignInPageMainContainer>
                <SignInCardContanier>
                    <ImageContainer>
                        <CompanyLogo
                            src={imageUrls.ibhubsLogo}
                            alt={strings.altForCompanyLogo}
                        />
                    </ImageContainer>

                    <Heading>
                        {strings.hiTherePleaseSignUp}
                    </Heading>

                    <Form>
                        <Typo12SteelHKGrotesk>
                            {strings.userName}
                            <InputField
                                onChangeField={onChangeUserName}
                                type={strings.userNameInputFieldType}
                                value={userName}
                                placeholder={strings.userNamePlaceholderText}
                                errorMessage ={userNameErrorMessage}
                            />
                           {userNameErrorMessage ? 
                             <ErrorMessage>{userNameErrorMessage}</ErrorMessage> : "" }
                        </Typo12SteelHKGrotesk>

                        <Typo12SteelHKGrotesk>
                            {strings.password}
                            <InputField
                                onChangeField={onChangePassword}
                                type={strings.passwordInputFieldType}
                                placeholder={strings.passwordPlaceholderText}
                                value={password}
                                errorMessage={passwordErrorMessage}
                            />
                             {passwordErrorMessage ? 
                             <ErrorMessage>{passwordErrorMessage}</ErrorMessage> : "" }
                        </Typo12SteelHKGrotesk>

                        <PrimarySignInButton
                            type={strings.signInBtntype}
                            onClick={onClickSignIn}>
                            {strings.LoginButtonName}
                        </PrimarySignInButton>

                        {errorMessage ?
                            <ErrorMessage>{errorMessage}</ErrorMessage> : ""}
                    </Form>
                </SignInCardContanier>
            </SignInPageMainContainer>
        )
    }
}

export default SignInPage