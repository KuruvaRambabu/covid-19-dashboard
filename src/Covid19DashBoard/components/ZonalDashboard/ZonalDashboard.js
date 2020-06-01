import React from "react"
import Header from "../Header"
import {
    ZonalDashboardMainContainer,
} from "./StyledComponents";
import { observer, inject } from "mobx-react";
import CumulativeModel from "../CumulativeModel/CumulativeModel";
import DailyModel from "../DailyModel/DailyMdel";
import { observable } from "mobx";


@inject("covid19DataStore")
@observer
class ZonalDashboard extends React.Component {
    @observable isCumulative = true;
    @observable isDaily = false;

    sortCaseValues = (e) => {
        alert(e.target.id)
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
        this.props.covid19DataStore.onChangeCurrentDate(date)
    }

    render() {
        const confirmedCases = this.props.covid19DataStore.totalConfirmedCases
        const activeCases = this.props.covid19DataStore.totalActiveCases
        const recoveredCases = this.props.covid19DataStore.totalRecoveredCases
        const deathCases = this.props.covid19DataStore.totalDeathCases
        const districtWiseData = this.props.covid19DataStore.totalDistrictCases
        const barChartData = this.props.covid19DataStore.barChartData
        const stateDatawithDates = this.props.covid19DataStore.stateDataWithDates
        const dRecovred = 0
        const dActive = 2
        const dConfirmed = 2
        const dDeaths = 1
        const startDate = this.props.covid19DataStore.currentDate
        console.log(stateDatawithDates)
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
                        stateDataWithDates={stateDatawithDates}
                        barChartData={barChartData}
                        sortCaseValues={this.sortCaseValues}
                    />
                    :
                    <DailyModel
                        confirmedCases={confirmedCases}
                        activeCases={activeCases}
                        recoveredCases={recoveredCases}
                        deathCases={deathCases}
                        districtWiseData={districtWiseData}
                        stateDatawithDates={stateDatawithDates}
                        barChartData={barChartData}
                        sortCaseValues={this.sortCaseValues}
                    />
                }
            </ZonalDashboardMainContainer>
        )
    }
}

export default ZonalDashboard;