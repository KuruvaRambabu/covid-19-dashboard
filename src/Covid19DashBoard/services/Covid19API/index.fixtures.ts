

import cumulativeStateAndDistictData from '../../fixtures/covid19StateAndDistrictData.json'
import districtAnalysisData from '../../fixtures/districtAnalysisData.json'
import stateDatawithDates from '../../fixtures/stateDataWithDates.json'
import stateDailyData from '../../fixtures/stateDailyData.json'
import stateDailyGraphsData from '../../fixtures/stateDailyGraphsData.json'
import selectedDistrictCovidData from '../../fixtures/selectedDistrictCovidData.json'
import selectedDistrictGraphData from '../../fixtures/selectedDistrictGraphData.json'
import selectedDistrictDailyData from '../../fixtures/selectedDistrictDailyData.json'
import selectedDistrictDailyGraphData from '../../fixtures/selectedDistrictDailyGraphData.json'

import Covid19Service from "./index"

import { resolveWithTimeout } from "../../../Common/utils/TestUtils"


class Covid19FixtureService implements Covid19Service {

   Covid19DataAPI(date) {
      return resolveWithTimeout(cumulativeStateAndDistictData)
   }

   districtAnalysisData() {
      return resolveWithTimeout(districtAnalysisData)
   }

   stateCumulativeReportData() {
      return resolveWithTimeout(stateDatawithDates)

   }

   stateDailyData(date) {
      return resolveWithTimeout(stateDailyData) 

   }

   stateDailyVerticalGraphsAPI() {
      return resolveWithTimeout(stateDailyGraphsData)
   }

   districtCumulativeDataAPI(date, id) {
      return resolveWithTimeout(selectedDistrictCovidData)

   }

   getDistrictCumulativeGraphDataAPI(id) {
      return resolveWithTimeout(selectedDistrictGraphData)
   }

  
   selectedDistrictDailyDataAPI(date, id) {
      return resolveWithTimeout(selectedDistrictDailyData)

   }

   selectedDistrictDailyVerticalGraphAPI(id) {
      return resolveWithTimeout(selectedDistrictDailyGraphData)

   }
}

export default Covid19FixtureService
