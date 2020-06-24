import CumulativeDataReportModel from '../CumulativeDataReportModel/CumulativeDataReportModel'

class DistrictWiseDataAnalysisModel {
   
   // totalActive:number
   // totalRecovered:number
   // totalDeaths:number
   // totalConfirmed:number
   districtName:string
   districtId:number
   districtStats:Array<CumulativeDataReportModel>

   constructor(data:any) {
      this.districtName = data.district_name
      // this.totalRecovered = data.district_statistics.total_active
      // this.totalConfirmed =data.district_statistics.total_active 
      // this.totalDeaths = data.district_statistics.total_active
      // this.totalActive = data.district_statistics.total_active
      
      this.districtId = data.district_id
      this.districtStats = []

      data.district_statistics.forEach((district) => {
         const StateData:CumulativeDataReportModel = new CumulativeDataReportModel(district)
         this.districtStats.push(StateData)
      })
   }
}

export default DistrictWiseDataAnalysisModel
