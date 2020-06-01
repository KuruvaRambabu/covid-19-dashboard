import React from "react"
import TotalCases from "../../../Common/components/TotalCases";
import CasesAndItsMap from "../../../Common/components/CasesAndItsMap/CasesAndItsMap";
import CumulativeCasesGraphReport from "../CumulativeCasesGraphReport/CumulativeCasesGraphReport";
import DistrictWiseData from "../DistrictWiseData/DistrictWiseData";
import ConfirmedCasesBarChart from "../ConfirmedCasesBarChart/ConfirmedCasesBarChart";
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



@observer
class CumulativeModel extends React.Component {

    render() {
        const {
            confirmedCases,
            activeCases,
            recoveredCases,
            deathCases,
            districtWiseData,
            stateDataWithDates,
            barChartData,
            sortCaseValues
        } = this.props
        return (
            <React.Fragment>
                <ZonalDashboardCasesMapAndGraphContainer>
                    <CasesAndMapContainer>
                        <TotalCases
                            confirmedCases={confirmedCases}
                            activeCases={activeCases}
                            recoveredCases={recoveredCases}
                            deathCases={deathCases}
                        />
                        <CasesAndItsMap />

                    </CasesAndMapContainer>
                    <CumulativeReportGraphs>
                        <CumulativeCasesGraphReportMainContainer>
                            <GraphName>CUMULATIVE CASES REPORT </GraphName>
                            <CumulativeCasesGraphReport
                                districtsDatawithDate={stateDataWithDates}
                            />
                        </CumulativeCasesGraphReportMainContainer>
                        <CumulativeCasesGraphReportMainContainer>
                            <GraphName>CUMULATIVE CASES REPORT </GraphName>
                            <CumulativeCasesGraphReport
                                districtsDatawithDate={stateDataWithDates}
                            />
                        </CumulativeCasesGraphReportMainContainer>
                        {/* <TotalDistrictsCasesGraph
                                    districtConformedCasesGraphData={districtConformedCasesGraphData}

                                /> */}
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
                                <TableHeader onClick={sortCaseValues} id="totalDdeaths" >Deaths</TableHeader>

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

export default CumulativeModel;