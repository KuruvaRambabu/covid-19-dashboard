class CumulativeMandalModel {
    totalActive
    totalRecovered
    totalConfirmed
    totalDeaths
    mandalName
    
    constructor(data) {
        this.totalActive = data.total_active
        this.totalRecovered = data.total_recovered
        this.totalConfirmed = data.total_confirmed
        this.totalDeaths = data.total_deaths
        this.mandalName = data.mandal_name
        this.mandalId = data.mandal_id
     }
}

export default CumulativeMandalModel;