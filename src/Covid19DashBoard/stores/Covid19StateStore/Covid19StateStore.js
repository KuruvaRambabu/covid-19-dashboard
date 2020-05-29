import { observable, action, computed, toJS } from "mobx";
import { API_INITIAL, API_FETCHING, API_SUCCESS } from "@ib/api-constants";

import cumulativeStateAndDistictData from "../../fixtures/covid19StateAndDistrictData.json"
import stateDataWithDates from "../../fixtures/stateDataWithDates.json"

class Covid19DataStore {
    @observable covid19Data;
    @observable getCovid19DataAPIStatus;
    @observable getCovid19DataAPIError;
    @observable stateData;
    @observable sortByCase;
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

    }

    @action.bound
    getCovid19Data() {
        let promise = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(cumulativeStateAndDistictData), 1000);
        });
        this.setGetUserSignInAPIStatus(API_FETCHING)
        promise.then(response => {
            this.setCovid19DataAPIResponse(response)
            this.setGetUserSignInAPIStatus(API_SUCCESS)

        })
    }

    @action.bound
    districtsDatawithDates() {
        alert("hi ram")
        this.stateData = stateDataWithDates;
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
    setGetUserSignInAPIStatus(apiStatus) {
        this.getCovid19DataAPIStatus = apiStatus
    }




    @action.bound
    sortByCaseList(data, type) {
        if (type === "") {
            return data
        }
     
        else {
            let numArray = data.sort(function (a, b) {
                console.log("data", toJS(a[type]))
                return b[type] - a[type];
            })
            return numArray
        }

    }

    @computed 
        get barChartData(){
           
            const type = "total_confirmed"
            const  data =this.covid19Data.districts
            let numArray = data.sort(function (a, b) {
                return b[type] - a[type];
            })
            return numArray
        }

    @computed
    get totalDistrictCases() {
        let data = this.sortByCaseList(this.covid19Data.districts, this.sortByCase)
        //console.log("dsfsda",this.covid19Data)
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