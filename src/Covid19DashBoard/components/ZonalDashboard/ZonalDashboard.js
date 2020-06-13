import React from 'react'
import Header from '../Header'
import { ZonalDashboardMainContainer } from './styledComponents'
import { observer, inject } from 'mobx-react'
import CumulativeMode from '../CumulativeMode/CumulativeMode'
import DailyMode from '../DailyMode/DailyMode'
import { observable } from 'mobx'

@inject('covid19DataStore')
@observer
class ZonalDashboard extends React.Component {
   @observable isCumulative = true
   @observable isDaily = false
   @observable modeOfData = 'state'
   @observable districtId

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
      if (this.modeOfData === 'state') {
         if (!this.isCumulative) {
            this.doNetworkCalls()
            this.isCumulative = this.isCumulative ? false : true
            this.isDaily = this.isDaily ? false : true
         }
      } else {
         if (!this.isCumulative) {
            this.selectedDistrictNetworkCall()
            this.isCumulative = this.isCumulative ? false : true
            this.isDaily = this.isDaily ? false : true
         }
      }
   }

   onClickDailyData = () => {
      if (this.modeOfData === 'state') {
         if (!this.isDaily) {
            this.networkCallForDailyData()
            this.isCumulative = this.isCumulative ? false : true
            this.isDaily = this.isDaily ? false : true
         }
      } else {
         if (!this.isDaily) {
            // this.props.covid19DataStore.init()
            // this.props.covid19DataStore.getSelectedDistrictDailyData(this.districtId)
            this.props.covid19DataStore.init()
            this.props.covid19DataStore.getSelectedDistrictDailyData(
               this.districtId
            )
            this.props.covid19DataStore.getSelectedDistictDailyVerticalGraphsData(
               this.districtId
            )
            this.isCumulative = this.isCumulative ? false : true
            this.isDaily = this.isDaily ? false : true
         }
      }
   }
   selectedDistrictNetworkCall = () => {
      this.props.covid19DataStore.init()
      this.props.covid19DataStore.getDistrictCumulativeData(this.districtId)
      this.props.covid19DataStore.getDistrictCumulativeGraphData(
         this.districtId
      )
   }
   onClickGotoDistrictPage = e => {
      this.modeOfData = 'district'
      this.districtId = e.target.id
      this.selectedDistrictNetworkCall()
   }

   onChangeCurrentDate = date => {
      if (this.modeOfData === 'state') {
         if (this.isCumulative) {
            this.props.covid19DataStore.onChangeCurrentDate(date)
            this.doNetworkCalls()
         } else {
            this.props.covid19DataStore.onChangeCurrentDate(date)
            this.networkCallForDailyData()
         }
      } else {
         if (this.isCumulative) {
            this.props.covid19DataStore.onChangeCurrentDate(date)
            this.props.covid19DataStore.init()
            this.props.covid19DataStore.getDistrictCumulativeData(
               this.districtId
            )
            this.props.covid19DataStore.getDistrictCumulativeGraphData(
               this.districtId
            )
         } else {
            this.props.covid19DataStore.onChangeCurrentDate(date)
            this.networkCallForDailyData()
         }
      }
   }

   onRetryClick = () => {
      this.doNetworkCalls()
   }
   changeDataMode = () => {
      if (this.modeOfData !== 'state') {
         this.modeOfData = 'state'
         this.props.covid19DataStore.onChangeName('state')
         this.doNetworkCalls()
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
      const name = this.props.covid19DataStore.name
      const selectedDistrictDailyData = this.props.covid19DataStore
         .selectedDistrictBarChartData
      const {
         selectedDistrictDailyVerticalGraphData
      } = this.props.covid19DataStore
      console.log('selected daliy zonal', selectedDistrictDailyData)
      return (
         <ZonalDashboardMainContainer>
            <Header
               isDaily={this.isDaily}
               isCumulative={this.isCumulative}
               onClickCumulativeData={this.onClickCumulativeData}
               onClickDailyData={this.onClickDailyData}
               onChangeCurrentDate={this.onChangeCurrentDate}
               startDate={startDate}
               name={name}
               changeDataMode={this.changeDataMode}
            />

            {this.modeOfData === 'state' ? (
               <React.Fragment>
                  {this.isCumulative ? (
                     <CumulativeMode
                        confirmedCases={confirmedCases}
                        activeCases={activeCases}
                        recoveredCases={recoveredCases}
                        deathCases={deathCases}
                        tableData={districtWiseData}
                        stateCumulativeReportData={stateCumulativeReportData}
                        barChartData={barChartData}
                        tableHeaderName='District Name'
                        tableDataAccessor='districtName'
                        barChartDataKey='districtName'
                        sortCaseValues={this.sortCaseValues}
                        getCovid19DataAPIStatus={getCovid19DataAPIStatus}
                        getCovid19DataAPIError={getCovid19DataAPIError}
                        onRetryClick={this.onRetryClick}
                        onClickGotoDistrictPage={this.onClickGotoDistrictPage}
                     />
                  ) : (
                     <DailyMode
                        confirmedCases={confirmedCases}
                        activeCases={activeCases}
                        recoveredCases={recoveredCases}
                        deathCases={deathCases}
                        tableData={districtWiseData}
                        tableHeaderName='District Name'
                        tableDataAccessor='districtName'
                        barChartDataKey='districtName'
                        stateCumulativeReportData={stateCumulativeReportData}
                        barChartData={barChartData}
                        sortCaseValues={this.sortCaseValues}
                        getStateDailyDataAPIStatus={getStateDailyDataAPIStatus}
                        getStateDailyDataAPIError={getStateDailyDataAPIError}
                        networkCallForDailyData={this.networkCallForDailyData}
                        stateDailyVerticalGraphData={
                           stateDailyVerticalGraphData
                        }
                     />
                  )}
               </React.Fragment>
            ) : (
               <React.Fragment>
                  {this.isCumulative ? (
                     <CumulativeMode
                        confirmedCases={confirmedCases}
                        activeCases={activeCases}
                        recoveredCases={recoveredCases}
                        deathCases={deathCases}
                        tableData={districtWiseData}
                        stateCumulativeReportData={stateCumulativeReportData}
                        barChartData={barChartData}
                        tableHeaderName='Mandal Name'
                        tableDataAccessor='mandalName'
                        barChartDataKey='mandalName'
                        sortCaseValues={this.sortCaseValues}
                        getCovid19DataAPIStatus={getCovid19DataAPIStatus}
                        getCovid19DataAPIError={getCovid19DataAPIError}
                        onRetryClick={this.onRetryClick}
                        onClickGotoDistrictPage={this.onClickGotoDistrictPage}
                     />
                  ) : (
                     <DailyMode
                        confirmedCases={confirmedCases}
                        activeCases={activeCases}
                        recoveredCases={recoveredCases}
                        deathCases={deathCases}
                        tableData={selectedDistrictDailyData}
                        tableHeaderName='Mandal Name'
                        tableDataAccessor='mandalName'
                        barChartDataKey='mandalName'
                        stateCumulativeReportData={
                           selectedDistrictDailyVerticalGraphData
                        }
                        barChartData={selectedDistrictDailyData}
                        sortCaseValues={this.sortCaseValues}
                        getStateDailyDataAPIStatus={getStateDailyDataAPIStatus}
                        getStateDailyDataAPIError={getStateDailyDataAPIError}
                        networkCallForDailyData={this.networkCallForDailyData}
                        stateDailyVerticalGraphData={
                           selectedDistrictDailyVerticalGraphData
                        }
                     />
                  )}
               </React.Fragment>
            )}
         </ZonalDashboardMainContainer>
      )
   }
}

export default ZonalDashboard

// {
//    "districtName": "Chittoor",
//    "districtId": 3
// },
// {
//    "districtName": "Ananthapur",
//    "districtId": 4
// },
// {
//    "districtName": "Nellore",
//    "districtId": 5
// },
// {
//    "districtName": "Krishna",
//    "districtId": 6
// },
// {
//    "districtName": "Guntur",
//    "districtId": 7
// },
// {
//    "districtName": "Prakasam",
//    "districtId": 8
// },
// {
//    "districtName": "West Godavari",
//    "districtId": 9
// },
// {
//    "districtName": "East Godavari",
//    "districtId": 10
// },
// {
//    "districtName": "Vijayanagaram",
//    "districtId": 11
// },
// {
//    "districtName": "Vishakapatnam",
//    "districtId": 12
// },
// {
//    "districtName": "Srikakulam",
//    "districtId": 13
// }
