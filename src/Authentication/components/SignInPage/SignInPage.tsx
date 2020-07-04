import React from 'react'
import { observer } from 'mobx-react'

import SignInButton from '../../../Common/components/Button/SignInButton'

import InputField from '../InputField/index'

import {
   SignInPageMainContainer,
   SignInCardContanier,
   Form,
   Heading,
   ImageContainer,
   ErrorMessage,
   DontHaveAccount,
   LabelField
} from './styledComponents'
import IbHubsLogo from '../../../Common/components/Icons/IbHubsLogo/IbHubsLogo'
import i18n from '../../i18n'

interface SignInPageTypes {
   email: string
   password: string
   errorMessage: string
   onChangePassword: Function
   onClickSignIn: (event: React.FormEvent) => void
   onChangeUserName: Function
   getUserSignInAPIStatus: number
   passwordErrorMessage: string
   emailErrorMessage: string
   validateUserName: Function
   validatePassword: Function
   t: any
}

@observer
class SignInPage extends React.Component<SignInPageTypes> {
   emailRef: React.RefObject<HTMLInputElement> = React.createRef()
   passwordRef: React.RefObject<HTMLInputElement> = React.createRef()

   componentDidMount() {
      this.emailRef.current?.focus()
   }
   changeLanguage = e => {
      i18n.changeLanguage(e.target.value)
   }

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
         emailErrorMessage,
         validateUserName,
         validatePassword,
         t
      } = this.props

      return (
         <SignInPageMainContainer>
            <SignInCardContanier>
               <ImageContainer>
                  <IbHubsLogo />
               </ImageContainer>

               <Heading>
                  {t('authenticationModule:hiTherePleaseSignUp')}
               </Heading>

               <Form>
                  <div className='h-20 '>
                     <LabelField>
                        {t('authenticationModule:userName')}
                        <InputField
                           forwardRef={this.emailRef}
                           onChangeField={onChangeUserName}
                           type={t(
                              'authenticationModule:userNameInputFieldType'
                           )}
                           value={email}
                           placeholder={t(
                              'authenticationModule:userNamePlaceholderText'
                           )}
                           errorMessage={emailErrorMessage}
                           validate={validateUserName}
                        />
                        {emailErrorMessage ? (
                           <ErrorMessage>{emailErrorMessage}</ErrorMessage>
                        ) : (
                           ''
                        )}
                     </LabelField>{' '}
                  </div>
                  <div className='h-20 '>
                     <LabelField>
                        {t('authenticationModule:password')}
                        <InputField
                           forwardRef={this.passwordRef}
                           onChangeField={onChangePassword}
                           type={t(
                              'authenticationModule:passwordInputFieldType'
                           )}
                           placeholder={t(
                              'authenticationModule:passwordPlaceholderText'
                           )}
                           value={password}
                           errorMessage={passwordErrorMessage}
                           validate={validatePassword}
                        />
                        {passwordErrorMessage ? (
                           <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
                        ) : (
                           ''
                        )}
                     </LabelField>
                  </div>
                  <SignInButton
                     apiStatus={getUserSignInAPIStatus}
                     onClickSignIn={onClickSignIn}
                     name={t('authenticationModule:login')}
                  />

                  {errorMessage ? (
                     <ErrorMessage>{errorMessage}</ErrorMessage>
                  ) : (
                     ''
                  )}
               </Form>
               <DontHaveAccount>
                  {t('authenticationModule:dontHaveanAccountText')}
               </DontHaveAccount>
               <select
                  className='bg-white border rounded focus:outline-none border-black'
                  onChange={this.changeLanguage}
               >
                  <option selected value='en'>
                     English
                  </option>
                  <option value='te'>Telugu</option>
               </select>
            </SignInCardContanier>
         </SignInPageMainContainer>
      )
   }
}

export default SignInPage
