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
        } = this.props

        return (
            <SignInPageMainContainer>
                <SignInCardContanier>
                    <ImageContainer>
                        <CompanyLogo src={imageUrls.ibhubsLogo} alt="ibhubs image" />
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
                            />
                        </Typo12SteelHKGrotesk>

                        <Typo12SteelHKGrotesk>
                            {strings.password}
                            <InputField
                                onChangeField={onChangePassword}
                                type={strings.passwordInputFieldType}

                                value={password}
                            />
                        </Typo12SteelHKGrotesk>
                        <PrimarySignInButton type="submit" 
                        onClick={onClickSignIn}>
                            LOGIN
                    </PrimarySignInButton>
                    {errorMessage? 
                        <ErrorMessage>{errorMessage}</ErrorMessage> : ""}
                    </Form>
                </SignInCardContanier>
            </SignInPageMainContainer>
        )
    }
}

export default SignInPage