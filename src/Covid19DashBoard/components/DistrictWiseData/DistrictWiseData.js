import React from "react"
import {
    TableContainer,
    TableRow,
    TableHeader,
    DistrictWiseTableDataContainer
} from "./StyledComponents"
import { observer } from "mobx-react"

@observer
class DistrictWiseData extends React.Component {
    render() {
        const {
            totalActive,
            totalRecovered,
            totalConfirmed,
            totalDeaths,
            districtName,
           
        } = this.props.district
        const{index} = this.props
       
        return (
            <DistrictWiseTableDataContainer index = {index}>
                <TableHeader >{districtName}</TableHeader>
                <TableHeader>{totalConfirmed}</TableHeader>
                <TableHeader>{totalActive}</TableHeader>
                <TableHeader> {totalRecovered} </TableHeader>
                <TableHeader>{totalDeaths}</TableHeader>
            </DistrictWiseTableDataContainer>
        )
    }
}

export default DistrictWiseData