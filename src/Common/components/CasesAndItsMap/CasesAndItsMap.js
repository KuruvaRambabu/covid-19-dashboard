import React, { useState } from 'react'

import { observer } from "mobx-react";

import MapComponent from "../MapComponent/MapComponent"


import {
   CasesAndItsMapMainContainer,
   UnOrderedList,
   ListItems,
   CasesNameContainer,
   AnchorTag
} from './styledComponents'
import { observable } from "mobx";



@observer
class CasesAndItsMap extends React.Component {
   @observable currentCaseOnMap = "confirmed"
   async componentDidMount() {
      const url = "https://cors-anywhere.herokuapp.com/" + "https://is.gd/kurnool";
      try {
         const response = await fetch(url)
         console.log("kurnool coordinates", response)
         const data = await response.json()
         console.log(data);

      } catch (e) {
         console.error(e)
      }
   }
   changeCaseTypeOnMap = (e) => {
      this.currentCaseOnMap = e.target.id
   }
   render() {
      
      return (
         <CasesAndItsMapMainContainer>
            <CasesNameContainer>
               <UnOrderedList>
                  <ListItems
                     id="confirmed"
                     color={this.currentCaseOnMap === "confirmed" ? "red" : ""}
                     onClick={this.changeCaseTypeOnMap}
                  >
                     Confirmed
                  </ListItems>
                  <ListItems
                     id="active"
                     color={this.currentCaseOnMap === "active" ? "blue" : ""}
                     onClick={this.changeCaseTypeOnMap}
                  >
                     Active
                  </ListItems>
                  <ListItems
                     id="recovered"
                     color={this.currentCaseOnMap === "recovered" ? "green" : ""}
                     onClick={this.changeCaseTypeOnMap}
                  >
                     Recovered
                  </ListItems>
                  <ListItems
                     id="deaths"
                     color={this.currentCaseOnMap === "deaths" ? "orange" : ""}
                     onClick={this.changeCaseTypeOnMap}
                  >
                     Deaths
                  </ListItems>
               </UnOrderedList>
            </CasesNameContainer>
         <MapComponent />

         </CasesAndItsMapMainContainer>
      )
   }
}

export default CasesAndItsMap

