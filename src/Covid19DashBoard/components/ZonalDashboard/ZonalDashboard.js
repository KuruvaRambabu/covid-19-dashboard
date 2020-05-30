import React from "react"
import Header from "../Header"
import {
    ZonalDashboardMainContainer,
    ZonalDashboardCasesMapAndGraphContainer,
    CasesAndMapContainer,
    ZonalDashboardTableFormatDataAndChartContainer,
    DistrictWiseTableData,
    TableContainer,
    TableRow,
    TableHeader,
    CumulativeReportGraphs,
    ConfirmedCasesBarChartContainer,
    DistrictWIseReportName,
    GraphName,
    CumulativeCasesGraphReportMainContainer

} from "./StyledComponents";
import { observer, inject } from "mobx-react";
import TotalCases from "../../../Common/components/TotalCases";
import CasesAndItsMap from "../../../Common/components/CasesAndItsMap/CasesAndItsMap";
import { toJS, observable } from "mobx";
import DistrictWiseData from "../DistrictWiseData/DistrictWiseData";
import ConfirmedCasesBarChart from "../ConfirmedCasesBarChart/ConfirmedCasesBarChart";
import CumulativeCasesGraphReport from "../CumulativeCasesGraphReport/CumulativeCasesGraphReport";
import TotalDistrictsCasesGraph from "../TotalDistrictsCasesGraph/TotalDistrictsCasesGraph";

import DailyCasesBarChart from "../DailyCasesBarChart/DailyCasesBarChart";

@inject("covid19DataStore")
@observer
class ZonalDashboard extends React.Component {
    @observable isCumulative = true;
    @observable isDaily = false;

    sortByDistrict = (e) => {
        console.log(e.target.id)
        this.props.covid19DataStore.sortBySelectedCase(e.target.id)
    }

    onClickCumulativeData = () => {
        if (!this.isCumulative) {
            this.isCumulative = this.isCumulative ? false : true;
            this.isDaily = this.isDaily ? false : true;
        }

    }

    onClickDailyData = () => {
        if (!this.isDaily) {
            this.isCumulative = this.isCumulative ? false : true;
            this.isDaily = this.isDaily ? false : true;
        }

    }

    render() {
        const confirmedCases = this.props.covid19DataStore.confirmedCases
        const activeCases = this.props.covid19DataStore.activeCases
        const recoveredCases = this.props.covid19DataStore.recoveredCases
        const deathCases = this.props.covid19DataStore.deathCases
        const districtWiseData = this.props.covid19DataStore.totalDistrictCases
        const barChartData = this.props.covid19DataStore.barChartData
        const StateDatawithDates = this.props.covid19DataStore.stateDataWithDates
        const dRecovred =0
        const dActive =2
        const dConfirmed = 2
        const dDeaths = 1


        return (
            <ZonalDashboardMainContainer>
                <Header
                    isDaily={this.isDaily}
                    isCumulative={this.isCumulative}
                    onClickCumulativeData={this.onClickCumulativeData}
                    onClickDailyData={this.onClickDailyData}
                />
                {this.isCumulative ?
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
                                        districtsDatawithDate={StateDatawithDates}
                                    />
                                </CumulativeCasesGraphReportMainContainer>
                                <CumulativeCasesGraphReportMainContainer>
                                    <GraphName>CUMULATIVE CASES REPORT </GraphName>
                                    <CumulativeCasesGraphReport
                                        districtsDatawithDate={StateDatawithDates}
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
                                        <TableHeader onClick={this.sortByDistrict} id="district_name" >DistrictName</TableHeader>
                                        <TableHeader onClick={this.sortByDistrict} id="total_confirmed" >Confirmed</TableHeader>
                                        <TableHeader onClick={this.sortByDistrict} id="total_active">Active</TableHeader>
                                        <TableHeader onClick={this.sortByDistrict} id="total_recovered">Recovered</TableHeader>
                                        <TableHeader onClick={this.sortByDistrict} id="total_deaths" >Deaths</TableHeader>

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

                    :
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
                                        districtsDatawithDate={StateDatawithDates}
                                    />

                                </CumulativeCasesGraphReportMainContainer>
                                <CumulativeCasesGraphReportMainContainer>
                                    <GraphName>DAILY RECOVERED CASES </GraphName>
                                    <DailyCasesBarChart
                                        type="total_recovered"
                                        color="#33cc00"
                                        districtsDatawithDate={StateDatawithDates}
                                    />

                                </CumulativeCasesGraphReportMainContainer>

                                <CumulativeCasesGraphReportMainContainer>
                                    <GraphName>DAILY DEATHS</GraphName>
                                    <DailyCasesBarChart
                                        type="total_deaths"
                                        color="orange"
                                        districtsDatawithDate={StateDatawithDates}
                                    />

                                </CumulativeCasesGraphReportMainContainer>

                            </CumulativeReportGraphs>

                        </ZonalDashboardCasesMapAndGraphContainer>

                        <ZonalDashboardTableFormatDataAndChartContainer>
                            <DistrictWiseTableData>
                                <TableContainer>
                                    <TableRow index={1} >
                                        <TableHeader onClick={this.sortByDistrict} id="district_name" >DistrictName</TableHeader>
                                        <TableHeader onClick={this.sortByDistrict} id="total_confirmed" >Confirmed</TableHeader>
                                        <TableHeader onClick={this.sortByDistrict} id="total_active">Active</TableHeader>
                                        <TableHeader onClick={this.sortByDistrict} id="total_recovered">Recovered</TableHeader>
                                        <TableHeader onClick={this.sortByDistrict} id="total_deaths" >Deaths</TableHeader>

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

                }
            </ZonalDashboardMainContainer>
        )
    }
}

export default ZonalDashboard;