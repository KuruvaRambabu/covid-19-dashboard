import React from 'react'
import { observer } from "mobx-react"

import {
   CaseContainer,
   CaseType,
   CasesNumber,
   TotalCasesMainContainer
} from './StyledComponents'

interface TotalCasesTypes{
   confirmedCases:number
   deathCases:number
   activeCases:number
   recoveredCases:number
}

@observer
class TotalCases extends React.Component <TotalCasesTypes> {
   render() {
      const {
         confirmedCases,
         deathCases,
         activeCases,
         recoveredCases
      } = this.props
      return (
         <TotalCasesMainContainer>
            <CaseContainer color='#e53e3e'>
               <CaseType>Confirmed</CaseType>
               <CasesNumber> {confirmedCases} </CasesNumber>
            </CaseContainer>

            <CaseContainer color='#3182ce'>
               <CaseType>Active</CaseType>
               <CasesNumber> {activeCases} </CasesNumber>
            </CaseContainer>

            <CaseContainer color='#48bb78'>
               <CaseType>Recovered</CaseType>
               <CasesNumber> {recoveredCases} </CasesNumber>
            </CaseContainer>

            <CaseContainer color='#595959'>
               <CaseType>Deaths</CaseType>
               <CasesNumber> {deathCases} </CasesNumber>
            </CaseContainer>
         </TotalCasesMainContainer>
      )
   }
}

export default TotalCases
//className = "transition duration-500 transform hover:-translate-y-1 hover:scale-110" >
