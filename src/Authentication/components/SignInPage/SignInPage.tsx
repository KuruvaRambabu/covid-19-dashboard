import React from 'react'
import { observer } from 'mobx-react'

import imageUrls from '../../../Common/ImageUrls/ImageUrls.json'
import { Typo12SteelHKGrotesk } from '../../../StyleGuide/Typos'
import SignInButton from '../../../Common/components/Button/SignInButton'


import strings from '../../i18n/strings.json'

import InputField from '../InputField/index'

import {
   SignInPageMainContainer,
   SignInCardContanier,
   Form,
   CompanyLogo,
   Heading,
   ImageContainer,
   ErrorMessage,
   DontHaveAccount
} from './StyledComponents'



type SignInPageTypes ={
   email:string
   password:string
   errorMessage:string
   onChangePassword:Function
   onClickSignIn :Function
   onChangeUserName:Function
   getUserSignInAPIStatus:number
   passwordErrorMessage:string
   emailErrorMessage:string
}



@observer
class SignInPage extends React.Component <SignInPageTypes>{
   render() {
      const {
         email,
         password,
         errorMessage,
         onChangePassword,
         onChangeUserName,
         onClickSignIn,
         getUserSignInAPIStatus,
         passwordErrorMessage,
         emailErrorMessage
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
                        value={email}
                        placeholder={strings.userNamePlaceholderText}
                        errorMessage={emailErrorMessage}
                     />
                     {emailErrorMessage ? (
                        <ErrorMessage>{emailErrorMessage}</ErrorMessage>
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
                     apiStatus={getUserSignInAPIStatus}
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
