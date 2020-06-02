import React from 'react'
import { observer } from 'mobx-react'
import InputField from '../InputField/index'
import strings from '../../i18n/strings.json'

import {
   SignInPageMainContainer,
   SignInCardContanier,
   Form,
   CompanyLogo,
   Heading,
   ImageContainer,
   PrimarySignInButton,
   ErrorMessage,
   DontHaveAccount
} from './StyledComponents'
import imageUrls from '../../../Common/ImageUrls/ImageUrls.json'
import { Typo12SteelHKGrotesk } from '../../../StyleGuide/Typos'
import SignInButton from '../../../Common/components/Button/SignInButton'

@observer
class SignInPage extends React.Component {
   render() {
      const {
         userName,
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

               <Heading>{strings.hiTherePleaseSignUp}</Heading>

               <Form>
                  <Typo12SteelHKGrotesk>
                     {strings.userName}
                     <InputField
                        onChangeField={onChangeUserName}
                        type={strings.userNameInputFieldType}
                        value={userName}
                        placeholder={strings.userNamePlaceholderText}
                        errorMessage={userNameErrorMessage}
                     />
                     {userNameErrorMessage ? (
                        <ErrorMessage>{userNameErrorMessage}</ErrorMessage>
                     ) : (
                        ''
                     )}
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
                     {passwordErrorMessage ? (
                        <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
                     ) : (
                        ''
                     )}
                  </Typo12SteelHKGrotesk>

                  <SignInButton
                     token={token}
                     onClickSignIn={onClickSignIn}
                     name={strings.LoginButtonName}
                  />

                  {errorMessage ? (
                     <ErrorMessage>{errorMessage}</ErrorMessage>
                  ) : (
                     ''
                  )}
               </Form>
               <DontHaveAccount>
                  {strings.dontHaveanAccountText}
               </DontHaveAccount>
            </SignInCardContanier>
         </SignInPageMainContainer>
      )
   }
}

export default SignInPage
