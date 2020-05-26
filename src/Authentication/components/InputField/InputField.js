import React from "react"
import { InputElement } from "./StyledComponents"


class InputField extends React.Component {
    render() {
        const { 
            type,
             placeholder,
              value,
            onChangeField } = this.props
        return (
            <InputElement
                type={type}
                placeholder={placeholder}
                value={value}
                onChange = {onChangeField}
            >
            </InputElement>
        )
    }
}

export default InputField