export interface StateCumulativeDataObject {
    total_active: number
    total_recovered: number
    total_confirmed: number
    total_deaths: number
    district_name: string
    district_id: string
}
 
export interface StateCumulativeResponseObject {
    total_active: number
    total_recovered: number
    total_confirmed: number
    total_deaths: number
    districts: Array<StateCumulativeDataObject>
}

export interface StateCumulativeDataRequestObject {
    date: string
}

export interface StateCumulativeGraphDataObject {
    total_active: number
    total_recovered: number
    total_confirmed: number
    total_deaths: number
    state_name: string
    till_date: string
    state_id: string
}

export interface StateCumulativeGraphDataResponseObject {
    day_wise_report: Array<StateCumulativeGraphDataObject>
}

export interface DistrictWiseCaseAnalysisDataObject {
    total_active: number
    total_recovered: number
    total_confirmed: number
    total_deaths: number
    till_date: string
}
export interface DistrictWiseCaseAnalysisObject {
    district_name: string
    district_id: number
    district_statistics: Array<DistrictWiseCaseAnalysisDataObject>
}

export interface DistrictWiseCaseAnalysisResponseObject {
    day_wise_report: Array<DistrictWiseCaseAnalysisObject>
}

// export interface StateDailyDataResponseObject {
//     day_wise_report: Array<StateCumulativeGraphDataObject>
// }



export interface StateDailyDataRequestObject {
    date: object
}

export interface StateDailyGraphDataObject {
    total_active: number
    total_recovered: number
    total_confirmed: number
    total_deaths: number
    date: string
}

export interface StateDailyGraphDataResponseObject {
    day_wise_report: Array <StateDailyGraphDataObject>
}



export interface SelectedDistrctCumulativeDataObject {
    total_active: number
    total_recovered: number
    total_confirmed: number
    total_deaths: number
    mandal_name: string
    mandal_id: number
}

export interface SelectedDistrctCumulativeDataResponseObject{
    total_recovered: number
    total_confirmed: number
    total_deaths: number
    mandals:Array <SelectedDistrctCumulativeDataObject>
}

export interface SelectedDistrctCumulativeRequestObject{
    date:object,
    id:number
}

export interface SelectedDistrctCumulativeGraphDataObject{
    total_active: number
    total_recovered: number
    total_confirmed: number
    total_deaths: number
    till_date: string
}

export interface SelectedDistrctCumulativeGraphDataResponseObject{
    district_name:string
    district_statistics :Array <SelectedDistrctCumulativeGraphDataObject>
}

export interface SelectedDistrictDailyGraphDataObject{

    total_active: number
    total_recovered: number
    total_confirmed: number
    total_deaths: number
    date: string
}

export interface  SelectedDistrictDailyGraphDataResponseObject{
    total_recovered: number
    total_confirmed: number
    total_deaths: number
    district_name: string
    day_wise_report:Array<SelectedDistrictDailyGraphDataObject>
}