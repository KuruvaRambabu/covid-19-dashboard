import React from 'react'
import { observer } from 'mobx-react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './table.css'
import { toJS } from 'mobx'

import {
   DistrictWiseTableDataContainer
} from './StyledComponents'

interface DataInTableFormatByDistrictWiseTypes {
   tableData: Array<object>
   tableDataAccessor: string
   tableHeaderName: string
}


@observer
class DataInTableFormatByDistrictWise extends React.Component<DataInTableFormatByDistrictWiseTypes> {
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
