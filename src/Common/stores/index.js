import AuthenticationStore from "../../Authentication/stores/AuthenticationStore";
import AuthenticationService from "../../Authentication/services/AuthenticationService";
import Covid19DataStore from "../../Covid19DashBoard/stores/Covid19StateStore/";

const authenticationService = new AuthenticationService()
const authenticationStore = new AuthenticationStore(authenticationService)

const  covid19DataStore = new Covid19DataStore()


export default {
    authenticationStore,
    covid19DataStore,
};