import React from "react"
import strings from "../../i18n/strings.json"
import {
    HeaderMainContainer,
    CasesTypecontainer,
    StateName,
    DatePicker,
    CumulativeBtn,
    DailyBtn,
    Datelabel,
    ZonalAndDistrictWiseContainer,



} from "./StyledComponents";
import { observer } from "mobx-react";
import ReactDatePicker from "react-datepicker";
import subDays from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { observable } from "mobx";


@observer
class Header extends React.Component {

    handleChangeDate = (date) => {
        this.startDate = date
        console.log("date",date.toLocaleString() )
        this.props.onChangeCurrentDate(date)
       
    }
    onSelectDate = (date) => {
        this.startDate = date
        this.props.onChangeCurrentDate(date)
        alert("yes")

    }
    

    render() {
        const { onClickDailyData,
            onClickCumulativeData,
            isDaily,
            isCumulative, startDate
        } = this.props
        return (
            <HeaderMainContainer>
                <StateName>Andhra Pradesh</StateName>
                <React.Fragment>
                    <Datelabel>
                        Date :
                    <DatePicker>
                            <ReactDatePicker
                                onChange={this.handleChangeDate}
                                // onSelect={this.onSelectDate}
                                selected={startDate} 
                                minDate = {"20-02-2020"}
                                dateFormat="yyyy-MM-dd"/>
                        </DatePicker>

                    </Datelabel>
                </React.Fragment>
                <CasesTypecontainer>
                    <CumulativeBtn isCumulative={isCumulative} onClick={onClickCumulativeData} >Cumulative</CumulativeBtn>
                    <DailyBtn isDaily={isDaily} onClick={onClickDailyData} >Daily</DailyBtn>

                </CasesTypecontainer>
            </HeaderMainContainer>
        )
    }
}

export default Header

