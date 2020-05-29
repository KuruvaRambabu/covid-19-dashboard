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
            total_active,
            total_recovered,
            total_confirmed,
            total_deaths,
            district_name
        } = this.props.district
        return (
            <DistrictWiseTableDataContainer>
                <TableHeader>{district_name}</TableHeader>
                <TableHeader>{total_confirmed}</TableHeader>
                <TableHeader>{total_active}</TableHeader>
                <TableHeader> {total_recovered} </TableHeader>
                <TableHeader>{total_deaths}</TableHeader>
            </DistrictWiseTableDataContainer>
        )
    }
}

export default DistrictWiseData