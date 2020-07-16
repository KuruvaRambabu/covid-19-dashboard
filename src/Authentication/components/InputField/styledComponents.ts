import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../themes/Colors'

type borerType ={
   border:string
}

export const InputElement = styled.input`
   border: 1px solid ${(props:borerType) => (props.border === 'red' ? 'red' : colors.steel)};
   color: ${colors.darkBlueGrey};

   font-size: 16px;
   ${tw`focus:outline-none w-full h-8  `};
`
