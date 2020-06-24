
import {AuthenticationRequestObject} from "../../stores/types"

interface AuthService {
    signInAPI:(requestObject:AuthenticationRequestObject)=>Promise <any>
}

export default AuthService