import React from 'react'
import strings from '../../i18n/strings.json'
import { format } from 'date-fns'

import {
   HeaderMainContainer,
   CasesTypecontainer,
   StateName,
   DatePicker,
   CumulativeBtn,
   DailyBtn,
   Datelabel,
   ZonalAndDistrictWiseContainer
} from './StyledComponents'
import { observer } from 'mobx-react'
import ReactDatePicker from 'react-datepicker'
import subDays from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { observable, values } from 'mobx'

@observer
class Header extends React.Component {
   handleChangeDate = date => {
      this.props.onChangeCurrentDate(date)
   }

   render() {
      const {
         onClickDailyData,
         onClickCumulativeData,
         isDaily,
         isCumulative,
         startDate,
         name,
         changeDataMode
      } = this.props
      return (
         <HeaderMainContainer>
            <StateName onClick={changeDataMode}>
               Andhra Pradesh /{name}{' '}
            </StateName>
            <React.Fragment>
               <Datelabel>
                  Date :
                  <DatePicker>
                     <ReactDatePicker
                        onChange={this.handleChangeDate}
                        // onSelect={this.onSelectDate}
                        selected={startDate}
                        dateFormat='yyyy-MM-dd'
                     />
                  </DatePicker>
               </Datelabel>
            </React.Fragment>
            <CasesTypecontainer>
               <CumulativeBtn
                  isCumulative={isCumulative}
                  onClick={onClickCumulativeData}
               >
                  Cumulative
               </CumulativeBtn>
               <DailyBtn isDaily={isDaily} onClick={onClickDailyData}>
                  Daily
               </DailyBtn>
            </CasesTypecontainer>
         </HeaderMainContainer>
      )
   }
}

export default Header
