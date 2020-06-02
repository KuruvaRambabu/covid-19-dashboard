import { observable, action, computed, toJS } from "mobx";
import { API_INITIAL } from "@ib/api-constants";

import stateDataWithDates from "../../fixtures/stateDataWithDates.json"
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import Covid19StateAndDistrictDataModel from "../models/covid19StateAndDistrictDataModel/covid19StateAndDistrictDataModel";
import CumulativeDataReportModel from "../models/CumulativeDataReportModel/CumulativeDataReportModel"
import DistrictWiseDataAnalysisModel from "../models/districtWiseDataAnalysisMode/districtWiseDataAnalysisModel";
import { act } from "react-dom/test-utils";
import StateDailyVerticalGraphModel from "../models/StateDailyVerticalGraphModel/StateDailyVerticalGraphModel";

class Covid19DataStore {
    @observable covid19Data;
    @observable getCovid19DataAPIStatus;
    @observable getCovid19DataAPIError;
    @observable getDistrictWiseCaseAnalysisDataAPIStatus;
    @observable getDistrictWiseCaseAnalysisDataAPIError;
    @observable sortByCase;
    @observable districtAnalysisData;
    @observable totalConfirmedCases;
    @observable totalActiveCases;
    @observable totalDeathCases;
    @observable totalRecoveredCases;
    @observable currentDate;
    @observable stateCumulativeReportData;
    @observable getStateCumulativeReportDataAPIStatus;
    @observable getStateCumulativeReportDataAPIError;
    @observable stateDailyData;
    @observable getStateDailyDataAPIStatus;
    @observable getStateDailyDataAPIError;
    @observable stateDailyVerticalGraphData;
    @observable getStateDailyVerticalGraphDataAPIStauts;
    @observable getStateDailyVerticalGraphDataAPIError;
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
        this.totalActiveCases = 0;
        this.totalConfirmedCases = 0;
        this.totalDeathCases = 0;
        this.totalRecoveredCases = 0;
        this.getDistrictWiseCaseAnalysisDataAPIStatus = API_INITIAL;
        this.getDistrictWiseCaseAnalysisDataAPIError = null;
        this.districtAnalysisData = [];
        this.stateCumulativeReportData = [];
        this.stateDailyData = [];
        this.getStateDailyDataAPIError = null
        this.getStateDailyDataAPIStatus = API_INITIAL;
        this.stateDailyVerticalGraphData = [];
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
        data.forEach(district => {
            const StateData = new Covid19StateAndDistrictDataModel(district)
            this.covid19Data.push(StateData)
        })
    }

    @action.bound
    getDistrictWiseCaseAnalysisData() {
        const districtAnalysisDataPromise = this.covid19APIService.districtAnalysisData()
        return bindPromiseWithOnSuccess(districtAnalysisDataPromise)
            .to(this.setGetDistrictWiseCaseAnalysisDataAPIStatus, response => {
                this.setDistrictAnalysisDataResponse(response)
            })
            .catch(error => {
                this.setGetDistrictWiseCaseAnalysisDataAPIError(error)
            })
    }

    @action.bound
    setDistrictAnalysisDataResponse(response) {
        const dayWiseDistrictReport = response.day_wise_report;
        dayWiseDistrictReport.forEach(district => {
            const districtData = new DistrictWiseDataAnalysisModel(district)
            this.districtAnalysisData.push(districtData)
        })
    }

    @action.bound
    setGetDistrictWiseCaseAnalysisDataAPIStatus(apiStatus) {
        this.getDistrictWiseCaseAnalysisDataAPIStatus = apiStatus
    }

    @action.bound
    setGetDistrictWiseCaseAnalysisDataAPIError(error) {
        this.getDistrictWiseCaseAnalysisDataAPIError = error
    }

    @action.bound
    getStateCumulativeReportData() {
        const stateCumulativeReportDataPromise = this.covid19APIService.stateCumulativeReportData()
        return bindPromiseWithOnSuccess(stateCumulativeReportDataPromise)
            .to(this.setGetStateCumulativeReportDataAPIStatus, response => {
                this.setGetStateCumulativeReportDataAPIResponse(response)
            })
            .catch(error => {
                this.setGetStateCumulativeReportDataAPIError(error)
            })
    }

    @action.bound
    setGetStateCumulativeReportDataAPIResponse(response) {
        const cumulativeReport = response.day_wise_report
        cumulativeReport.forEach(district => {
            const StateData = new CumulativeDataReportModel(district)
            this.stateCumulativeReportData.push(StateData)
        })
    }

    @action.bound
    setGetStateCumulativeReportDataAPIStatus(apiStatus) {
        this.getStateCumulativeReportDataAPIStatus = apiStatus
    }

    @action.bound
    setGetStateCumulativeReportDataAPIError(error) {
        this.getStateCumulativeReportDataAPIError = error
    }

    @action.bound
    setCovid19DataAPIError(error) {
        this.getCovid19DataAPIError = error
    }

    @action.bound
    onChangeCurrentDate(date) {
        this.currentDate = date
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
    getStateDailyData() {
        const stateDailyDataPromise = this.covid19APIService.stateDailyData()
        return bindPromiseWithOnSuccess(stateDailyDataPromise)
            .to(this.setGetStateDailyDataAPIStatus, response => {
                this.setGetStateDailyDataAPIResponse(response)
            })
            .catch(error => {
                this.setGetStateDailyDataAPIError(error)
            })
    }

    @action.bound
    setGetStateDailyDataAPIStatus(apiStatus) {
        this.getStateDailyDataAPIStatus = apiStatus
    }

    @action.bound
    setGetStateDailyDataAPIResponse(response) {
        this.totalDeathCases = response.total_deaths;
        this.totalRecoveredCases = response.total_confirmed;
        this.totalActiveCases = response.total_active;
        this.totalConfirmedCases = response.total_confirmed;
        const data = response.districts
        this.covid19Data = []
        data.forEach(district => {
            const StateData = new Covid19StateAndDistrictDataModel(district)
            this.covid19Data.push(StateData)
        })
    }

    @action.bound
    getStateDailyVerticalGraphData() {
        const stateDailyVerticalGraphDataPromise = this.covid19APIService.stateDailyVerticalGraphsAPI()
        return bindPromiseWithOnSuccess(stateDailyVerticalGraphDataPromise)
            .to(this.setGetStateDailyVerticalGraphDataAPIStatus, response => {
                this.setGetStateDailyVerticalGraphDataAPIResponse(response)
            })
            .catch(error => {
                this.setGetStateDailyVerticalGraphDataAPIError(error)
            })
    }

    @action.bound
    setGetStateDailyVerticalGraphDataAPIStatus(apiStatus) {

    }

    @action.bound
    setGetStateDailyVerticalGraphDataAPIError(error) {

    }

    @action.bound
    setGetStateDailyVerticalGraphDataAPIResponse(response) {
        const data = response.daily_report;
        data.forEach(district => {
            const StateData = new StateDailyVerticalGraphModel(district)
            this.stateDailyVerticalGraphData.push(StateData)
        })
    }

    @action.bound
    setGetStateDailyDataAPIError(error) {
        this.getStateDailyDataAPIError = error
    }

    @action.bound
    clearUserSession() {
        this.init()
    }

    @action.bound
    sortByCaseList(data, type) {
        if (type === "") {
            return data
        }
        else {
            let sortedData = data.slice().sort(function (a, b) {
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
        let sortedData = data.slice().sort(function (a, b) {
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
    get stateCumulativeReport() {
        return this.stateCumulativeReportData
    }
}

export default Covid19DataStore;

