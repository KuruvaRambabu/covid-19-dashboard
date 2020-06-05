import cumulativeStateAndDistictData from '../../fixtures/covid19StateAndDistrictData.json'
import districtAnalysisData from '../../fixtures/districtAnalysisData.json'
import stateDatawithDates from '../../fixtures/stateDataWithDates.json'
import stateDailyData from '../../fixtures/stateDailyData'
import stateDailyGraphsData from '../../fixtures/stateDailyGraphsData'
class Covid19APIService {
   Covid19DataAPI(date) {
      console.log("hello iam fixtures", date)
      return new Promise(resolve => {
         setTimeout(() => {
            resolve(cumulativeStateAndDistictData)
         }, 500)
      }) 
   }

   districtAnalysisData() {
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

   stateDailyData() {
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
}

export default Covid19APIService
