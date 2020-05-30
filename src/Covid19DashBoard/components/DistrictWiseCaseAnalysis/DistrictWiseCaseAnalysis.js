import React from "react"


import { DistrictWiseCaseAnalysisMainContainer } from "./StyledComponents"
import IndividualDistrictCasesGraph from "../../../Common/components/IndividualDistrictCasesGraphs/IndividualDistrictCasesGraph"

import { observer, inject } from "mobx-react"
import LoadingWrapperWithFailure from "../../../Common/components/LoadingWrapperWithFailure"

@inject("covid19DataStore")
@observer
class DistrictWiseCaseAnalysis extends React.Component {

    render() {
        const districtsdata = this.props.covid19DataStore.districtsConfirmedCasesData
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


{/* <LoadingWrapperWithFailure
                    apiStatus={getCovid19DataAPIStatus}
                    apiError={getCovid19DataAPIError}
                    onRetryClick={this.onRetryClick}
                    renderSuccessUI={this.renderDistrictAnalysisDataUI}
                /> */}
   // componentDidMount() {
    //     this.doNetworkCall()
    // }

    // renderDistrictAnalysisDataUI = observer(() => {
    //     alert("hi")
    //     const districtsdata = this.props.covid19DataStore.districtAnalysisData.day_wise_report
    //     return districtsdata.map(district => (
    //         <IndividualDistrictCasesGraph district={district} />
    //     ))
    // })

    // doNetworkCall = () => {
    //     this.props.covid19DataStore.getDistrictWiseCaseAnalysisData()
    // }

    // onRetryClick = () => {
    //     this.doNetworkCall()
    // }