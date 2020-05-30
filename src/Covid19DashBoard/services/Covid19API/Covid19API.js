import { create } from "apisauce";
import { networkCallWithApisauce } from "../../../Common/utils/APIUtils";
import { apiMethods } from "../../../Common/constants/APIConstants";



class Covid19APIService {
    api;
    districtAnalysis;

    constructor(){
        this.api= create({
            baseURL:""
        })
        this.districtAnalysis= create({
            baseURL:""
        })
    }

    Covid19DataAPI(){
        return networkCallWithApisauce(
            this.api,
            "",
           {},
            apiMethods.get
        )
    }

    districtAnalysisData(){
        return networkCallWithApisauce(
            this.districtAnalysis,
            "",
           {},
            apiMethods.get
        )
    }
}

export default Covid19APIService;