import React from 'react'
import {
   ResponsiveContainer,
   ComposedChart,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend
} from 'recharts'
import { toJS } from 'mobx'
import { observer } from "mobx-react"

@observer
class ConfirmedCasesBarChart extends React.Component {
   render() {
      const { districtWiseData,barChartDataKey } = this.props
      return (
         <div style={{ width: '90%', height: 500 }}>
         <ResponsiveContainer>
         <ComposedChart
            layout='vertical'
           
            data={toJS(districtWiseData)}
            margin={{
               top: 20,
               right: 0,
               bottom: 0,
               left: 60
            }}
         >
            <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
            <XAxis type='number' />
            <YAxis dataKey={barChartDataKey} type='category' stroke='white' />
            <Tooltip />
            <Legend />

            <Bar
               dataKey='totalConfirmed'
               name='positive'
               barSize={20}
               fill='#f56565'
            />
         </ComposedChart>
         </ResponsiveContainer>
         </div>
      )
   }
}

export default ConfirmedCasesBarChart
