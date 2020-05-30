import React from "react"

import districtsDataWithDates from "../../fixtures/districtAnalysisData.json"
import { DistrictWiseCaseAnalysisMainContainer } from "./StyledComponents"
import IndividualDistrictCasesGraph from "../../../Common/components/IndividualDistrictCasesGraphs/IndividualDistrictCasesGraph"
import dailyStateData from "../../fixtures/districtAnalysisData.json"
import { observer } from "mobx-react"

@observer
class DistrictWiseCaseAnalysis extends React.Component {

    render() {
        const districtsdata = dailyStateData.day_wise_report
 
        return (
            <DistrictWiseCaseAnalysisMainContainer>
                {districtsdata.map(district => (
                    <IndividualDistrictCasesGraph district={district} />
                ))}


            </DistrictWiseCaseAnalysisMainContainer>
        )
    }
}

export default DistrictWiseCaseAnalysis;


