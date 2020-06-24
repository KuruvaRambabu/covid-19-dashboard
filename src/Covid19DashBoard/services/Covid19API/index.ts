import {
    StateCumulativeResponseObject,
    StateCumulativeDataRequestObject,
    StateCumulativeGraphDataResponseObject,
    DistrictWiseCaseAnalysisResponseObject,
    StateDailyGraphDataResponseObject,
    StateDailyDataRequestObject,
    SelectedDistrctCumulativeDataResponseObject,
    SelectedDistrctCumulativeGraphDataResponseObject,
    SelectedDistrictDailyGraphDataResponseObject
} from "../../stores/types"

interface Covid19Service {

    Covid19DataAPI: (
        date: object
    ) => Promise<StateCumulativeResponseObject>

    stateCumulativeReportData: () => Promise<StateCumulativeGraphDataResponseObject>

    districtAnalysisData: () => Promise<DistrictWiseCaseAnalysisResponseObject>

    stateDailyData: (date: any
    ) => Promise<StateCumulativeResponseObject>


    stateDailyVerticalGraphsAPI: () => Promise<StateDailyGraphDataResponseObject>

    districtCumulativeDataAPI(date: object, id: number): Promise<SelectedDistrctCumulativeDataResponseObject>

    getDistrictCumulativeGraphDataAPI(id: number): Promise<SelectedDistrctCumulativeGraphDataResponseObject>

    selectedDistrictDailyDataAPI(date: object, id: number): Promise<SelectedDistrctCumulativeDataResponseObject>

    selectedDistrictDailyVerticalGraphAPI(id: number): Promise<SelectedDistrictDailyGraphDataResponseObject>
}

export default Covid19Service