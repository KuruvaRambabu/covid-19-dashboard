import styled from "@emotion/styled"
import tw from "tailwind.macro"

export const TableContainer = styled.table`
${tw`w-full `}
`
export const TableRow = styled.tr`
    ${tw``}
`

export const TableHeader = styled.td`
    ${tw`text-center`}
`


export const DistrictWiseTableDataContainer = styled.tr`
background:${props=>(props.index%2)===0 ? "#13263a" : " #001a33"};
    ${tw` h-10`}
`