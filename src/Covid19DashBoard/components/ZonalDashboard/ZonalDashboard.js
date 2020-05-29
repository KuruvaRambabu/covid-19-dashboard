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
import { toJS } from "mobx";
import DistrictWiseData from "../DistrictWiseData/DistrictWiseData";
import ConfirmedCasesBarChart from "../ConfirmedCasesBarChart/ConfirmedCasesBarChart";
import CumulativeCasesGraphReport from "../CumulativeCasesGraphReport/CumulativeCasesGraphReport";
import TotalDistrictsCasesGraph from "../TotalDistrictsCasesGraph/TotalDistrictsCasesGraph";


@inject("covid19DataStore")
@observer
class ZonalDashboard extends React.Component {

    sortByDistrict = (e) => {
        console.log(e.target.id)
       this.props.covid19DataStore.sortBySelectedCase(e.target.id)
    }
    render() {
        const confirmedCases = this.props.covid19DataStore.confirmedCases
        const activeCases = this.props.covid19DataStore.activeCases
        const recoveredCases = this.props.covid19DataStore.recoveredCases
        const deathCases = this.props.covid19DataStore.deathCases
        const districtWiseData = this.props.covid19DataStore.totalDistrictCases
        const  barChartData = this.props.covid19DataStore.barChartData
        const districtsDatawithDate = this.props.covid19DataStore.stateDataWithDates
        // console.log(confirmedCases, deathCases, activeCases, recoveredCases)

        console.log(toJS(districtsDatawithDate))
        return (
            <ZonalDashboardMainContainer>
                <Header />
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
                            <CumulativeCasesGraphReport  districtsDatawithDate ={ districtsDatawithDate} />
                        </CumulativeCasesGraphReportMainContainer>
                        <TotalDistrictsCasesGraph />
                    </CumulativeReportGraphs>

                </ZonalDashboardCasesMapAndGraphContainer>

                <ZonalDashboardTableFormatDataAndChartContainer>
                    <DistrictWiseTableData>
                        <TableContainer>
                            <TableRow>
                                <TableHeader onClick={this.sortByDistrict} id="district_name" >DistrictName</TableHeader>
                                <TableHeader onClick={this.sortByDistrict} id="total_confirmed" >Confirmed</TableHeader>
                                <TableHeader onClick={this.sortByDistrict} id="total_active">Active</TableHeader>
                                <TableHeader onClick={this.sortByDistrict} id="total_recovered">Recovered</TableHeader>
                                <TableHeader onClick={this.sortByDistrict} id="total_deaths" >Deaths</TableHeader>

                            </TableRow>
                            {districtWiseData.map(district => (
                                <DistrictWiseData key={district.district_id} district={district} />
                            ))}

                        </TableContainer>

                    </DistrictWiseTableData>
                    <ConfirmedCasesBarChartContainer>
                        <DistrictWIseReportName>District Wise Report</DistrictWIseReportName>
                        <ConfirmedCasesBarChart districtWiseData={barChartData} />
                    </ConfirmedCasesBarChartContainer>
                </ZonalDashboardTableFormatDataAndChartContainer>
            </ZonalDashboardMainContainer>
        )
    }
}

export default ZonalDashboard;