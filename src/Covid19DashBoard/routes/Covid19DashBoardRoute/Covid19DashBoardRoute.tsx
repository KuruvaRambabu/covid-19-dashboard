import React from 'react'

import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'

import AuthenticationStore from '../../../Authentication/stores/AuthenticationStore'

import Covid19DataStore from '../../stores/Covid19StateStore'
import Covid19DashBoard from '../../components/Covid19DashBoard'

type storeTypes = {
   covid19DataStore: Covid19DataStore
   authenticationStore: AuthenticationStore
}

@inject('authenticationStore', 'covid19DataStore')
@observer
class Covid19DashBoardRoute extends React.Component<storeTypes> {
   @observable zonalDashboard = true
   @observable districtWiseCaseAnalysis = false

   componentWillUnmount() {
      this.props.covid19DataStore.clearUserSession()
   }

   onClickSignOut = () => {
      this.props.authenticationStore.userSignOut()
   }

   onClickZonalDashboard = () => {
      if (!this.zonalDashboard) {
         this.zonalDashboard = this.zonalDashboard ? false : true
         this.districtWiseCaseAnalysis = this.districtWiseCaseAnalysis
            ? false
            : true
      }
   }

   onClickDistrictWIseCaseAnalysis = () => {
      if (!this.districtWiseCaseAnalysis) {
         this.zonalDashboard = this.zonalDashboard ? false : true
         this.districtWiseCaseAnalysis = this.districtWiseCaseAnalysis
            ? false
            : true
      }
   }

   render() {
      const { covid19DataStore } = this.props
      return (
         <Covid19DashBoard
            covid19DataStore={covid19DataStore}
            onClickSignOut={this.onClickSignOut}
            zonalDashboard={this.zonalDashboard}
            onClickZonalDashboard={this.onClickZonalDashboard}
            districtWiseCaseAnalysis={this.districtWiseCaseAnalysis}
            onClickDistrictWIseCaseAnalysis={
               this.onClickDistrictWIseCaseAnalysis
            }
         />
      )
   }
}

export default Covid19DashBoardRoute
