import signInAccessToken from '../../fixtures/getUserSignInRepsonse.json'

class AuthenticationService {

   signInAPI(requestObject) {
      return new Promise(resolve => {
            resolve(signInAccessToken)
      })
   }
}

export default AuthenticationService
