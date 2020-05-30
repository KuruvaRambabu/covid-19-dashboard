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

import "react-datepicker/dist/react-datepicker.css";
import { observable } from "mobx";

@observer
class Header extends React.Component {

    @observable startDate = new Date()

    handleChangeDate = (date) => {
        this.startDate = date
    }
    onSelectDate = (date) => {
        this.startDate = date
    }

    render() {
        const { onClickDailyData,
            onClickCumulativeData,
            isDaily,
            isCumulative
        } = this.props
        return (
            <HeaderMainContainer>
                <StateName>Andhra Pradesh</StateName>
                <React.Fragment>
                    <Datelabel>
                        Date :
                    <DatePicker>
                            <ReactDatePicker
                                handleChangeDate={this.handleChangeDate}
                                onSelect={this.onSelectDate}
                                selected={this.startDate} 
                                dateFormat="yyyy/MM/dd"/>
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

