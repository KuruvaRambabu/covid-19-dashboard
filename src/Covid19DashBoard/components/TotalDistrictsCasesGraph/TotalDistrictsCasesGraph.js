import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import React from "react"


class TotalDistrictsCasesGraph extends React.Component {

    render() {
        const { stateCumulativeReportData } = this.props
        // console.log("confirmedCasesGraph", districtConformedCasesGraphData.dis)
        return (

            <LineChart
                width={500}
                height={300}
                data={stateCumulativeReportData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tillDate" />
                <YAxis />
                <Tooltip />
                <Legend />
                {
                    stateCumulativeReportData.map((id) => {
                        console.log
                        return (<Line key={`line_${id}`} dataKey={`${id.totalRecovered}_value`} />)
                    })}
                < Line type="monotone" dataKey="total_confirmed" stroke="#b30000" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="total_active" stroke="#0033cc" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="total_recovered" stroke="#00b300" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="total_deaths" stroke="#e6e600" activeDot={{ r: 8 }} />

            </LineChart>

        )
    }
}
export default TotalDistrictsCasesGraph
