import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { colors } from "../../themes/Colors";

export const InputElement = styled.input`
color:${colors.darkBlueGrey};
border:1px solid ${colors.steel};
${tw`focus:outline-none w-full h-8 text-xl  `};
       
        
`