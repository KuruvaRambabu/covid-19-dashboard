import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import React from "react"



class IndividualDistrictCasesGraph extends React.Component {

    render() {
        const { district } = this.props
        console.log("everyD",district)
        return (

            <LineChart
                width={550}
                height={340}
                data={district}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={district.lastupdated} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={district.district} stroke="#b30000" activeDot={{ r: 8 }} />
            </LineChart>

        )
    }
}

export default IndividualDistrictCasesGraph