import {
   ResponsiveContainer,
   LineChart,
   Line,
   XAxis,
   YAxis,
   Tooltip,
   Legend
} from 'recharts'
import React from 'react'
import districtsConfirmedCasesOverTheTime from '../../fixtures/districtsConfirmedCasesOverTheTime.json'

class TotalDistrictsCasesGraph extends React.Component {
   render() {
      const datakeys = Object.keys(districtsConfirmedCasesOverTheTime.districts[0]).slice(0,-1)
      return (
         <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
               <LineChart
                  data={districtsConfirmedCasesOverTheTime.districts}
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
                  {datakeys.map(name=>
                  <Line key = {name}
                     type='monotone'
                     dataKey={name}
                     stroke='#b30000'
                     activeDot={{ r: 1 }}
                  />)}
                  
               </LineChart>
            </ResponsiveContainer>
         </div>
      )
   }
}
export default TotalDistrictsCasesGraph
