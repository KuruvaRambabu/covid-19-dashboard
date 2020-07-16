import React from 'react'
import { observer } from 'mobx-react'

import strings from '../../i18n/strings.json'

import ZonalDashboard from '../ZonalDashboard'
import DistrictWiseCaseAnalysis from '../DistrictWiseCaseAnalysis/DistrictWiseCaseAnalysis'

import {
   Covid19DashBoardMainContainer,
   SignOutBtn,
   SignOutBtnContainer,
   ZonalAndDistrictWiseContainer,
   ZonalWiseBtn,
   DistrictWiseBtn
} from './styledComponents'
import Covid19DataStore from '../../stores/Covid19StateStore'

interface Covid19DashBoardTypes {
   onClickSignOut: () => void
   zonalDashboard: boolean
   onClickZonalDashboard: () => void
   districtWiseCaseAnalysis: boolean
   onClickDistrictWIseCaseAnalysis: () => void
   covid19DataStore: Covid19DataStore
}

@observer
class Covid19DashBoard extends React.Component<Covid19DashBoardTypes> {
   render() {
      const {
         onClickSignOut,
         zonalDashboard,
         onClickZonalDashboard,
         districtWiseCaseAnalysis,
         onClickDistrictWIseCaseAnalysis,
         covid19DataStore
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
                  color={zonalDashboard ? 'yes' : ''}
                  onClick={onClickZonalDashboard}
               >
                  {strings.zonalWiseBtnName}
               </ZonalWiseBtn>
               <DistrictWiseBtn
                  color={zonalDashboard ? '' : 'yes'}
                  onClick={onClickDistrictWIseCaseAnalysis}
               >
                  {strings.districtWIseCaseAnalysis}
               </DistrictWiseBtn>
            </ZonalAndDistrictWiseContainer>

            {zonalDashboard && !districtWiseCaseAnalysis ? (
               <ZonalDashboard covid19DataStore={covid19DataStore} />
            ) : (
               <DistrictWiseCaseAnalysis covid19DataStore={covid19DataStore} />
            )}
         </Covid19DashBoardMainContainer>
      )
   }
}

export default Covid19DashBoard
