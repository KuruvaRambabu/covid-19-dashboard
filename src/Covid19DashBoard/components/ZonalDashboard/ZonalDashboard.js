import React from "react"
import Header from "../Header"
import {
    ZonalDashboardMainContainer,
} from "./StyledComponents";
import { observer, inject } from "mobx-react";
import CumulativeModel from "../CumulativeModel/CumulativeModel";
import DailyModel from "../DailyModel/DailyModel";
import { observable } from "mobx";


@inject("covid19DataStore")
@observer 
class ZonalDashboard extends React.Component {
    @observable isCumulative = true;
    @observable isDaily = false;
    
    componentDidMount() {
        this.doNetworkCalls()
    }

    doNetworkCalls = () => {
        this.props.covid19DataStore.init()
        this.props.covid19DataStore.getStateCumulativeReportData()
        this.props.covid19DataStore.getCovid19Data()
    }

    sortCaseValues = (e) => {
        console.log(e.target.id)
        this.props.covid19DataStore.sortBySelectedCase(e.target.id)
    }


    onClickCumulativeData = () => {
        if (!this.isCumulative) {
            this.isCumulative = this.isCumulative ? false : true;
            this.isDaily = this.isDaily ? false : true;
        }
    }

    onClickDailyData = () => {
        if (!this.isDaily) {
            this.isCumulative = this.isCumulative ? false : true;
            this.isDaily = this.isDaily ? false : true;
        }
    }

    onChangeCurrentDate = (date) => {
        if(this.isCumulative){
            this.props.covid19DataStore.onChangeCurrentDate(date)
        }
        else{
            
        }
       
    }

    networkCallForDailyData=()=>{
    
    }

    render() {
        const confirmedCases = this.props.covid19DataStore.totalConfirmedCases
        const activeCases = this.props.covid19DataStore.totalActiveCases
        const recoveredCases = this.props.covid19DataStore.totalRecoveredCases
        const deathCases = this.props.covid19DataStore.totalDeathCases
        const districtWiseData = this.props.covid19DataStore.totalDistrictCases
        const barChartData = this.props.covid19DataStore.barChartData
        const stateCumulativeReportData = this.props.covid19DataStore.stateCumulativeReport
        const startDate = this.props.covid19DataStore.currentDate
        const {
            getCovid19DataAPIStatus,
            getCovid19DataAPIError,
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

                {this.isCumulative ?
                    <CumulativeModel
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
                    :
                    <DailyModel
                        confirmedCases={confirmedCases}
                        activeCases={activeCases}
                        recoveredCases={recoveredCases}
                        deathCases={deathCases}
                        districtWiseData={districtWiseData}
                        stateCumulativeReportData={stateCumulativeReportData}
                        barChartData={barChartData}
                        sortCaseValues={this.sortCaseValues}
                    />
                }
            </ZonalDashboardMainContainer>
        )
    }
}

export default ZonalDashboard;