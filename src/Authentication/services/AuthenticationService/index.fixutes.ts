import signInAccessToken from '../../fixtures/getUserSignInRepsonse.json'
import AuthService from '.'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

class AuthenticationService implements AuthService {
   signInAPI(requestObject) {
      return resolveWithTimeout(signInAccessToken)
   }
}

export default AuthenticationService
