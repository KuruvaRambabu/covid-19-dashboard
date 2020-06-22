import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'
import {
   getAccessToken,
   setAccessToken,
   clearUserSession
} from '../../../Common/utils/StorageUtils'
import AuthenticationService from "../../services/AuthenticationService/index.fixutes"


class AuthenticationStore {
   @observable getUserSignInAPIError!:string|null
   @observable getUserSignInAPIStatus!:number
   @observable accessToken! :string
   authAPIService:AuthenticationService

   constructor(authAPIService:AuthenticationService) {
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
   userSignIn(request:object, onSuccess:Function, onFailure:Function) {
     
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
   setUserSignInAPIResponse(response:any) {
      setAccessToken(response.access_token)
      this.accessToken = getAccessToken()
   }

   @action.bound
   setGetUserSignInAPIError(apiError:string) {
      console.log(apiError)
      this.getUserSignInAPIError = apiError
   }

   @action.bound
   setGetUserSignInAPIStatus(apiStatus:number) {
      this.getUserSignInAPIStatus = apiStatus
   }

   @action.bound
   userSignOut() {
      clearUserSession()
      this.init()
   }
}

export default AuthenticationStore
