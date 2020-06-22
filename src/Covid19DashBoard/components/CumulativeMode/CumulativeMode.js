import React from 'react'
import { observer, inject } from 'mobx-react'

import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
import TotalCases from '../../../Common/components/TotalCases'
import CasesAndItsMap from '../../../Common/components/CasesAndItsMap/CasesAndItsMap'

import CumulativeCasesGraphReport from '../CumulativeCasesGraphReport/CumulativeCasesGraphReport'
import DataInTableFormatByDistrictWise from '../DataInTableFormatByDistrictWise/DataInTableFormatByDistrictWise'
import ConfirmedCasesBarChart from '../ConfirmedCasesBarChart/ConfirmedCasesBarChart'
import distrtictButtons from '../../fixtures/districtButtons.json'

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
import TotalDistrictsCasesGraph from '../TotalDistrictsCasesGraph/TotalDistrictsCasesGraph'
import DistrictButton from '../../../Common/components/DistrcitsButton/DistrictButton'
import { getLoadingStatus, isAPIFailed } from '@ib/api-utils'
import { stat } from 'fs'

@observer
class CumulativeMode extends React.Component {
   renderCumulativeCovid19DataUI = observer(() => {
      const {
         confirmedCases,
         activeCases,
         recoveredCases,
         deathCases,
         tableData,
         stateCumulativeReportData,
         barChartData,
         sortCaseValues,
         districtWiseConfirmedCasesLineChartData,
         onRetryClick,
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
                        districtWiseConfirmedCasesLineChartData={
                           districtWiseConfirmedCasesLineChartData
                        }
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
         getCovid19DataAPIError,
         getStateCumulativeReportDataAPIError
      } = this.props

      return getLoadingStatus(
         getCovid19DataAPIStatus,
         getStateCumulativeReportDataAPIStatus
      )
   }

   render() {
      const {
         getCovid19DataAPIStatus,
         getCovid19DataAPIError,
         onRetryClick,
         getStateCumulativeReportDataAPIStatus
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
