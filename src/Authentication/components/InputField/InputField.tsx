import React from 'react'
import { InputElement } from './StyledComponents'
import { colors } from '../../themes/Colors'

type InputFieldTypes = {
   type:string
   placeholder:string
   value:string
   onChangeField :any
   errorMessage:string
   validate:any
}

class InputField extends React.Component <InputFieldTypes>  {
   render() {
      const {
         type,
         placeholder,
         value,
         onChangeField,
         errorMessage,
         validate
      } = this.props
      return (
         <InputElement
            border={errorMessage ? 'red' : colors.steel}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChangeField}
            onBlur={validate}
         ></InputElement>
      )
   }
}

export default InputField
