import React from 'react'
import { DistrictBtn } from './styledComponent'

interface DistrictBtnTypes{
   district:any
   onClickGotoDistrictPage:any

}


class DistrictButton extends React.Component <DistrictBtnTypes>{
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
