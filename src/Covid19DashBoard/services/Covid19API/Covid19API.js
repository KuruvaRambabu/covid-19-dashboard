import { create } from "apisauce";
import { networkCallWithApisauce } from "../../../Common/utils/APIUtils";
import { apiMethods } from "../../../Common/constants/APIConstants";

class Covid19API {
    api;
    constructor(){
        this.api= create({
            baseURL:""
        })
    }

    Covid19DataAPI(){
        return networkCallWithApisauce(
            this.api,
            "",
            request,
            apiMethods.get
        )
    }
}

export default Covid19API;