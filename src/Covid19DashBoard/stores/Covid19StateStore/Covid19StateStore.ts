import { observable, action, computed} from 'mobx'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { format } from 'date-fns'

import Covid19Service from "../../services/Covid19API"

import Covid19StateAndDistrictDataModel from '../models/covid19StateAndDistrictDataModel/covid19StateAndDistrictDataModel'
import CumulativeDataReportModel from '../models/CumulativeDataReportModel/CumulativeDataReportModel'
import DistrictWiseDataAnalysisModel from '../models/districtWiseDataAnalysisMode/districtWiseDataAnalysisModel'
import StateDailyVerticalGraphModel from '../models/StateDailyVerticalGraphModel/StateDailyVerticalGraphModel'
import CumulativeMandalModel from '../models/CumulativeMandalModel/CumulativeMandalModel'
import DistrictCumulativeGraphDataModel from '../models/DistrictCumulativeGraphDataModel/DistrictCumulativeGraphModel'



class Covid19DataStore {

   @observable covid19Data!:( Array<Covid19StateAndDistrictDataModel | CumulativeMandalModel>)
   @observable getCovid19DataAPIStatus!: APIStatus
   @observable getCovid19DataAPIError!: Error | null
   @observable getDistrictWiseCaseAnalysisDataAPIStatus!: APIStatus
   @observable getDistrictWiseCaseAnalysisDataAPIError!: Error | null
   @observable sortByCase!: string
   @observable districtAnalysisData!: any
   @observable totalConfirmedCases!: number
   @observable totalActiveCases!: number
   @observable totalDeathCases!: number
   @observable totalRecoveredCases!: number
   @observable currentDate: Date
   @observable stateCumulativeReportData!:Array<CumulativeDataReportModel | DistrictCumulativeGraphDataModel>
   @observable getStateCumulativeReportDataAPIStatus!: APIStatus
   @observable getStateCumulativeReportDataAPIError!: Error | null
   @observable getStateDailyDataAPIStatus!: number
   @observable getStateDailyDataAPIError!: Error | null
   @observable stateDailyVerticalGraphData!: Array<StateDailyVerticalGraphModel>
   @observable getStateDailyVerticalGraphDataAPIStauts!: APIStatus
   @observable getStateDailyVerticalGraphDataAPIError!: Error | null
   @observable selectedDistrictDailyData!: Array <CumulativeMandalModel>
   @observable selectedDistrictDailyVerticalGraphData!: Array <StateDailyVerticalGraphModel>
   @observable name: string
   covid19APIService: Covid19Service

   constructor(covid19APIService:Covid19Service) {
      this.covid19APIService = covid19APIService
      this.currentDate = new Date()
      this.name = "state"
      this.init()
   }

   @action.bound
   init() {
      this.covid19Data = []
      this.getCovid19DataAPIStatus = API_INITIAL
      this.getCovid19DataAPIError = null
      this.sortByCase = ''
      this.totalActiveCases = 0
      this.totalConfirmedCases = 0
      this.totalDeathCases = 0
      this.totalRecoveredCases = 0
      this.getDistrictWiseCaseAnalysisDataAPIStatus = API_INITIAL
      this.getDistrictWiseCaseAnalysisDataAPIError = null
      this.districtAnalysisData = []
      this.stateCumulativeReportData = []
      this.getStateDailyDataAPIError = null
      this.getStateDailyDataAPIStatus = API_INITIAL
      this.stateDailyVerticalGraphData = []
      this.getStateCumulativeReportDataAPIStatus = API_INITIAL
      this.selectedDistrictDailyData = []
      this.selectedDistrictDailyVerticalGraphData = []
   }


   @computed
   get barChartData() {
      const type = 'totalConfirmed'
      const data = this.covid19Data
      let sortedData = data.slice().sort(function (a, b) {
         return b[type] - a[type]
      })
      return sortedData
   }

