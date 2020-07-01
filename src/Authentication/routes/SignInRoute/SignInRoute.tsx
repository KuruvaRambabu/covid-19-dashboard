import React from 'react'
import SignInPage from '../../components/SignInPage'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { COVID_19_DASHBOARD_PATH } from '../../../Common/routes/RouteConstants'
import { getAccessToken } from '../../../Common/utils/StorageUtils'
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'
import { goToCoivd19_DashBoard } from '../../utils/NavigationModule/NavigationModule'
import AuthenticationStore from '../../stores/AuthenticationStore'
import {
   ValidateUserName,
   ValidatePassword
} from '../../../Common/components/Validation/ValidateUserName'

import { withTranslation, WithTranslation } from 'react-i18next'

interface AuthenticationRouteProps extends WithTranslation {}

interface AuthenticationRouteProps extends RouteComponentProps {}

interface InjectedProps extends AuthenticationRouteProps {
   authenticationStore: AuthenticationStore
}

@inject('authenticationStore')
@observer
class SignInRoute extends React.Component<AuthenticationRouteProps> {
   @observable email: string
   @observable password: string
   @observable errorMessage: string
   @observable passwordErrorMessage: string
   @observable emailErrorMessage: string
   private signInref: React.RefObject<SignInPage>

   constructor(props) {
      super(props)
      this.email = ''
      this.password = ''
      this.errorMessage = ''
      this.passwordErrorMessage = ''
      this.emailErrorMessage = ''
      this.signInref = React.createRef()
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getAuthenticationStore = () => {
      return this.getInjectedProps().authenticationStore
   }

   onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.email = event.target.value
      this.checkUserNameValidation()
   }

   onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.password = event.target.value
      this.checkPasswordValidation()
   }

   onSignInSuccess = () => {
      const { history } = this.props
      goToCoivd19_DashBoard(history)
   }

   onSignInFailure = () => {
      const { getUserSignInAPIError: apiError } = this.getAuthenticationStore()

      if (apiError !== null && apiError !== undefined) {
         this.errorMessage = getUserDisplayableErrorMessage(apiError)
      }
   }

   onClickSignIn = (event: React.FormEvent) => {
      event.preventDefault()
      if (this.email === '' && this.password === '') {
         this.checkUserNameValidation()
         this.checkPasswordValidation()
         this.signInref.current?.emailRef.current?.focus()
      } else if (this.email && this.password === '') {
         this.checkPasswordValidation()
         this.signInref.current?.passwordRef.current?.focus()
      } else {
         if (this.emailErrorMessage || this.passwordErrorMessage) {
            this.checkUserNameValidation()
            this.checkPasswordValidation()
         } else {
            this.errorMessage = ''
            const { userSignIn } = this.getAuthenticationStore()
            userSignIn(
               {
                  email: this.email,
                  password: this.password
               },
               this.onSignInSuccess,
               this.onSignInFailure
            )
         }
      }
   }

   checkUserNameValidation = () => {
      const res = ValidateUserName(this.email)
      this.emailErrorMessage = res.errorMessage
   }

   checkPasswordValidation = () => {
      const res = ValidatePassword(this.password)
      this.passwordErrorMessage = res.errorMessage
   }
   render() {
      const { getUserSignInAPIStatus } = this.getAuthenticationStore()
      const { t } = this.props
      if (getAccessToken()) {
         return <Redirect to={{ pathname: COVID_19_DASHBOARD_PATH }} />
      }
      return (
         <SignInPage
            getUserSignInAPIStatus={getUserSignInAPIStatus}
            email={this.email}
            password={this.password}
            errorMessage={this.errorMessage}
            onChangePassword={this.onChangePassword}
            onChangeUserName={this.onChangeUserName}
            onClickSignIn={this.onClickSignIn}
            passwordErrorMessage={this.passwordErrorMessage}
            emailErrorMessage={this.emailErrorMessage}
            validateUserName={this.checkUserNameValidation}
            validatePassword={this.checkPasswordValidation}
            ref={this.signInref}
            t={t}
         />
      )
   }
}

export default withRouter(withTranslation('translation')(SignInRoute))
