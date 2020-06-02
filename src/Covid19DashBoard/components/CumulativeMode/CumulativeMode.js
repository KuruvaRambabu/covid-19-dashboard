import React from "react"
import { observer, inject } from "mobx-react";

import LoadingWrapperWithFailure from "../../../Common/components/LoadingWrapperWithFailure";
import TotalCases from "../../../Common/components/TotalCases";
import CasesAndItsMap from "../../../Common/components/CasesAndItsMap/CasesAndItsMap";

import CumulativeCasesGraphReport from "../CumulativeCasesGraphReport/CumulativeCasesGraphReport";
import DataInTableFormatByDistrictWise from "../DataInTableFormatByDistrictWise/DataInTableFormatByDistrictWise";
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
import TotalDistrictsCasesGraph from "../TotalDistrictsCasesGraph/TotalDistrictsCasesGraph";

@observer
class CumulativeMode extends React.Component {

    renderCumulativeCovid19DataUI = observer(() => {
        const {
            confirmedCases,
            activeCases, 
            recoveredCases,
            deathCases,
            districtWiseData,
            stateCumulativeReportData,
            barChartData,
            sortCaseValues
        } = this.props

        return (<React.Fragment>
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
                            stateCumulativeReportData={stateCumulativeReportData}
                        />
                    </CumulativeCasesGraphReportMainContainer>
                    <CumulativeCasesGraphReportMainContainer>
                        <GraphName>CUMULATIVE CASES REPORT </GraphName>
                        <TotalDistrictsCasesGraph 
                         stateCumulativeReportData={stateCumulativeReportData}
                          />
                        {/* <CumulativeCasesGraphReport 
                           
                        /> */}
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
        </React.Fragment>
        )
    })

    onRetryClick = () => {
        this.doNetworkCalls()
    }

    render() {
        const {
            getCovid19DataAPIStatus,
            getCovid19DataAPIError,
        } = this.props
        return (
            <LoadingWrapperWithFailure
                apiStatus={getCovid19DataAPIStatus}
                apiError={getCovid19DataAPIError}
                onRetryClick={this.onRetryClick}
                renderSuccessUI={this.renderCumulativeCovid19DataUI}

            />

        )
    }
}

export default CumulativeMode;






{/* <TableContainer> */ }
{/* <TableRow index={1} >
                            <TableHeader onClick={sortCaseValues} id="districtName" >DistrictName</TableHeader>
                            <TableHeader onClick={sortCaseValues} id="totalConfirmed" >Confirmed</TableHeader>
                            <TableHeader onClick={sortCaseValues} id="totalActive">Active</TableHeader>
                            <TableHeader onClick={sortCaseValues} id="totalRecovered">Recovered</TableHeader>
                            <TableHeader onClick={sortCaseValues} id="totalDdeaths" >Deaths</TableHeader>

                        </TableRow> */}
{/* {districtWiseData.map((district, index) => (
                            <DataInTableFormatByDistrictWise index={index} key={district.district_id} district={district} />

                        ))} */}

{/* <TotalDistrictsCasesGraph
                            districtConformedCasesGraphData={districtConformedCasesGraphData}

                        /> */}