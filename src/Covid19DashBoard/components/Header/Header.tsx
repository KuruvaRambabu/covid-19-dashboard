import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { observer } from 'mobx-react'
import ReactDatePicker from 'react-datepicker'

import {
   HeaderMainContainer,
   CasesTypecontainer,
   StateName,
   DatePicker,
   CumulativeBtn,
   DailyBtn,
   Datelabel,
   
} from './StyledComponents'

interface HeaderTypes {
   onClickDailyData:()=>void
   onClickCumulativeData:()=>void
   isDaily:boolean
   isCumulative:boolean
   startDate:Date
   name:string
   changeDataMode:()=>void
   onChangeCurrentDate:(date:Date)=>void
}


@observer
class Header extends React.Component <HeaderTypes> {
   // handleChangeDate = (date:Date) => {
   //    this.props.onChangeCurrentDate(date)
   // }

   render() {
      const {
         onClickDailyData,
         onClickCumulativeData,
         isDaily,
         isCumulative,
         startDate,
         name,
         changeDataMode,
         onChangeCurrentDate
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
                        onChange={onChangeCurrentDate}
                        // onSelect={this.onSelectDate}
                        selected={startDate}
                        dateFormat='yyyy-MM-dd'
                        className="bg-gray-800 text-white text-xl rounded focus:outline-none focus:shadow-outline"
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
