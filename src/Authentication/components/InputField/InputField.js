import React from 'react'
import { InputElement } from './StyledComponents'
import { colors } from "../../themes/Colors"



class InputField extends React.Component {
   render() {
      const {
         type,
         placeholder,
         value,
         onChangeField,
         errorMessage
      } = this.props
      return (
         <InputElement
            border={errorMessage ? 'red' : colors.steel}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChangeField}
         ></InputElement>
      )
   }
}

export default InputField
