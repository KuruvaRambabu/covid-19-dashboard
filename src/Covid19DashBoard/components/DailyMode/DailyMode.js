import React from 'react'
import { observer } from 'mobx-react'

import DailyCasesBarChart from '../DailyCasesBarChart/DailyCasesBarChart'

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
} from '../ZonalDashboard/styledComponents'

import TotalCases from '../../../Common/components/TotalCases'
import CasesAndItsMap from '../../../Common/components/CasesAndItsMap/CasesAndItsMap'
import DataInTableFormatByDistrictWise from '../DataInTableFormatByDistrictWise/DataInTableFormatByDistrictWise'
import ConfirmedCasesBarChart from '../ConfirmedCasesBarChart/ConfirmedCasesBarChart'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'

@observer
class DailyMode extends React.Component {
   componentDidMount() {
      this.props.networkCallForDailyData()
   }

   renderStateDailySuccessUI = observer(() => {
      const {
         tableData,
         stateCumulativeReportData,
         tableHeaderName,
         barChartData,
         confirmedCases,
         activeCases,
         deathCases,
         recoveredCases,
         stateDailyVerticalGraphData,
         tableDataAccessor,
         barChartDataKey
      } = this.props
      return (
         <React.Fragment>
            <ZonalDashboardCasesMapAndGraphContainer>
               <CasesAndMapContainer>
                  <TotalCases
                     confirmedCases={confirmedCases}
                     activeCases={0}
                     recoveredCases={recoveredCases}
                     deathCases={deathCases}
                  />
                  <CasesAndItsMap />
               </CasesAndMapContainer>
               <CumulativeReportGraphs>
                  <CumulativeCasesGraphReportMainContainer>
                     <GraphName>DAILY CONFIRMED CASES </GraphName>
                     <DailyCasesBarChart
                        color=' #cc2900'
                        type='totalConfirmed'
                        stateCumulativeReportData={stateDailyVerticalGraphData}
                     />
                  </CumulativeCasesGraphReportMainContainer>
                  <CumulativeCasesGraphReportMainContainer>
                     <GraphName>DAILY RECOVERED CASES </GraphName>
                     <DailyCasesBarChart
                        type='totalRecovered'
                        color='#33cc00'
                        stateCumulativeReportData={stateDailyVerticalGraphData}
                     />
                  </CumulativeCasesGraphReportMainContainer>

                  <CumulativeCasesGraphReportMainContainer>
                     <GraphName>DAILY DEATHS</GraphName>
                     <DailyCasesBarChart
                        type='totalDeaths'
                        color='orange'
                        stateCumulativeReportData={stateDailyVerticalGraphData}
                     />
                  </CumulativeCasesGraphReportMainContainer>
               </CumulativeReportGraphs>
            </ZonalDashboardCasesMapAndGraphContainer>

            <ZonalDashboardTableFormatDataAndChartContainer>
               <DistrictWiseTableData>
                  <DataInTableFormatByDistrictWise
                     tableData={tableData}
                     tableDataAccessor={tableDataAccessor}
                     tableHeaderName={tableHeaderName}
                  />
               </DistrictWiseTableData>

               <ConfirmedCasesBarChartContainer>
                  <DistrictWIseReportName>
                     District Wise Report
                  </DistrictWIseReportName>
                  <ConfirmedCasesBarChart
                     barChartDataKey={barChartDataKey}
                     districtWiseData={barChartData}
                  />
               </ConfirmedCasesBarChartContainer>
            </ZonalDashboardTableFormatDataAndChartContainer>
         </React.Fragment>
      )
   })

   render() {
      const {
         getStateDailyDataAPIStatus,
         getStateDailyDataAPIError
      } = this.props
      return (
         <LoadingWrapperWithFailure
            apiStatus={getStateDailyDataAPIStatus}
            apiError={getStateDailyDataAPIError}
            renderSuccessUI={this.renderStateDailySuccessUI}
         />
      )
   }
}

export default DailyMode
