import React from "react"
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, ReferenceLine
} from 'recharts';


class DailyCasesBarChart extends React.Component {
    render() {
        const { stateDatawithDates, type, color } = this.props

        return (
            <BarChart
                width={500}
                height={300}
                data={stateDatawithDates}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <XAxis dataKey="till_date" />
                <YAxis  />
                <Tooltip />
                <Legend />
                <Bar dataKey={type} barSize={7} fill={color} />

            </BarChart>
        )
    }
}

export default DailyCasesBarChart 