   @computed
   get selectedDistrictBarChartData() {
      const type = 'totalConfirmed'
      const data = this.selectedDistrictDailyData
      let sortedData = data.slice().sort(function (a, b) {
         return b[type] - a[type]
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

   @action.bound
   onChangeName(name :string) {
      this.name = name
   }

   @action.bound
   sortByCaseList(data:Array<object>, type:string) {
      if (type === '') {
         return data
      } else {
         let sortedData = data.slice().sort(function (a, b) {
            return b[type] - a[type]
         })
         return sortedData
      }
   }




   @action.bound
   getCovid19Data():object {
      const date = format(this.currentDate, 'yyyy-MM-dd')

      const covidDataPromise = this.covid19APIService.Covid19DataAPI({
         till_date: date
      })
      return bindPromiseWithOnSuccess(covidDataPromise)
         .to(this.setGetCovidAPIStatus, response => {
            this.setCovid19DataAPIResponse(response)
         })
         .catch(error => {
            this.setCovid19DataAPIError(error)
         })
   }

   @action.bound
   setCovid19DataAPIResponse(response:any) {
      this.totalDeathCases = response.total_deaths
      this.totalRecoveredCases = response.total_recovered
      this.totalActiveCases = response.total_active
      this.totalConfirmedCases = response.total_confirmed
      const data = response.districts
      data.forEach((district:object) => {
         const StateData = new Covid19StateAndDistrictDataModel(district)
         this.covid19Data.push(StateData)
      })
   }

   @action.bound
   getDistrictWiseCaseAnalysisData():object {
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
   setDistrictAnalysisDataResponse(response:any) {
      const dayWiseDistrictReport:Array<object> = response.day_wise_report

      dayWiseDistrictReport.forEach((district:object) => {
         const districtData:DistrictWiseDataAnalysisModel = new DistrictWiseDataAnalysisModel(district)
         this.districtAnalysisData.push(districtData)
      })
   }

   @action.bound
   setGetDistrictWiseCaseAnalysisDataAPIStatus(apiStatus:number) {
      this.getDistrictWiseCaseAnalysisDataAPIStatus = apiStatus
   }

   @action.bound
   setGetDistrictWiseCaseAnalysisDataAPIError(error: Error | null) {
      this.getDistrictWiseCaseAnalysisDataAPIError = error
   }

   @action.bound
   getStateCumulativeReportData():object {
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
      cumulativeReport.forEach((district:object) => {
         const stateData:CumulativeDataReportModel = new CumulativeDataReportModel(district)
         this.stateCumulativeReportData.push(stateData)
      })
   }

   @action.bound
   setGetStateCumulativeReportDataAPIStatus(apiStatus:number) {
      this.getStateCumulativeReportDataAPIStatus = apiStatus
   }

   @action.bound
   setGetStateCumulativeReportDataAPIError(error:Error | null) {
      this.getStateCumulativeReportDataAPIError = error
   }

   @action.bound
   setCovid19DataAPIError(error:Error | null) {
      this.getCovid19DataAPIError = error
   }

   @action.bound
   onChangeCurrentDate(date:Date) {
      this.currentDate = date
   }

   @action.bound
   sortBySelectedCase(caseType:string) {
      this.sortByCase = caseType
   }

   @action.bound
   setGetCovidAPIStatus(apiStatus:number) {
      this.getCovid19DataAPIStatus = apiStatus
   }

   @action.bound
   getStateDailyData() :object {
      const date = format(this.currentDate, 'yyyy-MM-dd')
      const stateDailyDataPromise = this.covid19APIService.stateDailyData({
         date: date
      })
      return bindPromiseWithOnSuccess(stateDailyDataPromise)
         .to(this.setGetStateDailyDataAPIStatus, response => {
            this.setGetStateDailyDataAPIResponse(response)
         })
         .catch(error => {
            this.setGetStateDailyDataAPIError(error)
         })
   }

   @action.bound
   setGetStateDailyDataAPIStatus(apiStatus : number) {
      this.getStateDailyDataAPIStatus = apiStatus
   }

   @action.bound
   setGetStateDailyDataAPIResponse(response:any) {
      this.totalDeathCases = response.total_deaths
      this.totalRecoveredCases = response.total_confirmed
      this.totalActiveCases = response.total_active
      this.totalConfirmedCases = response.total_confirmed
      const data = response.districts
      this.covid19Data = []
      data.forEach((district:object) => {
         const StateData:Covid19StateAndDistrictDataModel = new Covid19StateAndDistrictDataModel(district)
         this.covid19Data.push(StateData)
      })
   }

   @action.bound
   getStateDailyVerticalGraphData():object {
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
   setGetStateDailyVerticalGraphDataAPIStatus(apiStatus:number) {
      this.getStateDailyVerticalGraphDataAPIStauts = apiStatus
   }

   @action.bound
   setGetStateDailyVerticalGraphDataAPIError(error:Error | null) {
      this.getStateDailyVerticalGraphDataAPIError = error
   }

   @action.bound
   setGetStateDailyVerticalGraphDataAPIResponse(response:any) {
      const data = response.day_wise_report
      data.forEach((district:object) => {
         const StateData = new StateDailyVerticalGraphModel(district)
         this.stateDailyVerticalGraphData.push(StateData)
      })
   }

   @action.bound
   setGetStateDailyDataAPIError(error:Error | null) {
      this.getStateDailyDataAPIError = error
   }

  

   @action.bound
   getDistrictCumulativeData(id) {
      const date = format(this.currentDate, 'yyyy-MM-dd')
      const districtCumulativeDataPromise = this.covid19APIService.districtCumulativeDataAPI(
         { till_date: date },
         id
      )
      return bindPromiseWithOnSuccess(districtCumulativeDataPromise)
         .to(this.setGetCovidAPIStatus, response => {
            this.districtCumulativeDataAPIResponse(response)
         })
         .catch(error => {
            this.setCovid19DataAPIError(error)
         })
   }

   @action.bound
   districtCumulativeDataAPIResponse(response : any) {
      this.totalDeathCases = response.total_deaths
      this.totalRecoveredCases = response.total_recovered
      this.totalActiveCases = response.total_active
      this.totalConfirmedCases = response.total_confirmed
      const data = response.mandals

      data.forEach((mandal:object )=> {
         const mandalName:CumulativeMandalModel = new CumulativeMandalModel(mandal)
         this.covid19Data.push(mandalName)
      })
   }

   @action.bound
   getDistrictCumulativeGraphData(id:number):object {
      const districtCumulativeGraphPromise = this.covid19APIService.getDistrictCumulativeGraphDataAPI(
         id
      )
      return bindPromiseWithOnSuccess(districtCumulativeGraphPromise)
         .to(this.setGetStateCumulativeReportDataAPIStatus, response => {
            this.setGetDistrictCumulativeGraphDataAPIResponse(response)
         })
         .catch(error => {
            this.setGetStateCumulativeReportDataAPIError(error)
         })
   }

   @action.bound
   setGetDistrictCumulativeGraphDataAPIResponse(response:any) {
      this.name = response.district_name
      const cumulativeReport = response.district_statistics
      cumulativeReport.forEach((district:object) => {
         const stateData:DistrictCumulativeGraphDataModel = new DistrictCumulativeGraphDataModel(district)
         this.stateCumulativeReportData.push(stateData)
      })
   }

   @action.bound
   getSelectedDistrictDailyData(id:number):object {
      const date = format(this.currentDate, 'yyyy-MM-dd')
      const DistrictDailyDataPromise = this.covid19APIService.selectedDistrictDailyDataAPI(
         { date: date },
         id
      )
      return bindPromiseWithOnSuccess(DistrictDailyDataPromise)
         .to(this.setGetStateDailyDataAPIStatus, response => {
            this.setGetSelectedDistrictDailyDataAPIResponse(response)
         })
         .catch(error => {
            this.setGetStateDailyDataAPIError(error)
         })
   }
   @action.bound
   setGetSelectedDistrictDailyDataAPIResponse(response:any) {
      this.totalDeathCases = response.total_deaths
      this.totalRecoveredCases = response.total_recovered
      this.totalActiveCases = response.total_active
      this.totalConfirmedCases = response.total_confirmed
      const data = response.mandals

      data.forEach((mandal :object) => {
         const mandalName:CumulativeMandalModel = new CumulativeMandalModel(mandal)
         this.selectedDistrictDailyData.push(mandalName)
      })
   }

   @action.bound
   getSelectedDistictDailyVerticalGraphsData(id:number) {
      const districtDailyGraphPromise = this.covid19APIService.selectedDistrictDailyVerticalGraphAPI(
         id
      )
      return bindPromiseWithOnSuccess(districtDailyGraphPromise)
         .to(this.setGetStateDailyVerticalGraphDataAPIStatus, response => {
            this.setGetSelectedDistrictDailyVerticalGraphData(response)
         })
         .catch(error => {
            this.setGetStateDailyVerticalGraphDataAPIError(error)
         })
   }
   @action.bound
   setGetSelectedDistrictDailyVerticalGraphData(response :any) {
      const data = response.day_wise_report
      data.forEach((district:object) => {
         const stateData:StateDailyVerticalGraphModel = new StateDailyVerticalGraphModel(district)
         this.selectedDistrictDailyVerticalGraphData.push(stateData)
      })
   }
 
   @action.bound
   clearUserSession() {
      this.init()
   }


}

export default Covid19DataStore
