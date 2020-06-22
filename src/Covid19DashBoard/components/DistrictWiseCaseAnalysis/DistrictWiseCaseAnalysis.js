import React from 'react'
import { observer, inject } from 'mobx-react'

import IndividualDistrictCasesGraph from '../../../Common/components/IndividualDistrictCasesGraphs/IndividualDistrictCasesGraph'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'

import { DistrictWiseCaseAnalysisMainContainer } from './StyledComponents'

@inject('covid19DataStore')
@observer
class DistrictWiseCaseAnalysis extends React.Component {
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
