import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import React from "react"
import { IndividualDistrictCasesGraphMainContainer,DistrictNameTag } from "./StyledComponents";



class IndividualDistrictCasesGraph extends React.Component {

  render() {
    let { district } = this.props
    const name = district.district_name
    district = district.district_statistics
    console.log(district)
    
    return (
      <React.Fragment>
        <IndividualDistrictCasesGraphMainContainer>
          <DistrictNameTag>CUMULATIVE CONFIRMED CASES - {name.toUpperCase()}</DistrictNameTag>
        <LineChart
          width={550}
          height={340}
          data={district}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="till_date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total_confirmed" name={name} stroke="#b30000" activeDot={{ r: 8 }} />
        </LineChart>
        </IndividualDistrictCasesGraphMainContainer>
      </React.Fragment>

    )
  }
}

export default IndividualDistrictCasesGraph