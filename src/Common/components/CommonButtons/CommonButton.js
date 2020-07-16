import React, { Component } from 'react'
import { buttonType, variationType } from './constants'
import BaseButton from './BaseButton/BaseButton'
import { css, jsx } from '@emotion/core'

// interface CommonButtonTypes {
//    type: string
//    variation: string
//    buttonText: string
//    textTypo: any
//    disabled: boolean
// }

class CommonButton extends Component {
   static buttonType = buttonType
   static variationType = variationType

   getButtonVariation = variation => {
      switch (variation) {
         case variationType.oval:
            return 1
         case variationType.rectangle:
            return 2
      }
   }
   render() {
      const { type, variation, ...otherProps } = this.props
      switch (type) {
         case buttonType.filled:
            return (
               <BaseButton
                  {...otherProps}
                  variation={this.getButtonVariation(variation)}
               />
            )
         default:
            console.warn('Invalid button type', type)
            break
      }
   }
}

export default CommonButton
