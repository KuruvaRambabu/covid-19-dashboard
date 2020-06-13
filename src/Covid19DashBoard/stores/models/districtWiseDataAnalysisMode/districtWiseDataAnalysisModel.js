import { observable } from 'mobx'
import CumulativeDataReportModel from '../CumulativeDataReportModel/CumulativeDataReportModel'

CumulativeDataReportModel
class DistrictWiseDataAnalysisModel {
   totalActive
   totalRecovered
   totalConfirmed
   totalDeaths
   districtName
   districtId 
   districtStats

   constructor(data) {
      this.districtName = data.district_name
      this.districtId = data.district_id
      this.districtStats = []
      this.totalActive = data.district_statistics.total_active

      data.district_statistics.forEach(district => {
         const StateData = new CumulativeDataReportModel(district)
         this.districtStats.push(StateData)
      })

      // this.totalActive = data.total_active;
      // this.totalRecovered = data.total_recovered;
      // this.totalConfirmed = data.total_confirmed;
      // this.totalDeaths = data.total_deaths;
      // this.districtName = data.district_name;
      // this.districtId = data.district_id;
   }
}

export default DistrictWiseDataAnalysisModel
