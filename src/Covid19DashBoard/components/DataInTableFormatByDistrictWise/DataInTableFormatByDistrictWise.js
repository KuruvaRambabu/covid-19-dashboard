import React from 'react'
import {
   TableContainer,
   TableRow,
   TableHeader,
   DistrictWiseTableDataContainer
} from './StyledComponents'
import { observer } from 'mobx-react'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './table.css'

@observer
class DataInTableFormatByDistrictWise extends React.Component {
   render() {
      const { districtWiseData } = this.props

      return (
         <DistrictWiseTableDataContainer>
            <ReactTable
               showPagination={false}
               defaultPageSize={districtWiseData.length}
               columns={[
                  {
                     Header: 'District',
                     accessor: 'districtName'
                  },
                  {
                     Header: 'Recovered',
                     accessor: 'totalRecovered'
                  },
                  {
                     Header: 'Active',
                     accessor: 'totalActive'
                  },
                  {
                     Header: 'Confirmed',
                     accessor: 'totalConfirmed'
                  },
                  {
                     Header: 'Deaths',
                     accessor: 'totalDeaths'
                  }
               ]}
               data={districtWiseData}
               defaultSorted={[
                  {
                     id: 'totalCases',
                     desc: true
                  }
               ]}
            />
         </DistrictWiseTableDataContainer>
      )
   }
}

export default DataInTableFormatByDistrictWise
