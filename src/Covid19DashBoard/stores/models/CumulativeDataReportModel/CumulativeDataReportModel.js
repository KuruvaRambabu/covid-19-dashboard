class CumulativeDataReportModel {
    
    totalActive;
    totalRecovered;
    totalConfirmed;
    totalDeaths;
    stateName;
    tillDate;
    constructor(data){
       this.totalActive = data.total_active;
       this.totalRecovered = data.total_recovered;
       this.totalConfirmed = data.total_confirmed;
       this.totalDeaths = data.total_deaths;
       this.stateName = data.state_name;
       this.tillDate = data.till_date
    }

}

export default CumulativeDataReportModel;