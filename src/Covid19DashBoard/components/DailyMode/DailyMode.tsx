import React from 'react'
import { observer } from 'mobx-react'

import TotalCases from '../../../Common/components/TotalCases'
import CasesAndItsMap from '../../../Common/components/CasesAndItsMap/CasesAndItsMap'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'

import DataInTableFormatByDistrictWise from '../DataInTableFormatByDistrictWise/DataInTableFormatByDistrictWise'
import DailyCasesBarChart from '../DailyCasesBarChart/DailyCasesBarChart'
import ConfirmedCasesBarChart from '../ConfirmedCasesBarChart/ConfirmedCasesBarChart'

import {
   ZonalDashboardCasesMapAndGraphContainer,
   CasesAndMapContainer,
   CumulativeReportGraphs,
   CumulativeCasesGraphReportMainContainer,
   GraphName,
   ZonalDashboardTableFormatDataAndChartContainer,
   DistrictWiseTableData,
   ConfirmedCasesBarChartContainer,
   DistrictWIseReportName
} from '../ZonalDashboard/styledComponents'


interface DailyModeTypes {
   tableData: Array<object>
   tableHeaderName: string
   barChartData: Array<object>
   confirmedCases: number
   activeCases: number
   deathCases: number
   recoveredCases: number
   stateDailyVerticalGraphData: Array<object>
   tableDataAccessor: string
   barChartDataKey: string
   networkCallForDailyData: Function
   getStateDailyDataAPIStatus: number
   getStateDailyDataAPIError: object | null
   onRetryClick: () => void
}


@observer
class DailyMode extends React.Component<DailyModeTypes>{
   componentDidMount() {
      this.props.networkCallForDailyData()
   }

   renderStateDailySuccessUI = observer(() => {
      const {
         tableData,
         tableHeaderName,
         barChartData,
         confirmedCases,
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
         getStateDailyDataAPIError,
         onRetryClick
      } = this.props
      return (
         <LoadingWrapperWithFailure
            apiStatus={getStateDailyDataAPIStatus}
            apiError={getStateDailyDataAPIError}
            renderSuccessUI={this.renderStateDailySuccessUI}
            onRetryClick={onRetryClick}
         />
      )
   }
}

export default DailyMode
