class Covid19StateAndDistrictDataModel {
   totalActive
   totalRecovered
   totalConfirmed
   totalDeaths
   districtName
   districtId

   constructor(data) {
      this.totalActive = data.total_active
      this.totalRecovered = data.total_recovered
      this.totalConfirmed = data.total_confirmed
      this.totalDeaths = data.total_deaths
      this.districtName = data.district_name
      this.districtId = data.district_id
   }
}

export default Covid19StateAndDistrictDataModel
