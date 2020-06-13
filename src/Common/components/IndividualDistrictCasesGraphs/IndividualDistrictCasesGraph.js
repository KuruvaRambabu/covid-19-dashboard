import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend
} from 'recharts'
import React from 'react'
import {
   IndividualDistrictCasesGraphMainContainer,
   DistrictNameTag
} from './StyledComponents'

class IndividualDistrictCasesGraph extends React.Component {
   render() {
      let { district } = this.props
      const name = district.districtName
      district = district.districtStats

      return (
         <React.Fragment>
            <IndividualDistrictCasesGraphMainContainer>
               <DistrictNameTag>
                  CUMULATIVE CONFIRMED CASES - {name.toUpperCase()}
               </DistrictNameTag>
               <LineChart
                  width={550}
                  height={340}
                  data={district}
                  margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5
                  }}
               >
                  <XAxis dataKey='tillDate' />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                     type='monotone'
                     dataKey='totalConfirmed'
                     name={name}
                     stroke='#b30000'
                     activeDot={{ r: 4 }}
                  />
               </LineChart>
            </IndividualDistrictCasesGraphMainContainer>
         </React.Fragment>
      )
   }
}

export default IndividualDistrictCasesGraph
