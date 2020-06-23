import cumulativeStateAndDistictData from '../../fixtures/covid19StateAndDistrictData.json'
import districtAnalysisData from '../../fixtures/districtAnalysisData.json'
import stateDatawithDates from '../../fixtures/stateDataWithDates.json'
import stateDailyData from '../../fixtures/stateDailyData.json'
import stateDailyGraphsData from '../../fixtures/stateDailyGraphsData.json'
import selectedDistrictCovidData from '../../fixtures/selectedDistrictCovidData.json'
import selectedDistrictGraphData from '../../fixtures/selectedDistrictGraphData.json'
import selectedDistrictDailyData from '../../fixtures/selectedDistrictDailyData.json'
import selectedDistrictDailyGraphData from '../../fixtures/selectedDistrictDailyGraphData.json'

class Covid19APIService {
   Covid19DataAPI(date:object) : Promise<any> {
      return new Promise(resolve => {
         setTimeout(() => {
            resolve(cumulativeStateAndDistictData)
         }, 500)
      })
   }

   districtAnalysisData():Promise<any> {
      return new Promise(resolve => {
         setTimeout(() => {
            resolve(districtAnalysisData)
         }, 500)
      })
   }

   stateCumulativeReportData() {
      return new Promise(resolve => {
         setTimeout(() => {
            resolve(stateDatawithDates)
         }, 500)
      })
   }

   stateDailyData(date:object) {
      return new Promise(resolve => {
         setTimeout(() => {
            resolve(stateDailyData)
         }, 500)
      })
   }

   stateDailyVerticalGraphsAPI() {
      return new Promise(resolve => {
         setTimeout(() => {
            resolve(stateDailyGraphsData)
         }, 500)
      })
   }
   districtCumulativeDataAPI(date, id) {
      return new Promise(resolve => {
         setTimeout(() => {
            resolve(selectedDistrictCovidData)
         }, 500)
      })
   }

   getDistrictCumulativeGraphDataAPI(id) {
      return new Promise(resolve => {
         setTimeout(() => {
            resolve(selectedDistrictGraphData)
         }, 500)
      })
   }
   selectedDistrictDailyDataAPI(date,id) {
      return new Promise(resolve => {
         setTimeout(() => {
            resolve(selectedDistrictDailyData)
         }, 500)
      })
   }

   selectedDistrictDailyVerticalGraphAPI(id) {
      return new Promise(resolve => {
         setTimeout(() => {
            resolve(selectedDistrictDailyGraphData)
         }, 500)
      })
   }
}

export default Covid19APIService
