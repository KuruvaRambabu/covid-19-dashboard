import {
   ResponsiveContainer,
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend
} from 'recharts'
import React from 'react'
import districtsConfirmedCasesOverTheTime from "../../fixtures/districtsConfirmedCasesOverTheTime.json"

class TotalDistrictsCasesGraph extends React.Component {
   render() {

      const { stateCumulativeReportData } = this.props
      console.log("confirmedCasesGraph", districtsConfirmedCasesOverTheTime)
      return (
         <div style={{ width: '100%', height: 300 }}>
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
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='date' />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type='monotone' dataKey="Kurnool" stroke='#b30000' activeDot={{ r: 1 }} />
                  <Line type='monotone' dataKey="Kadapa" stroke='yellow' activeDot={{ r: 1 }} />

                  <Line type='monotone' dataKey="Nellore" stroke='orange' activeDot={{ r: 1 }} />

                  <Line type='monotone' dataKey="Chittoor" stroke='blue' activeDot={{ r: 1 }} />

                  <Line type='monotone' dataKey="Ananthapur" stroke='white' activeDot={{ r: 1 }} />

                  <Line type='monotone' dataKey="Prakasham" stroke='green' activeDot={{ r: 1 }} />

                  <Line type='monotone' dataKey="Krishna" stroke='yellow' activeDot={{ r: 1 }} />

                  <Line type='monotone' dataKey="Guntur" stroke='red' activeDot={{ r: 1 }} />

                  <Line type='monotone' dataKey="West Godavari" stroke='blue' activeDot={{ r: 1 }} />

                  <Line type='monotone' dataKey="East Godavari" stroke='#b30000'  activeDot={{ r: 1 }} />

                  <Line type='monotone' dataKey="Vijayanagaram" stroke='#b30000'  activeDot={{ r: 1 }} />

                  <Line type='monotone' dataKey="Vishakaptnam" stroke='#b30000' activeDot={{ r: 1 }} />

                  <Line type='monotone' dataKey="Srikakulam" stroke='#b30000' activeDot={{ r: 1 }} />


               </LineChart>
            </ResponsiveContainer>
         </div>
      )
   }
}
export default TotalDistrictsCasesGraph
