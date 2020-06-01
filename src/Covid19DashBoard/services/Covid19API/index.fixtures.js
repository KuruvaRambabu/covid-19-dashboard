import cumulativeStateAndDistictData from "../../fixtures/covid19StateAndDistrictData.json"
import districtAnalysisData from "../../fixtures/districtAnalysisData.json"
import stateDatawithDates from "../../fixtures/stateDataWithDates.json"

class Covid19APIService {

    Covid19DataAPI() {
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve(cumulativeStateAndDistictData)
            },2000)
        })
        
    }

    districtAnalysisData(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                    resolve(districtAnalysisData)
            },2000)
        })
    }

    stateCumulativeReportData(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                    resolve(stateDatawithDates)
            },2000)
        })
    }

    
}

export default Covid19APIService