import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const CasesAndItsMapMainContainer = styled.div`
background: #13263a;
   ${tw`shadow-lg`}
`

export const CasesNameContainer = styled.div`
   ${tw`w-full  justify-center items-center flex  h-20`}
`


export const UnOrderedList = styled.ul`

   ${tw`w-full md:w-1/2 flex  font-serif justify-around`}
`

export const ListItems = styled.li`
color:${props=>props.color};
border-bottom:2px solid ${props=>props.color ==="" ? " #001a33":props.color };
   ${tw`cursor-pointer`}
`

// export const AnchorTag = styled.a`
// color:${props=>props.color};
// border-bottom:2px solid ${props=>props.color ==="" ? "black":props.color };
//    ${tw``}
// `

