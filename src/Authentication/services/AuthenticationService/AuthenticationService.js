import { create } from 'apisauce'
import { baseUrl } from '../../constants/EnvironmentConstants'
import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { apiMethods } from '../../../Common/constants/APIConstants'
import endpoints from '../endPoints'

class AuthenticationService {
   api
   constructor() { 
      this.api = create({
         baseURL: baseUrl
      })
   }
   singnInAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         endpoints.signIn,
         requestObject,
         apiMethods.post
      )
   }
}

export default AuthenticationService
