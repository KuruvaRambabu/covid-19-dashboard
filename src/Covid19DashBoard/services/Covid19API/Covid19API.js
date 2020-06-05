import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { apiMethods } from '../../../Common/constants/APIConstants'
import { baseURL } from '../../routes/RouteConstants/RouteConstants'
import endpoints from "../endpoints"



class Covid19APIService {
   api
   constructor() {
      this.api = create({
         baseURL: baseURL
      })
   }

   Covid19DataAPI(date) {
      console.log("service", date)
      return networkCallWithApisauce(
         this.api,
         endpoints.cumulativeStateWiseReport,
         date,
         apiMethods.post
         )
   }

   districtAnalysisData() {
      return networkCallWithApisauce(this.api, endpoints.cumulativeDailyDistrictReport, {}, apiMethods.get)
   }

   stateCumulativeReportData() { 
      return networkCallWithApisauce(this.api, endpoints.cumulativeDailyReport, {}, apiMethods.get)
   }
   stateDailyData(date) {
      return networkCallWithApisauce(this.api, endpoints.stateGivenDateStats,date, apiMethods.post)
   }
   stateDailyVerticalGraphsAPI() {
      return networkCallWithApisauce(this.api, endpoints.dailyStateStats, {}, apiMethods.get)
   }
}

export default Covid19APIService
