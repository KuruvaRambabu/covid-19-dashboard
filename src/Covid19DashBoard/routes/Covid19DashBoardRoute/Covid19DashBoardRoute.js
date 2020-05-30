import React from "react"
import Covid19DashBoard from "../../components/Covid19DashBoard";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import ZonalDashboard from "../../components/ZonalDashboard";
import DistrictWiseCaseAnalysis from "../../components/DistrictWiseCaseAnalysis/DistrictWiseCaseAnalysis";


@inject("authenticationStore", "covid19DataStore")
@observer
class Covid19DashBoardRoute extends React.Component {
    @observable zonalDashboard = true;
    @observable districtWiseCaseAnalysis = false;

    componentDidMount() {
        this.doNetworkCalls()
    }

    @action.bound
    doNetworkCalls() {
        //this.props.covid19DataStore.districtsDatawithDates()
        this.props.covid19DataStore.getCovid19Data()
        
        
    }
    onClickSignOut = () => {
        this.props.authenticationStore.userSignOut()
    }

    onClickZonalDashboard = () => {
        if (!this.zonalDashboard) {
            this.doNetworkCalls()
            this.zonalDashboard = this.zonalDashboard ? false : true;
            this.districtWiseCaseAnalysis = this.districtWiseCaseAnalysis ? false : true;
        }
    }

    onClickDistrictWIseCaseAnalysis = () => {
        if (!this.districtWiseCaseAnalysis) {
            this.props.covid19DataStore.init()
            this.props.covid19DataStore.getDistrictWiseCaseAnalysisData()
            this.zonalDashboard = this.zonalDashboard ? false : true;
            this.districtWiseCaseAnalysis = this.districtWiseCaseAnalysis ? false : true;
            
        }
    }

    onRetryClick = () => {
        this.doNetworkCalls()
    }

    renderCovid19DataUI = observer(() => {
        if (this.zonalDashboard && !this.districtWiseCaseAnalysis) {
        
           return <ZonalDashboard />
        }

        else{
            return <DistrictWiseCaseAnalysis/>
        }
    })



    render() {
        const {
            getCovid19DataAPIStatus,
            getCovid19DataAPIError,
        } = this.props.covid19DataStore
        return (
            <Covid19DashBoard
                onClickSignOut={this.onClickSignOut}
                zonalDashboard={this.zonalDashboard}
                onClickZonalDashboard={this.onClickZonalDashboard}
                districtWiseCaseAnalysis={this.districtWiseCaseAnalysis}
                onClickDistrictWIseCaseAnalysis={this.onClickDistrictWIseCaseAnalysis}
                renderCovid19DataUI={this.renderCovid19DataUI}
                getCovid19DataAPIStatus={getCovid19DataAPIStatus}
                getCovid19DataAPIError={getCovid19DataAPIError}
                onRetryClick={this.onRetryClick}
            />
        )
    }
}

export default Covid19DashBoardRoute;