import React from 'react'
import {
   CaseContainer,
   CaseType,
   CasesNumber,
   TotalCasesMainContainer
} from './StyledComponents'

class TotalCases extends React.Component {
   constructor(props) {
      super(props)
      this.typeOfcases = ['Confirmed', 'Active', 'Recovered', 'Deaths']
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
            <CaseContainer>
               <CaseType>Confirmed</CaseType>
               <CasesNumber> {confirmedCases} </CasesNumber>
            </CaseContainer>

            <CaseContainer color='orange'>
               <CaseType>Active</CaseType>
               <CasesNumber> {activeCases} </CasesNumber>
            </CaseContainer>

            <CaseContainer color='green'>
               <CaseType>Recovered</CaseType>
               <CasesNumber> {recoveredCases} </CasesNumber>
            </CaseContainer>

            <CaseContainer color='black'>
               <CaseType>Deaths</CaseType>
               <CasesNumber> {deathCases} </CasesNumber>
            </CaseContainer>
         </TotalCasesMainContainer>
      )
   }
}

export default TotalCases
//className = "transition duration-500 transform hover:-translate-y-1 hover:scale-110" >
