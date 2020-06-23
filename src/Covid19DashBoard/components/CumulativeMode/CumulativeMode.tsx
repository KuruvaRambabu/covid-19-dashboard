import React from 'react'
import { getLoadingStatus } from '@ib/api-utils'
import { observer } from 'mobx-react'

import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
import distrtictButtons from '../../fixtures/districtButtons.json'
import DistrictButton from '../../../Common/components/DistrcitsButton/DistrictButton'
import TotalCases from '../../../Common/components/TotalCases'

import CumulativeCasesGraphReport from '../CumulativeCasesGraphReport/CumulativeCasesGraphReport'
import DataInTableFormatByDistrictWise from '../DataInTableFormatByDistrictWise/DataInTableFormatByDistrictWise'
import TotalDistrictsCasesGraph from '../TotalDistrictsCasesGraph/TotalDistrictsCasesGraph'
import ConfirmedCasesBarChart from '../ConfirmedCasesBarChart/ConfirmedCasesBarChart'

import {
   ZonalDashboardCasesMapAndGraphContainer,
   CasesAndMapContainer,
   CumulativeReportGraphs,
   CumulativeCasesGraphReportMainContainer,
   GraphName,
   ZonalDashboardTableFormatDataAndChartContainer,
   DistrictWiseTableData,
   DistrictButtonsContainer,
   ConfirmedCasesBarChartContainer,
   DistrictWIseReportName
} from '../ZonalDashboard/styledComponents'

interface CumulativeModeTypes {
   confirmedCases: number
   activeCases: number
   recoveredCases: number
   tableData: Array<object>
   deathCases: number
   stateCumulativeReportData: Array<object>
   barChartData: Array<object>
   onRetryClick: () => void
   onClickGotoDistrictPage: Function
   tableHeaderName: string
   tableDataAccessor: string
   barChartDataKey: string
   getCovid19DataAPIStatus: number
   getStateCumulativeReportDataAPIStatus: number
   getCovid19DataAPIError: object | null
}




@observer
class CumulativeMode extends React.Component<CumulativeModeTypes> {
   renderCumulativeCovid19DataUI = observer(() => {
      const {
         confirmedCases,
         activeCases,
         recoveredCases,
         deathCases,
         tableData,
         stateCumulativeReportData,
         barChartData,
         
         onClickGotoDistrictPage,
         tableHeaderName,
         tableDataAccessor,
         barChartDataKey
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
                  <DistrictButtonsContainer>
                     {distrtictButtons.districts.map(district => {
                        return (
                           <DistrictButton
                              onClickGotoDistrictPage={onClickGotoDistrictPage}
                              district={district}
                              key={district.districtId}
                           />
                        )
                     })}
                  </DistrictButtonsContainer>

                  {/* <CasesAndItsMap /> */}
               </CasesAndMapContainer>
               <CumulativeReportGraphs>
                  <CumulativeCasesGraphReportMainContainer>
                     <GraphName>CUMULATIVE CASES REPORT </GraphName>
                     <CumulativeCasesGraphReport
                        stateCumulativeReportData={stateCumulativeReportData}
                     />
                  </CumulativeCasesGraphReportMainContainer>
                  <CumulativeCasesGraphReportMainContainer>
                     <GraphName>
                        CUMULATIVE DISTRICT CONFIRMED CASES REPORT{' '}
                     </GraphName>
                     <TotalDistrictsCasesGraph
                        // districtWiseConfirmedCasesLineChartData={
                        //    districtWiseConfirmedCasesLineChartData
                        // }
                     />
                     {/* <CumulativeCasesGraphReport 
                           
                        /> */}
                  </CumulativeCasesGraphReportMainContainer>
               </CumulativeReportGraphs>
            </ZonalDashboardCasesMapAndGraphContainer>

            <ZonalDashboardTableFormatDataAndChartContainer>
               <DistrictWiseTableData>
                  <DataInTableFormatByDistrictWise
                     tableData={tableData}
                     tableHeaderName={tableHeaderName}
                     tableDataAccessor={tableDataAccessor}
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

   loadingStatusView = () => {
      const {
         getCovid19DataAPIStatus,
         getStateCumulativeReportDataAPIStatus,

      } = this.props

      return getLoadingStatus(
         getCovid19DataAPIStatus,
         getStateCumulativeReportDataAPIStatus
      )
   }

   render() {
      const {
         getCovid19DataAPIError,
         onRetryClick,
      } = this.props
      return (
         <LoadingWrapperWithFailure
            apiStatus={this.loadingStatusView()}
            apiError={getCovid19DataAPIError}
            onRetryClick={onRetryClick}
            renderSuccessUI={this.renderCumulativeCovid19DataUI}
         />
      )
   }
}

export default CumulativeMode
