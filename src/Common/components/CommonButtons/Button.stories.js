import React from 'react'
import tw from 'tailwind.macro'
import { withKnobs, color, boolean, number, text } from '@storybook/addon-knobs'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import CommonButton from './CommonButton'
import { variationType } from './constants'

const Typo14DarkBlueGreyHKGroteskRegularSpan = styled.span`
   font-family: HKGrotesk;
   font-size: 14px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
`

export default {
   component: CommonButton,
   title: 'Button'
}

export const BaseButton = () => (
   <CommonButton
      type={CommonButton.buttonType.filled}
      buttonText={'Base Button'}
      textTypo={Typo14DarkBlueGreyHKGroteskRegularSpan}
      css={tw`w-64 p-1 h-20 bg-yellow-500`}
      disabled={false}
      // variation={CommonButton.variationType.rectangle}
   />
)
