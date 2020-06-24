import { create, ApisauceInstance } from 'apisauce'
import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { apiMethods } from '../../../Common/constants/APIConstants'
import { baseURL } from '../../routes/RouteConstants/RouteConstants'
import endpoints from '../endpoints'
import Covid19Service from "."

class Covid19APIService implements Covid19Service {
   api:Record <string, any>
   constructor() {
      this.api = create({
         baseURL: baseURL
      })
   }

   Covid19DataAPI(date) {
      return networkCallWithApisauce(
         this.api,
         endpoints.cumulativeStateWiseReport,
         date,
         apiMethods.post
      )
   }

   districtAnalysisData() {
      return networkCallWithApisauce(
         this.api,
         endpoints.cumulativeDailyDistrictReport,
         {},
         apiMethods.get
      )
   }

   stateCumulativeReportData() {
      return networkCallWithApisauce(
         this.api,
         endpoints.cumulativeDailyReport,
         {},
         apiMethods.get
      )
   }
   stateDailyData(date) {
      return networkCallWithApisauce(
         this.api,
         endpoints.stateGivenDateStats,
         date,
         apiMethods.post
      )
   }
   stateDailyVerticalGraphsAPI() {
      return networkCallWithApisauce(
         this.api,
         endpoints.dailyStateStats,
         {},
         apiMethods.get
      )
   }
   districtCumulativeDataAPI(date, id) {
      return networkCallWithApisauce(
         this.api,
         `cumulative_district_wise_report/${id}/v1/`,
         date,
         apiMethods.post
      )
   }
   getDistrictCumulativeGraphDataAPI(id) {
      return networkCallWithApisauce(
         this.api,
         `cumulative_daily_district_report/${id}/v1/`,
         {},
         apiMethods.get
      )
   }
   selectedDistrictDailyDataAPI(date, id) {
      return networkCallWithApisauce(
         this.api,
         `district_stats/${id}/v1/`,
         date,
         apiMethods.post
      )
   }
   selectedDistrictDailyVerticalGraphAPI(id) {
      return networkCallWithApisauce(
         this.api,
         `${id}/daily_district_stats/v1/`,
         {},
         apiMethods.get
      )
   }
}

export default Covid19APIService
