import { observable, action, computed, toJS } from "mobx";
import { API_INITIAL} from "@ib/api-constants";

import stateDataWithDates from "../../fixtures/stateDataWithDates.json"
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";


class Covid19DataStore {
    @observable covid19Data;
    @observable getCovid19DataAPIStatus;
    @observable getCovid19DataAPIError;
    @observable stateData;
    @observable sortByCase;
    @observable districtAnalysisData;
    //@observable stateDataWithDates;
    covid19APIService;

    constructor(covid19APIService) {
        this.covid19APIService = covid19APIService;
        this.init()
    }

    @action.bound
    init() {
        this.covid19Data = [];
        this.getCovid19DataAPIStatus = API_INITIAL;
        this.getCovid19DataAPIError = null;
        this.stateData = stateDataWithDates;
        this.sortByCase = ""
        this.districtAnalysisData = []

    }

    @action.bound
    getCovid19Data() {
        const covidDataPromise = this.covid19APIService.Covid19DataAPI()
        return bindPromiseWithOnSuccess(covidDataPromise)
            .to(this.setGetCovidAPIStatus, response => {
                this.setCovid19DataAPIResponse(response)
            })
            .catch(error => {
                this.setCovid19DataAPIError(error)
            })
    }

    getDistrictWiseCaseAnalysisData(){
        const districtAnalysisDataPromise = this.covid19APIService.districtAnalysisData()
        return bindPromiseWithOnSuccess(districtAnalysisDataPromise)
            .to(this.setGetCovidAPIStatus, response => {
                this.setDistrictAnalysisDataResponse(response)
            })
            .catch(error => {
                this.setCovid19DataAPIError(error)
            })
    }



    @action.bound
    districtsDatawithDates() {  

        this.stateData = stateDataWithDates;
    }

    @action.bound
    setDistrictAnalysisDataResponse(response){
        
        this.districtAnalysisData = response
        console.log(response)
    }

    @action.bound
    setCovid19DataAPIResponse(response) {
        this.covid19Data = response
    }

    @action.bound
    setCovid19DataAPIError() {

    }

    @action.bound
    sortBySelectedCase(caseType) {
        this.sortByCase = caseType

    }

    @action.bound
    setGetCovidAPIStatus(apiStatus) {
        this.getCovid19DataAPIStatus = apiStatus
    }

    @action.bound
    sortByCaseList(data, type) {
        if (type === "") {
            return data
        }

        else {
            let numArray = data.sort(function (a, b) {
                return b[type] - a[type];
            })
            return numArray
        }

    }

    @computed 
    get districtsConfirmedCasesData(){
                return  this.districtAnalysisData.day_wise_report
        
    }

    @computed
    get barChartData() {
        const type = "total_confirmed"
        const data = this.covid19Data.districts
        let numArray = data.sort(function (a, b) {
            return b[type] - a[type];
        })
        return numArray
    }

    @computed
    get totalDistrictCases() {
        let data = this.sortByCaseList(this.covid19Data.districts, this.sortByCase)
        return data
    }

    @computed
    get confirmedCases() {
        return this.covid19Data.total_confirmed
    }



    @computed
    get activeCases() {
        return this.covid19Data.total_active
    }

    @computed
    get recoveredCases() {
        return this.covid19Data.total_recovered
    }

    @computed
    get deathCases() {
        return this.covid19Data.total_deaths
    }


    @computed
    get stateDataWithDates() {
        return this.stateData.day_wise_report
    }

}


export default Covid19DataStore;