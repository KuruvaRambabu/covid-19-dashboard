import { observable, action, computed, toJS } from "mobx";
import { API_INITIAL } from "@ib/api-constants";

import stateDataWithDates from "../../fixtures/stateDataWithDates.json"
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import covid19StateAndDistrictDataModel from "../models/covid19StateAndDistrictDataModel/covid19StateAndDistrictDataModel";



class Covid19DataStore {
    @observable covid19Data;
    @observable getCovid19DataAPIStatus;
    @observable getCovid19DataAPIError;
    @observable stateData;
    @observable sortByCase;
    @observable districtAnalysisData;
    @observable sampleCovid19Data;
    @observable totalConfirmedCases;
    @observable totalActiveCases;
    @observable totalDeathCases;
    @observable totalRecoveredCases;
    @observable currentDate;
    //@observable stateDataWithDates;
    covid19APIService;

    constructor(covid19APIService) {
        this.covid19APIService = covid19APIService;
        this.currentDate = new Date()
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
        this.sampleCovid19Data = [];
        this.totalActiveCases = 0;
        this.totalConfirmedCases = 0;
        this.totalDeathCases = 0;
        this.totalRecoveredCases = 0;
        
    }

    @action.bound
    getCovid19Data() {
        const covidDataPromise = this.covid19APIService.Covid19DataAPI(this.currentDate)
        return bindPromiseWithOnSuccess(covidDataPromise)
            .to(this.setGetCovidAPIStatus, response => {
                this.setCovid19DataAPIResponse(response)
            })
            .catch(error => {
                this.setCovid19DataAPIError(error)
            })
    }

    @action.bound
    setCovid19DataAPIResponse(response) {

        this.totalDeathCases = response.total_deaths;
        this.totalRecoveredCases = response.total_confirmed;
        this.totalActiveCases = response.total_active;
        this.totalConfirmedCases = response.total_confirmed;


        const data = response.districts
        for (let i = 0; i < data.length; i++) {
            const StateData = new covid19StateAndDistrictDataModel(data[i])
            this.covid19Data.push(StateData)

        }
    }

    getDistrictWiseCaseAnalysisData() {
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
    setDistrictAnalysisDataResponse(response) {

        console.log("district analysis data", response)

        this.districtAnalysisData = response

    }

    @action.bound
    setCovid19DataAPIError(error) {
        this.getCovid19DataAPIError = error
    }

    @action.bound
    onChangeCurrentDate(date) {
        this.currentDate = date
        this.init()
        this.getCovid19Data()
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
            let sortedData = data.sort(function (a, b) {
                return b[type] - a[type];
            })
            return sortedData
        }
    }

    @computed
    get districtsConfirmedCasesData() {
        return this.districtAnalysisData.day_wise_report
    }

    @computed
    get barChartData() {
        const type = "totalConfirmed"
        const data = this.covid19Data

        let sortedData = data.sort(function (a, b) {
            return b[type] - a[type];
        })
        return sortedData
    }

    @computed
    get totalDistrictCases() {
        let data = this.sortByCaseList(this.covid19Data, this.sortByCase)
        return data
    }

    @computed
    get stateDataWithDates() {
        return this.stateData.day_wise_report
    }

}


export default Covid19DataStore;


 // @computed
    // get confirmedCases() {
    //     return this.covid19Data.total_confirmed
    // }



    // @computed
    // get activeCases() {
    //     return this.covid19Data.total_active
    // }

    // @computed
    // get recoveredCases() {
    //     return this.covid19Data.total_recovered
    // }

    // @computed
    // get deathCases() {
    //     return this.covid19Data.total_deaths
    // }

