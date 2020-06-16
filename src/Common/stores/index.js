import AuthenticationStore from '../../Authentication/stores/AuthenticationStore'
//import AuthenticationService from '../../Authentication/services/AuthenticationService'
import AuthenticationService from '../../Authentication/services/AuthenticationService/index.fixutes'


//import Covid19APIService from "../../Covid19DashBoard/services/Covid19API/Covid19API";
import Covid19DataStore from '../../Covid19DashBoard/stores/Covid19StateStore/'
import Covid19APIService from '../../Covid19DashBoard/services/Covid19API/index.fixtures'

const authenticationService = new AuthenticationService()
const authenticationStore = new AuthenticationStore(authenticationService)

const covid19APIService = new Covid19APIService()
const covid19DataStore = new Covid19DataStore(covid19APIService)

export default {
   authenticationStore,
   covid19DataStore
}
