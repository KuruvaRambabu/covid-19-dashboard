import React from 'react'
import SignInPage from '../../components/SignInPage/'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { COVID_19_DASHBOARD_PATH } from '../../../Common/routes/RouteConstants'
import { getAccessToken } from '../../../Common/utils/StorageUtils'
import { Redirect, withRouter } from 'react-router-dom'
import {
   getFormattedError,
   getUserDisplayableErrorMessage
} from '../../../Common/utils/APIUtils'
import { goToCoivd19_DashBoard } from '../../utils/NavigationModule/NavigationModule'

@inject('authenticationStore')
@observer
class SignInRoute extends React.Component {
   @observable email
   @observable password
   @observable errorMessage
   @observable token
   @observable passwordErrorMessage
   @observable emailErrorMessage
   @observable token

   constructor(props) {
      super(props)
      this.email = ''
      this.password = ''
      this.errorMessage = ''
      this.token = false
   }

   onChangeUserName = event => {
      this.email = event.target.value
   }

   onChangePassword = event => {
      this.password = event.target.value
   }

   onSignInSuccess = () => {
      const { history } = this.props
      goToCoivd19_DashBoard(history)
      //history.replace(COVID_19_DASHBOARD_PATH)
   }

   onSignInFailure = () => {
      const { getUserSignInAPIError: apiError } = this.props.authenticationStore
      if (apiError !== null && apiError !== undefined) {
         this.errorMessage = getUserDisplayableErrorMessage(apiError)
      }
   }

   onClickSignIn = async event => {
      event.preventDefault()
      if (this.email === '') {
         this.emailErrorMessage = 'Please enter email'
         this.passwordErrorMessage = ''
      } else if (this.password === '') {
         this.emailErrorMessage = ''
         this.passwordErrorMessage = 'Please enter password'
      } else {
         this.emailErrorMessage = ''
         this.passwordErrorMessage = ''
         this.errorMessage = ''
         this.token = true
         const { userSignIn } = this.props.authenticationStore

         console.log('email', this.email)
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

   render() {
      const { getUserSignInAPIStatus } = this.props.authenticationStore
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
            token={this.token}
         />
      )
   }
}

export default withRouter(SignInRoute)
