import React from 'react'
import { observer } from 'mobx-react'
import {
   Covid19DashBoardMainContainer,
   SignOutBtn,
   SignOutBtnContainer,
   ZonalAndDistrictWiseContainer,
   ZonalWiseBtn,
   DistrictWiseBtn
} from './StyledComponents'

import strings from '../../i18n/strings.json'

import ZonalDashboard from '../ZonalDashboard'

import { observable, toJS } from 'mobx'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
import DistrictWiseCaseAnalysis from '../DistrictWiseCaseAnalysis/DistrictWiseCaseAnalysis'

@observer
class Covid19DashBoard extends React.Component {
   render() {
      const {
         onClickSignOut,
         zonalDashboard,
         onClickZonalDashboard,
         districtWiseCaseAnalysis,
         onClickDistrictWIseCaseAnalysis,
         renderCovid19DataUI,
         getCovid19DataAPIError,
         getCovid19DataAPIStatus,
         onRetryClick
      } = this.props

      return (
         <Covid19DashBoardMainContainer>
            <SignOutBtnContainer>
               <SignOutBtn onClick={onClickSignOut}>
                  {strings.signOutBtnName}
               </SignOutBtn>
            </SignOutBtnContainer>
            <ZonalAndDistrictWiseContainer>
               <ZonalWiseBtn
                  color={zonalDashboard}
                  onClick={onClickZonalDashboard}
               >
                  {strings.zonalWiseBtnName}
               </ZonalWiseBtn>
               <DistrictWiseBtn
                  color={districtWiseCaseAnalysis}
                  onClick={onClickDistrictWIseCaseAnalysis}
               >
                  {strings.districtWIseCaseAnalysis}
               </DistrictWiseBtn>
            </ZonalAndDistrictWiseContainer>

            {zonalDashboard && !districtWiseCaseAnalysis ? (
               <ZonalDashboard />
            ) : (
               <DistrictWiseCaseAnalysis />
            )}
         </Covid19DashBoardMainContainer>
      )
   }
}

export default Covid19DashBoard
