import { create } from "apisauce";
import { networkCallWithApisauce } from "../../../Common/utils/APIUtils";
import { apiMethods } from "../../../Common/constants/APIConstants";
import { baseURL } from "../../routes/RouteConstants/RouteConstants";



class Covid19APIService {
    api;
    constructor() {
        this.api = create({
            baseURL: baseURL
        })

    }

    Covid19DataAPI() {
        return networkCallWithApisauce(
            this.api,
            endPoints,
            {},
            apiMethods.get
        )
    }

    districtAnalysisData() {
        return networkCallWithApisauce(
            this.api,
            endPoints,
            {},
            apiMethods.get
        )
    }

    stateDatawithDates() {
        return networkCallWithApisauce(
            this.api,
            endPoints,
            {},
            apiMethods.get
        )
    }
}

export default Covid19APIService;