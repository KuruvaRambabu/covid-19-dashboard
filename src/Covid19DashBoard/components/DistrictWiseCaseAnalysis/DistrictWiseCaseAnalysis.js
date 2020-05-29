import React from "react"

import districtsDataWithDates from "../../fixtures/districtsDataWithDates.json"
import {DistrictWiseCaseAnalysisMainContainer} from "./StyledComponents"
import IndividualDistrictCasesGraph from "../../../Common/components/IndividualDistrictCasesGraphs/IndividualDistrictCasesGraph"

class DistrictWiseCaseAnalysis extends React.Component{

    render(){
        const districtsdata = districtsDataWithDates.everyD
        console.log(districtsdata)
        return(
        <DistrictWiseCaseAnalysisMainContainer>
            {districtsdata.map(district=>{
                return <IndividualDistrictCasesGraph district = {district} />
            })}
        </DistrictWiseCaseAnalysisMainContainer>
        )
    }
}

export default DistrictWiseCaseAnalysis;

// "kadapa": [
    //     {
    //         "total_active": 20,
    //         "total_recovered": 6,
    //         "total_confirmed": 50,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-01",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 20,
    //         "total_recovered": 6,
    //         "total_confirmed": 120,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-02",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 30,
    //         "total_recovered": 8,
    //         "total_confirmed": 130,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-03",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 40,
    //         "total_recovered": 10,
    //         "total_confirmed": 150,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-04",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 50,
    //         "total_recovered": 12,
    //         "total_confirmed": 170,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-05",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 170,
    //         "total_recovered": 50,
    //         "total_confirmed": 180,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-06",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 10,
    //         "total_recovered": 70,
    //         "total_confirmed": 200,
    //         "total_deaths": 10,
    //         "till_date": "2020-05-07",
    //         "state_id": "AP"
    //     }
    // ],
    // "chittor": [
    //     {
    //         "total_active": 20,
    //         "total_recovered": 6,
    //         "total_confirmed": 50,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-01",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 20,
    //         "total_recovered": 6,
    //         "total_confirmed": 120,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-02",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 30,
    //         "total_recovered": 8,
    //         "total_confirmed": 130,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-03",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 40,
    //         "total_recovered": 10,
    //         "total_confirmed": 150,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-04",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 50,
    //         "total_recovered": 12,
    //         "total_confirmed": 170,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-05",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 170,
    //         "total_recovered": 50,
    //         "total_confirmed": 180,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-06",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 10,
    //         "total_recovered": 70,
    //         "total_confirmed": 200,
    //         "total_deaths": 10,
    //         "till_date": "2020-05-07",
    //         "state_id": "AP"
    //     }
    // ],
    // "nellore": [
    //     {
    //         "total_active": 20,
    //         "total_recovered": 6,
    //         "total_confirmed": 50,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-01",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 20,
    //         "total_recovered": 6,
    //         "total_confirmed": 120,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-02",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 30,
    //         "total_recovered": 8,
    //         "total_confirmed": 130,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-03",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 40,
    //         "total_recovered": 10,
    //         "total_confirmed": 150,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-04",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 50,
    //         "total_recovered": 12,
    //         "total_confirmed": 170,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-05",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 170,
    //         "total_recovered": 50,
    //         "total_confirmed": 180,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-06",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 10,
    //         "total_recovered": 70,
    //         "total_confirmed": 200,
    //         "total_deaths": 10,
    //         "till_date": "2020-05-07",
    //         "state_id": "AP"
    //     }
    // ],
    // "ananthapuram": [
    //     {
    //         "total_active": 20,
    //         "total_recovered": 6,
    //         "total_confirmed": 50,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-01",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 20,
    //         "total_recovered": 6,
    //         "total_confirmed": 120,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-02",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 30,
    //         "total_recovered": 8,
    //         "total_confirmed": 130,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-03",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 40,
    //         "total_recovered": 10,
    //         "total_confirmed": 150,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-04",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 50,
    //         "total_recovered": 12,
    //         "total_confirmed": 170,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-05",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 170,
    //         "total_recovered": 50,
    //         "total_confirmed": 180,
    //         "total_deaths": 0,
    //         "till_date": "2020-05-06",
    //         "state_id": "AP"
    //     },
    //     {
    //         "total_active": 10,
    //         "total_recovered": 70,
    //         "total_confirmed": 200,
    //         "total_deaths": 10,
    //         "till_date": "2020-05-07",
    //         "state_id": "AP"
    //     }
    // ]
