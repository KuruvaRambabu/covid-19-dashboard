import React from 'react'
import {
   ResponsiveContainer,
   BarChart,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ReferenceLine
} from 'recharts'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'

@observer
class DailyCasesBarChart extends React.Component {
   render() {
      const { stateCumulativeReportData, type, color } = this.props
      return (
         <div data-testid = "dailyCasesBarChartData"style={{ width: '90%', height: 200 }}>
            <ResponsiveContainer>
               <BarChart
                  data={toJS(stateCumulativeReportData)}
                  margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5
                  }}
               >
                  <XAxis dataKey='date' />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey={type} barSize={7} fill={color} />
               </BarChart>
            </ResponsiveContainer>
         </div>
      )
   }
}

export default DailyCasesBarChart
