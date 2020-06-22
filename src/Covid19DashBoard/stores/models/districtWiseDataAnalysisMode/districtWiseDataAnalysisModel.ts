import CumulativeDataReportModel from '../CumulativeDataReportModel/CumulativeDataReportModel'

class DistrictWiseDataAnalysisModel {
   
   totalActive:number
   districtName:string
   districtId:number
   districtStats:Array<object>

   constructor(data:any) {
      this.districtName = data.district_name
      this.districtId = data.district_id
      this.districtStats = []
      this.totalActive = data.district_statistics.total_active

      data.district_statistics.forEach((district:object) => {
         const StateData:CumulativeDataReportModel = new CumulativeDataReportModel(district)
         this.districtStats.push(StateData)
      })
   }
}

export default DistrictWiseDataAnalysisModel
