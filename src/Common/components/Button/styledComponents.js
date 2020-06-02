import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../../Authentication/themes/Colors'

export const PrimarySignInButton = styled.button`
   ${tw`w-full h-8 mt-4 text-white flex justify-center rounded focus:outline-none`};
   background: ${colors.brightBlue};
   font-family: Rubik;
   font-size: 14px;
   font-weight: 800;
`
