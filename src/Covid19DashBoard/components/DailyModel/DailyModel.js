import React from "react"
import { observer } from "mobx-react";

import DailyCasesBarChart from "../DailyCasesBarChart/DailyCasesBarChart";


import {
    ZonalDashboardCasesMapAndGraphContainer,
    CasesAndMapContainer,
    CumulativeReportGraphs,
    CumulativeCasesGraphReportMainContainer,
    GraphName,
    ZonalDashboardTableFormatDataAndChartContainer,
    DistrictWiseTableData,
    TableContainer,
    TableHeader,
    TableRow,
    ConfirmedCasesBarChartContainer,
    DistrictWIseReportName
} from "../ZonalDashboard/StyledComponents";


import TotalCases from "../../../Common/components/TotalCases";
import CasesAndItsMap from "../../../Common/components/CasesAndItsMap/CasesAndItsMap";
import DataInTableFormatByDistrictWise from "../DataInTableFormatByDistrictWise/DataInTableFormatByDistrictWise";
import ConfirmedCasesBarChart from "../ConfirmedCasesBarChart/ConfirmedCasesBarChart";
import LoadingWrapperWithFailure from "../../../Common/components/LoadingWrapperWithFailure";


@observer
class DailyModel extends React.Component {

    componentDidMount(){
        this.props.networkCallForDailyData()
    }


    renderStateDailySuccessUI = observer(() => {
        const {
            districtWiseData,
            stateCumulativeReportData,
            barChartData,
            stateDailyVerticalGraphData
        } = this.props
        //console.log("statedailt", barChartData)
        return (
            <React.Fragment>
                <ZonalDashboardCasesMapAndGraphContainer>
                    <CasesAndMapContainer>
                        <TotalCases
                            confirmedCases={0}
                            activeCases={0}
                            recoveredCases={0}
                            deathCases={0}
                        />
                        <CasesAndItsMap />

                    </CasesAndMapContainer>
                    <CumulativeReportGraphs>
                        <CumulativeCasesGraphReportMainContainer>
                            <GraphName>DAILY CONFIRMED CASES </GraphName>
                            <DailyCasesBarChart
                                color=" #cc2900"
                                type="totalConfirmed"
                                stateCumulativeReportData={stateDailyVerticalGraphData}
                            />

                        </CumulativeCasesGraphReportMainContainer>
                        <CumulativeCasesGraphReportMainContainer>
                            <GraphName>DAILY RECOVERED CASES </GraphName>
                            <DailyCasesBarChart
                                type="totalRecovered"
                                color="#33cc00"
                                stateCumulativeReportData={stateDailyVerticalGraphData}
                            />

                        </CumulativeCasesGraphReportMainContainer>

                        <CumulativeCasesGraphReportMainContainer>
                            <GraphName>DAILY DEATHS</GraphName>
                            <DailyCasesBarChart
                                type="totalDeaths"
                                color="orange"
                                stateCumulativeReportData={stateDailyVerticalGraphData}
                            />

                        </CumulativeCasesGraphReportMainContainer>

                    </CumulativeReportGraphs>

                </ZonalDashboardCasesMapAndGraphContainer>

                <ZonalDashboardTableFormatDataAndChartContainer>

                    <DistrictWiseTableData>
                        <DataInTableFormatByDistrictWise districtWiseData={districtWiseData} />
                    </DistrictWiseTableData>

                    <ConfirmedCasesBarChartContainer>
                        <DistrictWIseReportName>District Wise Report</DistrictWIseReportName>
                        <ConfirmedCasesBarChart districtWiseData={barChartData} />
                    </ConfirmedCasesBarChartContainer>
                </ZonalDashboardTableFormatDataAndChartContainer>
            </React.Fragment >
        )

    })

    render() {
        const {
            getStateDailyDataAPIStatus,
            getStateDailyDataAPIError
        } = this.props
        console.log("in daily model ", getStateDailyDataAPIStatus)
        return (
            <LoadingWrapperWithFailure
                apiStatus={getStateDailyDataAPIStatus}
                apiError={getStateDailyDataAPIError}
                renderSuccessUI={this.renderStateDailySuccessUI}

            />
        )

    }
}

export default DailyModel;




































{/* <TableContainer> */ }
{/* <TableRow index={1} >
                                <TableHeader onClick={sortCaseValues} id="districtName" >DistrictName</TableHeader>
                                <TableHeader onClick={sortCaseValues} id="totalConfirmed" >Confirmed</TableHeader>
                                <TableHeader onClick={sortCaseValues} id="totalActive">Active</TableHeader>
                                <TableHeader onClick={sortCaseValues} id="totalRecovered">Recovered</TableHeader>
                                 <TableHeader onClick={sortCaseValues} id="totalDeaths" >Deaths</TableHeader>

                            </TableRow>
                            {districtWiseData.map((district, index) => (
                                <DataInTableFormatByDistrictWise index={index} key={district.district_id} district={district} />
                            ))} */}