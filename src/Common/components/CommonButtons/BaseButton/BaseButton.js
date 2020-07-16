import React, { Component } from 'react'
import { BaseButtonContainer } from './styledComponents'

// interface BaseButtonTypes {
//    className: any
//    buttonText: string
//    textTypo: any
//    variation: any
// }

class BaseButton extends Component {
   render() {
      const { css, buttonText, textTypo: TextTypo, ...otherProps } = this.props

      return (
         <BaseButtonContainer className={css} {...otherProps}>
            <TextTypo>{buttonText}</TextTypo>
         </BaseButtonContainer>
      )
   }
}

export default BaseButton
