import styled from "@emotion/styled"
import tw from "tailwind.macro"

export const HeaderMainContainer = styled.div`
    ${tw `flex flex-col justify-around  md:flex-row md:justify-between h-32  md:h-20 flex-flow items-center  `}
`
export const StateName = styled.p`
    ${tw``}
`
export const DatePicker = styled.input`
background:#001a33;
    ${tw` text-white ml-2  shadow-lg focus:outline-none w-48 h-8 `}
`
export const CasesTypecontainer = styled.div`
    ${tw``}
`
export const CumulativeBtn = styled.button`
    ${tw`border border-gray-700 mr-4`}
`

export const DailyBtn = styled.button`
    ${tw `border border-gray-700`}
`
export const Datelabel = styled.label`
    ${tw` `}
`