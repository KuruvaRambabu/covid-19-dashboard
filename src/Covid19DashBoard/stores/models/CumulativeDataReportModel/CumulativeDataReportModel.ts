class CumulativeDataReportModel {
   totalActive:number
   totalRecovered:number
   totalConfirmed:number
   totalDeaths:number
   stateName:string
   tillDate:string
   constructor(data:any ) {
      this.totalActive = data.total_active
      this.totalRecovered = data.total_recovered
      this.totalConfirmed = data.total_confirmed
      this.totalDeaths = data.total_deaths
      this.stateName = data.state_name
      this.tillDate = data.till_date
   }
}

export default CumulativeDataReportModel
