import React from "react"
import {
   
    CaseContainer,
    CaseType,
    CasesNumber,
    TotalCasesMainContainer

} from "./StyledComponents"




class TotalCases extends React.Component {
    constructor(props) {
        super(props)
        this.typeOfcases = ["Confirmed", "Active", "Recovered", "Deaths"]
    }


    render() {
        const {
            confirmedCases,
            deathCases,
            activeCases,
            recoveredCases
        } = this.props
        return (
            <TotalCasesMainContainer>
                 <CaseContainer color = "red">
                    <CaseType>Confirmed</CaseType>
                    <CasesNumber> {confirmedCases} </CasesNumber>
                </CaseContainer>

                <CaseContainer color = "orange">
                    <CaseType>Active</CaseType>
                    <CasesNumber> {activeCases} </CasesNumber>
                </CaseContainer>

                <CaseContainer color="green">
                    <CaseType>Recovered</CaseType>
                    <CasesNumber> {recoveredCases} </CasesNumber>
                </CaseContainer>
                
                <CaseContainer color = "black">
                    <CaseType>Deaths</CaseType>
                    <CasesNumber> {deathCases} </CasesNumber>
                </CaseContainer>
            </TotalCasesMainContainer>
        )
    }
};

export default TotalCases


{/* <ConfirmedCasesContainer>
                    <ConfirmedName>Confrimed</ConfirmedName>
                    <ConfirmedNumber>300</ConfirmedNumber>
                </ConfirmedCasesContainer>

                <ActiveCasesContainer>
                    <ActiveName>Active</ActiveName>
                    <ActiveCasesNumber>100</ActiveCasesNumber>
                </ActiveCasesContainer>

                <RecoveredCasesContainer>
                    <RecoveredName>Recovered</RecoveredName>
                    <RecoveredCasesNumber>100</RecoveredCasesNumber>
                </RecoveredCasesContainer> */}