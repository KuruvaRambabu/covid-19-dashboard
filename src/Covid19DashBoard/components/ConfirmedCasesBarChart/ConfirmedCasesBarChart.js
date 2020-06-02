import React from "react"
import {
    ComposedChart,  Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';
import { toJS } from "mobx";


class ConfirmedCasesBarChart extends React.Component {
    render() {
        const{districtWiseData} = this.props
        console.log("me confrimed cases bar chart today", toJS(districtWiseData))
        
        return (
            <ComposedChart
                layout="vertical"
                width={500}
                height={500}
                data={toJS(districtWiseData)}
                margin={{
                    top: 20, right: 0, bottom: 0, left: 60,
                }}
            >
                <CartesianGrid  stroke= "#ccc" strokeDasharray="5 5"/>
                <XAxis type="number" />
                <YAxis dataKey="districtName" type="category" stroke="white"  />
                <Tooltip />
                <Legend />
               
                <Bar dataKey="totalConfirmed" name="positive" barSize={20} fill="#f56565" />
                
            </ComposedChart>
        )
    }
}

export default ConfirmedCasesBarChart