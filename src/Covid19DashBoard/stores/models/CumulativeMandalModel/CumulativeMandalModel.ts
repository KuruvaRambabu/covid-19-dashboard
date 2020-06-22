class CumulativeMandalModel {
   totalActive:number
   totalRecovered:number
   totalConfirmed:number
   totalDeaths:number
   mandalName:string
   mandalId:number
   constructor(data:any) {
      this.totalActive = data.total_active
      this.totalRecovered = data.total_recovered
      this.totalConfirmed = data.total_confirmed
      this.totalDeaths = data.total_deaths
      this.mandalName = data.mandal_name
      this.mandalId = data.mandal_id
   }
}

export default CumulativeMandalModel
