import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const HeaderMainContainer = styled.div`
   ${tw`p-5 flex flex-col justify-around  md:flex-row md:justify-between h-40  md:h-20 flex-flow items-center  `}
`
export const StateName = styled.p`
   ${tw``}
`
export const DatePicker = styled.div`

background-color: red;

   ${tw` text-black `}
`
export const CasesTypecontainer = styled.div`
   ${tw``}
`
export const CumulativeBtn = styled.button`
   background: ${props => (props.isCumulative ? ' #4d0099' : '')};
   border: ${props => (props.isCumulative ? ' white' : '')};
   ${tw`border text-xl h-8 w-40 font-serif focus:outline-none rounded-lg mr-4`}
`

export const DailyBtn = styled.button`
   background: ${props => (props.isDaily ? ' #4d0099' : '')};
   border: ${props => (props.isDaily ? ' white' : '')};
   ${tw`border text-xl  h-8  w-32 font-serif focus:outline-none rounded-lg mr-4`}
`
export const Datelabel = styled.div`
   ${tw`flex  `}
`
