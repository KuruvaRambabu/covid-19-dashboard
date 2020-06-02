import cumulativeStateAndDistictData from "../../fixtures/covid19StateAndDistrictData.json"
import districtAnalysisData from "../../fixtures/districtAnalysisData.json"
import stateDatawithDates from "../../fixtures/stateDataWithDates.json"
import StateDailyData from "../../fixtures/StateDailyData"
import StateDailyGraphsData from "../../fixtures/StateDailyGraphsData"
class Covid19APIService {

    Covid19DataAPI() {
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve(cumulativeStateAndDistictData)
            },500)
        })
        
    }

    districtAnalysisData(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                    resolve(districtAnalysisData)
            },500)
        })
    }

    stateCumulativeReportData(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                    resolve(stateDatawithDates)
            },500)
        })
    }

    stateDailyData(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                    resolve(StateDailyData)
            },500)
        })
    }

    stateDailyVerticalGraphsAPI(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                    resolve(StateDailyGraphsData)
            },500)
        }) 
    }

    

    
}

export default Covid19APIService