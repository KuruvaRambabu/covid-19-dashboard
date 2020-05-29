import React from "react"
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


class CumulativeCasesGraphReport extends React.Component {

    render() {
        const { districtsDatawithDate } = this.props
        return (


            <LineChart
                width={600}
                height={300}
                data={districtsDatawithDate}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="till_date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total_confirmed" stroke="#b30000" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="total_active" stroke="#0033cc" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="total_recovered" stroke="#00b300" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="total_deaths" stroke="#e6e600" activeDot={{ r: 8 }}/>
            
            </LineChart>

        );
    }
}

export default CumulativeCasesGraphReport;