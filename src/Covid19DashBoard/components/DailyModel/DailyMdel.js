import React from "react"

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
import { observer } from "mobx-react";
import TotalCases from "../../../Common/components/TotalCases";
import CasesAndItsMap from "../../../Common/components/CasesAndItsMap/CasesAndItsMap";
import DistrictWiseData from "../DistrictWiseData/DistrictWiseData";
import ConfirmedCasesBarChart from "../ConfirmedCasesBarChart/ConfirmedCasesBarChart";


@observer
class DailyModel extends React.Component {
    render() {
        const {
            dConfirmed,
            dDeaths,
            dActive,
            dRecovred,
            districtWiseData,
            stateDatawithDates,
            barChartData,
            sortCaseValues
        } = this.props
        return (
            <React.Fragment>
                <ZonalDashboardCasesMapAndGraphContainer>
                    <CasesAndMapContainer>
                        <TotalCases
                            confirmedCases={dConfirmed}
                            activeCases={dActive}
                            recoveredCases={dRecovred}
                            deathCases={dDeaths}
                        />
                        <CasesAndItsMap />

                    </CasesAndMapContainer>
                    <CumulativeReportGraphs>
                        <CumulativeCasesGraphReportMainContainer>
                            <GraphName>DAILY CONFIRMED CASES </GraphName>
                            <DailyCasesBarChart
                                color=" #cc2900"
                                type="total_confirmed"
                                stateDatawithDates={stateDatawithDates}
                            />

                        </CumulativeCasesGraphReportMainContainer>
                        <CumulativeCasesGraphReportMainContainer>
                            <GraphName>DAILY RECOVERED CASES </GraphName>
                            <DailyCasesBarChart
                                type="total_recovered"
                                color="#33cc00"
                                stateDatawithDates={stateDatawithDates}
                            />

                        </CumulativeCasesGraphReportMainContainer>

                        <CumulativeCasesGraphReportMainContainer>
                            <GraphName>DAILY DEATHS</GraphName>
                            <DailyCasesBarChart
                                type="total_deaths"
                                color="orange"
                                stateDatawithDates={stateDatawithDates}
                            />

                        </CumulativeCasesGraphReportMainContainer>

                    </CumulativeReportGraphs>

                </ZonalDashboardCasesMapAndGraphContainer>

                <ZonalDashboardTableFormatDataAndChartContainer>
                    <DistrictWiseTableData>
                        <TableContainer>
                            <TableRow index={1} >
                                <TableHeader onClick={sortCaseValues} id="districtName" >DistrictName</TableHeader>
                                <TableHeader onClick={sortCaseValues} id="totalConfirmed" >Confirmed</TableHeader>
                                <TableHeader onClick={sortCaseValues} id="totalActive">Active</TableHeader>
                                <TableHeader onClick={sortCaseValues} id="totalRecovered">Recovered</TableHeader>
                                <TableHeader onClick={sortCaseValues} id="totalDeaths" >Deaths</TableHeader>

                            </TableRow>
                            {districtWiseData.map((district, index) => (
                                <DistrictWiseData index={index} key={district.district_id} district={district} />
                            ))}

                        </TableContainer>

                    </DistrictWiseTableData>
                    <ConfirmedCasesBarChartContainer>
                        <DistrictWIseReportName>District Wise Report</DistrictWIseReportName>
                        <ConfirmedCasesBarChart districtWiseData={barChartData} />
                    </ConfirmedCasesBarChartContainer>
                </ZonalDashboardTableFormatDataAndChartContainer>
            </React.Fragment>

        )
    }
}

export default DailyModel;