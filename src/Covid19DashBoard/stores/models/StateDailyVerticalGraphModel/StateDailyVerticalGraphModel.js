class StateDailyVerticalGraphModel {
   totalActive
   totalRecovered
   totalConfirmed
   totalDeaths

   date
   constructor(data) {
      this.totalActive = data.total_active
      this.totalRecovered = data.total_recovered
      this.totalConfirmed = data.total_confirmed
      this.totalDeaths = data.total_deaths
      this.date = data.date
   }
}

export default StateDailyVerticalGraphModel
