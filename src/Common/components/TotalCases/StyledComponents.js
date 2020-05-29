import styled from "@emotion/styled"
import tw from "tailwind.macro"

export const TotalCasesMainContainer = styled.div`
    ${tw ` w-full md:w-11/12 border md:flex md:justify-between`}
`


export const CaseContainer = styled.div`
background: ${props => props.color};
    ${tw `w-11/12   h-20  flex flex-col justify-center items-center`}
`

export const CaseType = styled.p`
    ${tw``}
`

export const CasesNumber = styled.p`
    ${tw`text-xl font-bold`}
`


// export const ConfirmedCasesContainer = styled.div`
//     ${tw `w-40 bg-red-500 h-20  flex flex-col justify-center items-center`}
// `

// export const ConfirmedName = styled.p`
//     ${tw``}
// `

// export const ConfirmedNumber = styled.p`
//     ${tw`text-xl font-bold`}
// `

// export const ActiveCasesContainer = styled.div`
//     ${tw `w-40 bg-orange-500 h-20  flex flex-col justify-center items-center`}
// `

// export const ActiveName = styled.p`
//     ${tw``}
// `

// export const ActiveCasesNumber = styled.p`
//     ${tw`text-xl font-bold`}
// `


// export const RecoveredCasesContainer = styled.div`
//     ${tw `w-40 bg-green-500 h-20  flex flex-col justify-center items-center`}
// `

// export const RecoveredName = styled.p`
//     ${tw``}
// `

// export const RecoveredCasesNumber = styled.p`
//     ${tw`text-xl font-bold`}
// `

