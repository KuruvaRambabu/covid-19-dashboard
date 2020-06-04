import React from 'react'
import Header from '../Header'
import { ZonalDashboardMainContainer } from './StyledComponents'
import { observer, inject } from 'mobx-react'
import CumulativeMode from '../CumulativeMode/CumulativeMode'
import DailyMode from '../DailyMode/DailyMode'
import { observable } from 'mobx'

@inject('covid19DataStore')
@observer
class ZonalDashboard extends React.Component {
   @observable isCumulative = true
   @observable isDaily = false

   componentDidMount() {
      this.doNetworkCalls()
   }

   doNetworkCalls = () => {
      this.props.covid19DataStore.init()
      this.props.covid19DataStore.getStateCumulativeReportData()
      this.props.covid19DataStore.getCovid19Data()
   }

   sortCaseValues = e => {
      this.props.covid19DataStore.sortBySelectedCase(e.target.id)
   }

   onClickCumulativeData = () => {
      if (!this.isCumulative) {
         this.doNetworkCalls()
         this.isCumulative = this.isCumulative ? false : true
         this.isDaily = this.isDaily ? false : true
      }
   }

   onClickDailyData = () => {
      if (!this.isDaily) {
         this.networkCallForDailyData()
         this.isCumulative = this.isCumulative ? false : true
         this.isDaily = this.isDaily ? false : true
      }
   }

   onChangeCurrentDate = date => {
      if (this.isCumulative) {
         this.doNetworkCalls()
         this.props.covid19DataStore.onChangeCurrentDate(date)
      } else {
         this.networkCallForDailyData()
         this.props.covid19DataStore.onChangeCurrentDate(date)
      }
   }

   networkCallForDailyData = () => {
      this.props.covid19DataStore.init()
      this.props.covid19DataStore.getStateDailyData()
      this.props.covid19DataStore.getStateDailyVerticalGraphData()
   }

   render() {
      const confirmedCases = this.props.covid19DataStore.totalConfirmedCases
      const activeCases = this.props.covid19DataStore.totalActiveCases
      const recoveredCases = this.props.covid19DataStore.totalRecoveredCases
      const deathCases = this.props.covid19DataStore.totalDeathCases
      const districtWiseData = this.props.covid19DataStore.totalDistrictCases
      const barChartData = this.props.covid19DataStore.barChartData
      const stateCumulativeReportData = this.props.covid19DataStore
         .stateCumulativeReport
      const startDate = this.props.covid19DataStore.currentDate
      const stateDailyVerticalGraphData = this.props.covid19DataStore
         .stateDailyVerticalGraphData
      const {
         getCovid19DataAPIStatus,
         getCovid19DataAPIError,
         getStateDailyDataAPIStatus,
         getStateDailyDataAPIError
      } = this.props.covid19DataStore
      return (
         <ZonalDashboardMainContainer>
            <Header
               isDaily={this.isDaily}
               isCumulative={this.isCumulative}
               onClickCumulativeData={this.onClickCumulativeData}
               onClickDailyData={this.onClickDailyData}
               onChangeCurrentDate={this.onChangeCurrentDate}
               startDate={startDate}
            />

            {this.isCumulative ? (
               <CumulativeMode
                  confirmedCases={confirmedCases}
                  activeCases={activeCases}
                  recoveredCases={recoveredCases}
                  deathCases={deathCases}
                  districtWiseData={districtWiseData}
                  stateCumulativeReportData={stateCumulativeReportData}
                  barChartData={barChartData}
                  sortCaseValues={this.sortCaseValues}
                  getCovid19DataAPIStatus={getCovid19DataAPIStatus}
                  getCovid19DataAPIError={getCovid19DataAPIError}

               />
            ) : (
                  <DailyMode
                     confirmedCases={confirmedCases}
                     activeCases={activeCases}
                     recoveredCases={recoveredCases}
                     deathCases={deathCases}
                     districtWiseData={districtWiseData}
                     stateCumulativeReportData={stateCumulativeReportData}
                     barChartData={barChartData}
                     sortCaseValues={this.sortCaseValues}
                     getStateDailyDataAPIStatus={getStateDailyDataAPIStatus}
                     getStateDailyDataAPIError={getStateDailyDataAPIError}
                     networkCallForDailyData={this.networkCallForDailyData}
                     stateDailyVerticalGraphData={stateDailyVerticalGraphData}
                  />
               )}
         </ZonalDashboardMainContainer>
      )
   }
}

export default ZonalDashboard
