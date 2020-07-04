import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'

import {
   getAccessToken,
   setAccessToken,
   clearUserSession
} from '../../../Common/utils/StorageUtils'
import AuthService from '../../services/AuthenticationService'

class AuthenticationStore {
   @observable getUserSignInAPIError!: Error | null
   @observable getUserSignInAPIStatus!: APIStatus
   @observable accessToken!: string
   authAPIService: AuthService

   constructor(authAPIService: AuthService) {
      this.authAPIService = authAPIService
      this.init()
   }

   @action.bound
   init() {
      this.getUserSignInAPIError = null
      this.getUserSignInAPIStatus = API_INITIAL
      this.accessToken = getAccessToken()
   }

   @action.bound
   userSignIn(request, onSuccess: () => void, onFailure: () => void) {
      const userSignInPromise = this.authAPIService.signInAPI(request)
      return bindPromiseWithOnSuccess(userSignInPromise)
         .to(this.setGetUserSignInAPIStatus, response => {
            this.setUserSignInAPIResponse(response)
            onSuccess()
         })
         .catch(error => {
            this.setGetUserSignInAPIError(error)
            onFailure()
         })
   }

   @action.bound
   setUserSignInAPIResponse(response) {
      setAccessToken(response[0].access_token)
      this.accessToken = getAccessToken()
   }

   @action.bound
   setGetUserSignInAPIError(apiError: Error | null) {
      this.getUserSignInAPIError = apiError
   }

   @action.bound
   setGetUserSignInAPIStatus(apiStatus: number) {
      this.getUserSignInAPIStatus = apiStatus
   }

   @action.bound
   userSignOut() {
      clearUserSession()
      this.init()
   }
}

export default AuthenticationStore
