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

@observer
class Header extends React.Component {
    render() {
        return (
            <HeaderMainContainer>

                <StateName>Andhra Pradesh</StateName>
                <Datelabel>
                    Date : 
                    <DatePicker
                        type="date"
                        defaultValue="2020-05-07"
                    ></DatePicker>
                </Datelabel>
                <CasesTypecontainer>
                    <CumulativeBtn>Cumulative</CumulativeBtn>
                    <DailyBtn>Daily</DailyBtn>

                </CasesTypecontainer>
            </HeaderMainContainer>
        )
    }
}

export default Header