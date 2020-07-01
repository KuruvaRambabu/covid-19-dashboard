import { create } from 'apisauce'
import { baseUrl } from '../../constants/EnvironmentConstants'
import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { apiMethods } from '../../../Common/constants/APIConstants'
import endpoints from '../endPoints'
import AuthService from '.'

class AuthenticationService implements AuthService {
   api: Record<string, any>
   constructor() {
      this.api = create({
         baseURL: baseUrl
      })
   }
   signInAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         endpoints.signIn,
         requestObject,
         apiMethods.post
      )
   }
}

export default AuthenticationService
