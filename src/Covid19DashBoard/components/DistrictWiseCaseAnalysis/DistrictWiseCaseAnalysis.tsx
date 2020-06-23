import React from 'react'
import { observer } from 'mobx-react'

import IndividualDistrictCasesGraph from '../../../Common/components/IndividualDistrictCasesGraphs/IndividualDistrictCasesGraph'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'

import { DistrictWiseCaseAnalysisMainContainer } from './StyledComponents'
import Covid19DataStore from "../../stores/Covid19StateStore"

interface DistrictWiseCaseAnalysisTypes {
   covid19DataStore: Covid19DataStore
}



@observer
class DistrictWiseCaseAnalysis extends React.Component <DistrictWiseCaseAnalysisTypes> {
   componentDidMount() {
      this.doNetworkCall()
   }

   renderDistrictAnalysisDataUI = observer(() => {
      const districtsdata = this.props.covid19DataStore.districtAnalysisData
      return districtsdata.map(district => (
         <IndividualDistrictCasesGraph
            key={district.districtName}
            district={district}
         />
      ))
   })

   doNetworkCall = () => {
      this.props.covid19DataStore.getDistrictWiseCaseAnalysisData()
   }

   onRetryClick = () => {
      this.doNetworkCall()
   }

   render() {
      const {
         getDistrictWiseCaseAnalysisDataAPIStatus,
         getDistrictWiseCaseAnalysisDataAPIError
      } = this.props.covid19DataStore

      return (
         <DistrictWiseCaseAnalysisMainContainer>
            <LoadingWrapperWithFailure
               apiStatus={getDistrictWiseCaseAnalysisDataAPIStatus}
               apiError={getDistrictWiseCaseAnalysisDataAPIError}
               onRetryClick={this.onRetryClick}
               renderSuccessUI={this.renderDistrictAnalysisDataUI}
            />
         </DistrictWiseCaseAnalysisMainContainer>
      )
   }
}

export default DistrictWiseCaseAnalysis
