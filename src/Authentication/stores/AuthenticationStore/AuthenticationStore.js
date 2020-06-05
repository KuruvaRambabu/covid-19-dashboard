import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'
import {
   getAccessToken,
   setAccessToken,
   clearUserSession
} from '../../../Common/utils/StorageUtils'

class AuthenticationStore {
   @observable getUserSignInAPIError
   @observable getUserSignInAPIStatus
   @observable accessToken
   authAPIService

   constructor(authAPIService) {
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
   userSignIn(request, onSuccess, onFailure) {
      console.log("request", request)
      const userSignInPromise = this.authAPIService.singnInAPI(request)
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
      setAccessToken(response.access_token)
      this.accessToken = getAccessToken()
      console.log('authentication store', this.accesToken)
   }

   @action.bound
   setGetUserSignInAPIError(apiError) {
      console.log(apiError)
      this.getUserSignInAPIError = apiError
   }

   @action.bound
   setGetUserSignInAPIStatus(apiStatus) {
      this.getUserSignInAPIStatus = apiStatus
   }

   @action.bound
   userSignOut() {
      clearUserSession()
      this.init()
   }
}

export default AuthenticationStore
