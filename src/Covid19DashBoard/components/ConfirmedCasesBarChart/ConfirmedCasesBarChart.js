import React from "react"
import {
    ComposedChart,  Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';


class ConfirmedCasesBarChart extends React.Component {
    render() {
        const{districtWiseData} = this.props
        
        return (
            <ComposedChart
                layout="vertical"
                width={500}
                height={400}
                data={districtWiseData}
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