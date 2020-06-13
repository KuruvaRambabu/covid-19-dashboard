import React from 'react'
import { DistrictBtn } from './styledComponent'

class DistrictButton extends React.Component {
   render() {
      const { district, onClickGotoDistrictPage } = this.props

      return (
         <DistrictBtn
            onClick={onClickGotoDistrictPage}
            id={district.districtId}
         >
            {district.districtName}
         </DistrictBtn>
      )
   }
}

export default DistrictButton
