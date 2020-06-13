import signInAccessToken from "../../fixtures/getUserSignInRepsonse.json"

class AuthenticationService {
    
    singnInAPI(requestObject) {
        return new Promise(resolve=> {
            setTimeout(()=>{
                resolve(signInAccessToken)
            },3000)
            
        })
    }
}

export default AuthenticationService