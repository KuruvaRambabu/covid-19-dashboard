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
import { toJS } from 'mobx'

@observer
class DataInTableFormatByDistrictWise extends React.Component {
   render() {
      const { tableData, tableDataAccessor, tableHeaderName } = this.props
      return (
         <DistrictWiseTableDataContainer data-testid='dataInTheTableFormat'>
            <ReactTable
               showPagination={false}
               defaultPageSize={tableData.length}
               columns={[
                  {
                     Header: tableHeaderName,
                     accessor: tableDataAccessor
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
               data={toJS(tableData)}
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
