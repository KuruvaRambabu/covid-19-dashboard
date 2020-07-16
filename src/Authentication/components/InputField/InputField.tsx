import React from 'react'
import { InputElement } from './styledComponents'
import { colors } from '../../themes/Colors'

type InputFieldTypes = {
   type: string
   placeholder: string
   value: string
   onChangeField: any
   errorMessage: string
   validate: any
   forwardRef: React.RefObject<HTMLInputElement>
}

class InputField extends React.Component<InputFieldTypes> {
   render() {
      const {
         type,
         placeholder,
         value,
         onChangeField,
         errorMessage,
         validate,
         forwardRef
      } = this.props
      return (
         <InputElement
            border={errorMessage ? 'red' : colors.steel}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChangeField}
            onBlur={validate}
            ref={forwardRef}
         ></InputElement>
      )
   }
}

export default InputField
