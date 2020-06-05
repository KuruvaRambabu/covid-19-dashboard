import React from 'react'
import { observer, inject } from 'mobx-react'

import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
import TotalCases from '../../../Common/components/TotalCases'
import CasesAndItsMap from '../../../Common/components/CasesAndItsMap/CasesAndItsMap'

import CumulativeCasesGraphReport from '../CumulativeCasesGraphReport/CumulativeCasesGraphReport'
import DataInTableFormatByDistrictWise from '../DataInTableFormatByDistrictWise/DataInTableFormatByDistrictWise'
import ConfirmedCasesBarChart from '../ConfirmedCasesBarChart/ConfirmedCasesBarChart'
import distrtictButtons from "../../fixtures/districtButtons.json"

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
   DistrictButtonsContainer,
   ConfirmedCasesBarChartContainer,
   DistrictWIseReportName
} from '../ZonalDashboard/styledComponents'
import TotalDistrictsCasesGraph from '../TotalDistrictsCasesGraph/TotalDistrictsCasesGraph'
import DistrictButton from "../../../Common/components/DistrcitsButton/DistrictButton"

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
         sortCaseValues,
         districtWiseConfirmedCasesLineChartData,
         onRetryClick,
         onClickGotoDistrictPage
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
                        return <DistrictButton
                           onClickGotoDistrictPage={onClickGotoDistrictPage}
                          district = {district}
                          key={district.districtId}
                        />
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
                     <GraphName>CUMULATIVE DISTRICT CONFIRMED CASES REPORT </GraphName>
                     <TotalDistrictsCasesGraph
                        districtWiseConfirmedCasesLineChartData={districtWiseConfirmedCasesLineChartData}
                     />
                     {/* <CumulativeCasesGraphReport 
                           
                        /> */}
                  </CumulativeCasesGraphReportMainContainer>
               </CumulativeReportGraphs>
            </ZonalDashboardCasesMapAndGraphContainer>

            <ZonalDashboardTableFormatDataAndChartContainer>
               <DistrictWiseTableData>
                  <DataInTableFormatByDistrictWise
                     districtWiseData={districtWiseData}
                  />
               </DistrictWiseTableData>
               <ConfirmedCasesBarChartContainer>
                  <DistrictWIseReportName>
                     District Wise Report
                  </DistrictWIseReportName>
                  <ConfirmedCasesBarChart districtWiseData={barChartData} />
               </ConfirmedCasesBarChartContainer>
            </ZonalDashboardTableFormatDataAndChartContainer>
         </React.Fragment>
      )
   })

   render() {
      const { getCovid19DataAPIStatus, getCovid19DataAPIError, onRetryClick } = this.props
      return (
         <LoadingWrapperWithFailure
            apiStatus={getCovid19DataAPIStatus}
            apiError={getCovid19DataAPIError}
            onRetryClick={onRetryClick}
            renderSuccessUI={this.renderCumulativeCovid19DataUI}
         />
      )
   }
}

export default CumulativeMode;